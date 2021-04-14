import React, { useEffect, useState } from "react";
import { Row, Col, Select, Form, Input, message, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography;
const BalanceDetail = ({accountBalance,estimatedValue}) => {
    console.log("accountBalance:::", accountBalance);
  const dispatch = useDispatch();

  return (
    <div className="complaints-container ">
      <Form>
        <Row align="middle">
          <Col xs={24} md={12}>
            <Text  className="container-heading">
                Balance Detail
                </Text>
          </Col>
        </Row>
        <Row className="complaints-text-area">
          <Col span={24}>
          <Text  className="container-heading">
               Account Balance: {accountBalance}
                </Text>    
          </Col>
        </Row>
        <Row className="complaints-text-area">
          <Col span={24}>
                <Text  className="container-heading">
               Estimated Value: {estimatedValue}
                </Text>      
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BalanceDetail;
