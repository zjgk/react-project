import React, { PureComponent } from "react";
import { Layout, Icon } from "antd";
const { Header: AntHeader } = Layout;

export default class Header extends PureComponent {
  toggle = () => {
    const { collapsed, handleMenuCollapse } = this.props;
    handleMenuCollapse(!collapsed);
  };

  render() {
    const { customHeader, collapsed } = this.props;
    return (
      <AntHeader style={{ padding: 0 }} className="layout-header">
        <div className="header">
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          />

          {customHeader}
        </div>
        <style jsx>
          {`
            // .header {
            //   background: #fff;
            //   box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            //   height: 50px;
            //   :global(.trigger) {
            //     font-size: 14px;
            //     height: 50px;
            //     cursor: pointer;
            //     transition: all 0.3s, padding 0s;
            //     padding: 20px 20px;
            //   }
            // }
          `}
        </style>
      </AntHeader>
    );
  }
}
