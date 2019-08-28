import React from "react";
import { withRouter } from "react-router-dom";

export const PathnameRecord = withRouter(
  class extends React.Component {
    state = {};
    static getDerivedStateFromProps(props, state) {
      if (props.location !== state.location) {
        props.store.dispatch({
          type: "global/setPathname",
          payload: props.location.pathname
        });
        return { location: props.location };
      }
      return null;
    }

    render() {
      return this.props.children;
    }
  }
);
