import React from "react";
import { connect } from "react-redux";
import Canvas01 from "components/Canvas/Canvas01";


export default class CanvasDemo extends React.PureComponent {
  render() {
    return (
      <div>
        <Canvas01 />
      </div>
    );
  }
}
