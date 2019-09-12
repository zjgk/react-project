import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
// import GlobalFooter from '@/components/GlobalFooter';
import styles from "./UserLayout.scss";
import logo from 'assets/imgs/login-logo.png';
import loginBg from 'assets/imgs/bg.png';

const links = [
  {
    key: "help",
    title: "帮助",
    href: ""
  },
  {
    key: "privacy",
    title: "隐私",
    href: ""
  },
  {
    key: "terms",
    title: "条款",
    href: ""
  }
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
  </Fragment>
);

class UserLayout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className="container">
        <div className="content">
          <img alt="logo" className="logo" src={logo} />
          {children}
        </div>
        {/* <GlobalFooter links={links} copyright={copyright} /> */}
        <style jsx>{styles}</style>
        <style jsx global>{`
          @media (min-width: 768px) {
            .container {
              background-image: url('${loginBg}');
            }
          }
        `}</style>
      </div>
    );
  }
}

export default UserLayout;
