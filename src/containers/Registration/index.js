import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Input, Avatar, Typography, message } from "antd";
import { UserOutlined, LoginOutlined, LockOutlined } from "@ant-design/icons";

import loginLogo from "../../images/login-logo.png";
import { registerUser } from "../../lib/api/api";
import "./style.css";

const { Text } = Typography;
const key = "updatable";

const RegisterUser = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
            //---------get location and IP----------//
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log("Request failed:", response);
        setIpAddress(response.query); //Set IP Address
        setLocation(response.city);  // Set City Name
      })
      .catch((data, status) => {});
  }, []);

  const history = useHistory();
  const onFinish = (values) => {
    const registerData = {
      Email: values.username,
      Password: values.password,
      ConfirmPassword: values.confirmPassword,
      IP: ipAddress,
      Location: location,
    };

    registerUser(registerData)
      .then((res) => {
        message.success({
          content: "User Registered Successfully",
          duration: 2,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        message.error({
          content: "Error Occur",
          duration: 2,
        });
        history.push("/");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-login">
      <div className="login-container">
        <div className="login-logo">
          <img alt="login-logo" src={loginLogo} className="login-logo"></img>
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
              label="Enter your Email"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
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
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="login-form-container-data"
            >
              <Input.Password
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
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              //rules={[{ message: "Please input your password!" }]}
              className="login-form-container-data"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please Re-Enter your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                className="login-input"
                placeholder="Re-Enter Password"
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
                Register {<LoginOutlined className="login-submit-button" />}
              </Button>
            </Form.Item>

            <Text
              className="forgot-password"
              type="secondary"
              onClick={() =>
                history.push({
                  pathname: "/",
                })
              }
            >
              Login
            </Text>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
