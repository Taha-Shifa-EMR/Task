import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Form, Button, Input, Avatar, Typography, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { UserOutlined, LoginOutlined, LockOutlined } from "@ant-design/icons";

import loginLogo from "../../assets/images/login-logo.png";
import { loginUserAction } from "../../lib/actions";
import "./style.css";

const { Text } = Typography;
const key = "updatable";

const Login = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  const dispatch = useDispatch();

 
 
  const onFinish = async (values) => {
    const { username: email, password } = values;
    dispatch(loginUserAction({ email, password }));
    setTimeout(() => {
      const isAutheticated = localStorage.getItem("isAuthenticated");
      if (isAutheticated) {
        message.success({
          content: "User logged in successfully!",
          key,
          duration: 2,
        });
        history.push("register");
      } else {
        message.error({
          content: "Username or Password is incorrect!",
          key,
          duration: 2,
        });
        history.push("dashboard");
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-login">
      <div className="login-container">
        <div className="login-logo">
          <img
            alt="login-logo"
            src={loginLogo}
            className="login-logo"
          ></img>
        </div>
        <div>
          <Form
            className="login-form-container"
            // {...layout}
            onFinish={onFinish}
            name="loginForm"
            initialValues={{ remember: true }}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ message: "Please input your username!" }]}
              className="login-form-container-data"
            >
              <Input
                className="login-input"
                placeholder="Enter User Name"
                suffix={
                  <Avatar
                    className="login-input-icon"
                    icon={<UserOutlined />}
                  />
                }
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ message: "Please input your password!" }]}
              className="login-form-container-data"
            >
              <Input
                type="password"
                className="login-input"
                placeholder="Enter Password"
                suffix={
                  <Avatar
                    className="login-input-icon"
                    icon={<LockOutlined />}
                  />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="login-submit-btn"
                type="primary"
                htmlType="submit"
              >
                LOGIN {<LoginOutlined className="login-submit-button" />}
              </Button>
            </Form.Item>

            <Text className="forgot-password" type="secondary"
             onClick={() => history.push({
              pathname: "/register"
            })} >
               Register
            </Text>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;