import Model from "../Model";
import * as homeS from "services/homeS";
export default Model.getInstance(
  class extends Model {
    namespace = "global";
    state = {
      name: "",
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
        const expand = "type_name,source_name,update_time_str,online_time_str,status_name,push_site_name";
        let result = await homeS.articleManageList({
          expand
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
      }
    };
  }
);
