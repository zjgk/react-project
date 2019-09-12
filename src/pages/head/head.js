import React from "react";
import { connect } from "react-redux";
import global from "store/reducers/global";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


@connect(
  ({ global }) => {
    return { ...global };
  },
  {
    ...global.actions
  }
)
export default class Head extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { val: "" };
  }

  render() {
    console.log(this.props);
    const { dataList = {} } = this.props;
    const { list = [] } = dataList;
    return (
      <div>
        <Link to="/home">home</Link>&nbsp;
        <Link to="/login">login</Link>
        我是导航的
      </div>
    );
  }
}
