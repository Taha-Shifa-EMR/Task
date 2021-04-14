import React, { useState, useEffect } from "react";
import {
  Select,
  Button,
  Avatar,
  Typography,
  Menu,
  Dropdown,
  Drawer,
  Row,
  Col,
  message,
  DatePicker,
  Modal,
  Input,
} from "antd";
import {
  MoreOutlined,
  UnorderedListOutlined,
  PrinterOutlined,
  DownloadOutlined,
  LogoutOutlined,
  SettingOutlined,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import loginLogo from "../../../assets/images/login-logo.png";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import "./style.css";

import { userLoginSuccess, logoutUserAction } from "../../../lib/actions";

const { Title, Text } = Typography;
const key = "updatable";
const { Option } = Select;
const printMenu = (
  <Menu style={{ marginTop: "10px", width: 200 }}>
    <Menu.Item className="print-dropdown">
      <PrinterOutlined />
      Print
    </Menu.Item>
  </Menu>
);

const TopHeader = ({ location, setShowLoaderOnTable, handleDate, date }) => {
  const dispatch = useDispatch();
  const handleProfileMenu = ({ key }) => {
    switch (key) {
      case "logout":
        logout();
        break;
      default:
    }
  };
  const history = useHistory();
  const logout = () => {
    dispatch(userLoginSuccess(null));
    dispatch(logoutUserAction());

    message.success({
      content: "User logged out successfully!",
      key,
      duration: 2,
    });
    history.push('/');
  };

  const menuUser = () => (
    <Menu onClick={handleProfileMenu} tyle={{ marginTop: "10px" }}>
      <Menu.Item key="userProfile" className="header-user-menu-item">
        {/* <a
          rel="noopener noreferrer"
          href="#"
        > */}
        <Row>
          <Col className="user-menu-ite" span={24}>
            <Text style={{ color: "#3c4c7b" }}>My Profile</Text>
          </Col>
        </Row>
        {/* </a> */}
      </Menu.Item>
      <Menu.Item key="logout">
        <Row>
          <Col span={2} style={{ marginTop: "2px" }}>
            <LogoutOutlined />
          </Col>
          <Col className="user-menu-items-text" span={22}>
            <Text>Logout</Text>
          </Col>
        </Row>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="top-header-container">
        <div className="top-header-logo-container">
          <img src={loginLogo} alt="image" className="logo" />
        </div>
        <div className="top-header-logo-container">
          {/* <strong style={{ color: "blue" }} >  </strong> */}
        </div>
        {/* yahan pe */}
        <div className="header-sideNav">
          <UnorderedListOutlined className="heder-sideNav-logo" />
        </div>

        <div className="header-user-container">
          <div className="header-select-container" style={{ display: 'block' }}>
               
              </div>

          <div
            className="header-user-settings"
            style={{ display: "none" }}
          ></div>
          <div className="header-user-image">
            <Dropdown
              overlay={menuUser}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Avatar  
                icon={<UserOutlined />}
                style={{ marginTop: "3px", marginRight: "8px" }}
                size={40}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
