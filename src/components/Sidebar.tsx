import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Bills from "./Bills";
import PaymentMethods from "./PaymentMethods";
import Settings from "./Settings";
import Services from "./Services";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo">Foo</div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Bills</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/payment-methods">Payment Methods</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Sidebar;
