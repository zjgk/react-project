import Model from "../Model";

export default Model.getInstance(
  class extends Model {
    namespace = "home";
    state = {
      homeName: "",
    };

    actions = {
      updateAction(data=6666) {
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
    };
  }
);
