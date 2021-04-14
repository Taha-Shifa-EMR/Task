import React, { Component, useState, useEffect } from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Checkbox,
  Input,
  message,
  Select,
  Button,
} from "antd";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import BalanceDetail from "../../components/BalanceDetail";
import GoogleAuthentication from "../../components/GoogleAuthentication";
import SMS from "../../components/SMSAuthentication";
import AntiPhrase from "../../components/AntiPhrase";
import WithDrawal from "../../components/WithDrawal";
import DeviceManagement from "../../components/DeviceManagement";
import LoginRecord from "../../components/LoginRecord";
import { useSelector } from "react-redux";

import "./style.css";
const { Text } = Typography;
const { TextArea } = Input;
let accountBalance = '215212412121 BTC';
let estimatedValue = '265656554326213 BTC';
const columnDevice = [
  {
    title: <div className="opd-table-headings">Device</div>,
    dataIndex: "device",
    key: "device",
  },
  {
    title: <div className="opd-table-headings">Location</div>,
    dataIndex: "location",
    key: "location",
  },
  {
    title: <div className="opd-table-headings">Latest Time</div>,
    dataIndex: "time",
    key: "time",
  },
  {
    title: <div className="opd-table-headings">IP Address</div>,
    dataIndex: "address",
    key: "adress",
  },
];
const columnLoginRecords = [
  {
    title: <div className="opd-table-headings">Time</div>,
    dataIndex: "time",
    key: "time",
  },
  {
    title: <div className="opd-table-headings">IP Adress</div>,
    dataIndex: "ip",
    key: "ip",
  },
  {
    title: <div className="opd-table-headings">Location</div>,
    dataIndex: "loc",
    key: "loc",
  },
];
const dataSourceDevice = [
  {
    key: '1',
    device: 'Lenovo',
    location: 'Rawal',
    time: '10:15:00 AM',
    address: '172.168.1.1',
  },
  {
    key: '2',
    device: 'Lenovo',
    location: 'Rawal',
    time: '10:15:00 AM',
    address: '172.168.1.1',
  },
  {
    key: '3',
    device: 'Lenovo',
    location: 'Rawal',
    time: '10:15:00 AM',
    address: '172.168.1.1',
  },
  {
    key: '4',
    device: 'Lenovo',
    location: 'Rawal',
    time: '10:15:00 AM',
    address: '172.168.1.1',
  },
];
const dataSourceLoginRecords = [
  {
    key: '1',
    time: '10:15:15 AM',
    ip: '172.1.1.1',
    loc: 'N/A',
  },
  {
    key: '2',
    time: '10:15:15 AM',
    ip: '172.1.1.1',
    loc: 'N/A',
  },
  {
    key: '3',
    time: '10:15:15 AM',
    ip: '172.1.1.1',
    loc: 'N/A',
  },
  {
    key: '4',
    time: '10:15:15 AM',
    ip: '172.1.1.1',
    loc: 'N/A',
  },
  
];
const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="main-screen-container">

 <Row gutter={[6, 6]}>
 

  <Col lg={16} className="ptn-screen-right">
    <Row gutter={[6, 6]}>
     
      <Col xs={24} md={24} lg={20}>
        <BalanceDetail  accountBalance={accountBalance} estimatedValue={estimatedValue}/> 
      </Col>
      
      <Col xs={24} md={24} lg={20}>
        <DeviceManagement deviceManagement={columnDevice} dataSource={dataSourceDevice}/> 
      </Col>
      
    </Row>
  </Col>
  <Col lg={8}>
    <Col xs={24} lg={24}>
      <GoogleAuthentication />
    </Col>
    <Col xs={24} lg={24}>
      <SMS />
    </Col>
    <Col xs={24} lg={24}>
      <AntiPhrase />
    </Col>
    <Col xs={24} lg={24}>
      <WithDrawal />
    </Col>
    <Col xs={24} lg={24}>
      <LoginRecord columnLoginRecords={columnLoginRecords} dataSourceLoginRecords={dataSourceLoginRecords}/>  
    </Col>
    
  </Col>
</Row>
</div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
