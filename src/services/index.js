import { urlEncode } from "utils/url";
// import { message } from "antd";
// import { history } from "root";
// message.config({
//   top: 100,
//   duration: 2,
//   maxCount: 1
// });
const _ = require("underscore");

const xhr = ({ url, body = null, method = "get", needMessage = true }) => {
  function transformError(response) {
    let message = "系统异常，请联系管理员";
    if (!_.isEmpty(response.msg)) {
      message = response.msg;
    }
    if (!_.isEmpty(response.data)) {
      if (_.isObject(response.data)) {
        message = _.values(response.data)[0];
      } else if (_.isString(response.data)) {
        message = response.data;
      }
    }
    return message;
  }

  function parseRequest(response) {
    response.transformError = ""; //
    if (response.code == 0 || (response.code >= 200 && response.code < 300)) {
      return response;
    } else if (response.code == 404) {
      // 这里抛出错误方便服务器端也能处理
      throw response;
    } else if (response.code == 500) {
      throw response;
    } else if (response.code == 101) {  // 未登录
      // history.push("/user/login")
      return response;
    } else {
      response.transformError = transformError(response);
      if (needMessage) {
        // message.error(response.transformError); // 这里做一个全局的异常提示
        alert(response.transformError); // 这里做一个全局的异常提示
      }
      return response;
    }
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  function log(response) {
    console.log(url, response);
    return response;
  }

  let param = {
    method: method,
    headers: { "Content-Type": "application/json", Accept: "*/*" }
  };

  if (body) {
    method === "post" ||
    method === "POST" ||
    method === "put" ||
    method === "PUT"
      ? (param.body = JSON.stringify(body))
      : (url = `${url}?${urlEncode(body)}`);
  }

  param.credentials = "include";
  return (
    fetch(url, param)
      // .then(checkStatus)
      .then(parseJSON)
      .then(parseRequest)
      .then(log)
      .catch(response => {
        if (response.code === 404) {
          // 重定向404
        } else if (response.code === 500) {
          // 重定向500
        }
      })
  );
};

export default xhr;
