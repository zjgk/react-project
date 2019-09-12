import Model from "../Model";
import { createBrowserHistory } from 'history';
import { clearAuthority, setAuthority } from "utils/authority";
import { loginReq, isLoginReq, logoutReq, restPwd } from "services/userS";
import { reloadAuthorized } from "utils/Authorized";
import { history } from "../../index.js"

export default Model.getInstance(
  class extends Model {
    namespace = "user";

    state = {
      org_info: { // 组织架构
        org_city: {},
        org_team: {},
        org_group: {},
        org_user: {},
      },
    };

    actions = {
      async login(param) {
        console.log('dd', history)
        // debugger
        // const loginReqRes = await loginReq(param);
        // if (loginReqRes && loginReqRes.code === 0) {
        //   this.dispatch({
        //     type: "user/setUser",
        //     payload: loginReqRes.data
        //   });
        //   setAuthority(loginReqRes.data.roles);
        //   // reloadAuthorized();
        //   // history.push("/workBench");
        // }
        reloadAuthorized();
        setAuthority("admin");
        history.push("/");

      },

      async isLogin() {
        // const isLoginReqRes = await isLoginReq();
        // if (isLoginReqRes && isLoginReqRes.code === 0) {
        //   this.dispatch({
        //     type: "user/setUser",
        //     payload: isLoginReqRes.data
        //   });
        // } else {
        //   clearAuthority();
        //   // history.replace("/user/login");
        // }
        console.log("初始的")
      },

      async logout() {
        // const logoutReqRes = await logoutReq();
        // if (logoutReqRes.code === 0) {
        //   this.dispatch({
        //     type: "user/setUser",
        //     payload: {}
        //   });
        //   clearAuthority();
        //   history.replace("/user/login");
        // }
        clearAuthority();
        history.replace("/login");
      },
      async restPwd(param) {
        const result = await restPwd({ ...param });
        return result;
      }
    };

    reducers = {
      setUser(state, { payload: loginReqRes }) {
        return { ...state, ...loginReqRes };
      },
      setUnread(state, { payload: data }) {
        if (data) {
          state.unread_message = state.unread_message ? state.unread_message - 1 : 0;
        }
        return { ...state, };
      }
    };
  }
);
