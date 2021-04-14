import React from "react";
import { Layout, Row, Col } from "antd";
import { CopyrightCircleOutlined } from '@ant-design/icons';
import './style.css';

const { Footer: LayoutFooter } = Layout;

function Footer() {
  return (
    <Layout>
      <LayoutFooter style={{ background: "#eaf0f7", padding: "10px 0" }}>
        <Row>
          <Col span={24}>
            <div className="footer-text" >
              <CopyrightCircleOutlined className="footer-copy-right-logo" />{(new Date().getFullYear())} RNS Task </div>
          </Col>
        </Row>
      </LayoutFooter>
    </Layout>
  );
}

export default Footer;
