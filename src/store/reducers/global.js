import Model from "../Model";
import * as homeS from "services/homeS";
export default Model.getInstance(
  class extends Model {
    namespace = "global";
    state = {
      name: "",
      collapsed: false,
      pathname: "",
      dataList: {}
    };

    actions = {
      async updateAction(data=6666) {
        this.dispatch({
          type: "global/setUpdate",
          payload: {
            number:data
          }
        });
        let result = await homeS.articleManageList({
          page:1,
          pages:5
        });
        if (result) {
          this.dispatch({
            type: "global/setUpdateState",
            payload: {
              filed: "dataList",
              value: { ...result.data, loadingStatus: false }
            }
          });
        }
      },
      getInfo(data=6666) {
        this.dispatch({
          type: "global/setUpdate",
          payload: {
            number:data
          }
        });
      }
    };

    reducers = {
      setUpdate(state, { payload: data }) {
        return { ...state, name:data };
      },
      Update(state, { payload: data }) {
        return { ...state, name:data };
      },
      setUpdateState(state, { payload }) {
        const { filed, value } = payload;
        state[filed] = value;
        return { ...state };
      },
      setPathname(state, { payload: pathname }) {
        return {
          ...state,
          pathname
        };
      },
      changeLayoutCollapsed(state, { payload: collapsed }) {
        return {
          ...state,
          collapsed
        };
      },
    };
  }
);
