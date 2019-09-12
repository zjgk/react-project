import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Dropdown, Avatar, Menu, Popover, Spin, Badge, AutoComplete, Input } from "antd";
import BasicLayout from "./BasicLayout";
// import Exception403 from "../page/exception/403";
import Authorized from "utils/Authorized";
import global from "store/reducers/global";
import { Redirect } from "react-router-dom";
import { clearAuthority } from "utils/authority";
import { history } from "../index.js";
import userModel from "store/reducers/userM";
// import logoSrc from "assets/imgs/layout-logo.png";
let logoSrc=""
import "./GeeLayout.scss"
@connect(
  ({ global }) => {
    return { ...global };
  },
  {
    isLogin: userModel.actions.isLogin
  }
)
export default class GeeLayout extends PureComponent {
  componentDidMount() {
    this.props.isLogin();
  }

  render() {
    const { collapsed } = this.props;
    console.log('gee', this.props)
    const logo = (
      <React.Fragment>
        <div className="left-logo" style={{ height: `${collapsed ? 69 : 150}px` }}>
          <img
            className={`${collapsed ? "logo-sm" : ""}`}
            src={logoSrc}
          />
          {!collapsed && <div className="logo-title">管理系统</div>}
        </div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Authorized
          authority={[
            "admin",
            "business",
            "city_manager",
            "consultant",
            "consultant360",
            "channel",
            "operator",
            "team_leader",
            "group_leader"
          ]}
          noMatch={<Redirect to="/login" />}
        >
          <div
            className="layout-box"
          >
            <BasicLayout
              logo={logo}
              className="gee-layout"
              customHeader={<CustomHeader />}
              {...this.props}
            />
          </div>
        </Authorized>
      </React.Fragment>
    );
  }
}

@connect(
  ({ user, global }) => {
    return {
      unread: user.unread_message,
      userAuth: user.roles,
      username: user.name,
      avatar: user.avatar,
      drawerStack: global.drawerStack,
      globalLoading: global.globalLoading,
    };
  },
  {
    logout: userModel.actions.logout,
  }
)
class CustomHeader extends PureComponent {
  state = {
    currentLocation: history.location.pathname,
    busniseeModalVisible: false
  };

  componentDidMount() {

  }





  handleBusinessCancel = () => {
    this.setState({
      busniseeModalVisible: false
    });
  };


  moreClick = () => {
    if (
      this.state.currentLocation.indexOf("message") == -1 ||
      this.state.currentLocation.indexOf("message") > 5
    ) {
      history.push("/message");
    }
    this.setState({ noticeVisible: false });
  };

  render() {
    const {
      username="名字",
      avatar,
      logout,
      userAuth,
      drawerStack,
      topMessageLoading,
      topMessageList,
      unread,
      globalLoading
    } = this.props;
    const { currentLocation, noticeVisible } = this.state;

    const menu = (
      <Menu className="user-down-menu" selectedKeys={[]}>
        <Menu.Item key="userCenter">
          <Link to="/head">
            <Icon type="user" style={{ marginRight: 5 }} />
            个人中心
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <span onClick={logout}>
            <Icon type="logout" style={{ marginRight: 5 }} />
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    );

    return (
      <React.Fragment>
        <div className="user right">
          <div className="quick-actions">
            <Dropdown overlay={menu} placement={"bottomCenter"}>
              <span className="account">
                <Avatar
                  className="avatar"
                  src={avatar ? avatar : require("assets/imgs/icon-toux.png")}
                  alt="avatar"
                />
                <span className="name">{username}</span>
              </span>
            </Dropdown>
          </div>
          <div className="drawer-stack-wrapper">
            {drawerStack &&
              drawerStack.map((item, index) => {
                console.log("okok", item);
                let ComponentRef = item.componentRef;
                return (
                  <div key={index}>
                    <ComponentRef {...item.componentProps} />
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
