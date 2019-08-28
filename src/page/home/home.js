import React from "react";
import { connect } from "react-redux";
import global from "store/reducers/global";

@connect(
  ({ global }) => {
    return { ...global };
  },
  {
    ...global.actions
  }
)
export default class Home extends React.PureComponent {
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
        <div>
          <input
            onChange={e => {
              this.setState({ val: e.target.value });
            }}
          />
          <button
            onClick={() => {
              console.log(this.props);
              this.props.updateAction(this.state.val);
            }}
          >
            发送
          </button>
          {list.map(item => {
            return <div key={item.id}>{item.source_name}</div>;
          })}
          <div>
          </div>
        </div>
      </div>
    );
  }
}
