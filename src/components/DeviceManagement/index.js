import React, { useEffect, useState } from "react";
import { Row, Col, Select, Form, Input, message, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Table from "../Table/index"
import "./style.css";
const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography;
const Device = ({deviceManagement, dataSource}) => {
  
  const dispatch = useDispatch();

  return (
    <div className="complaints-container ">
      <Form>
        <Row align="middle">
          <Col xs={24} md={12}>
            <Text  className="container-heading">
                Device Management
                </Text>
          </Col>
        </Row>
        <Row className="complaints-text-area">
          <Col span={24}>
         <Table 
         columns={deviceManagement}
         dataSource={dataSource}
         />
          </Col>
        </Row>
       
      </Form>
    </div>
  );
};

export default Device;
