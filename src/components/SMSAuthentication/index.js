import React, { useEffect, useState } from "react";
import { Row, Col, Select, Form, Input, message, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography;
const SMS = () => {
  const dispatch = useDispatch();

  return (
    <div className="follow-up-container">
      <Row>
        <Col xs={24}>
          <Text className="container-heading">SMS Authentication</Text>
        </Col>
        <Col xs={24} className="mt-10">
          <Row>
            <Col span={10}>
              <Text className="input-presction-text border-radius-right">For Login Withdrawal</Text>
            </Col>
           
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SMS;
