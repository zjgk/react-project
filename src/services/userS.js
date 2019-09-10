import xhr from "./index";

function loginReq(param) {
  return xhr({ url: "/admin/v1/user/login", body: param, method: "POST" });
}

function isLoginReq() {
  return xhr({ url: "/admin/v1/user/is-login", method: "GET" });
}

function logoutReq() {
  return xhr({ url: "/admin/v1/user/logout", method: "GET" });
}
function restPwd(param) {
  return xhr({ url: "admin/v1/user/rest-pwd", body: param, method: "POST" });
}

export { loginReq, isLoginReq, logoutReq, restPwd };
