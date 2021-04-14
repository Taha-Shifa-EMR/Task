import React from "react";
import { Typography, Table as AntDTable, Button, Avatar, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const { Text } = Typography;

const Table = ({ columns, dataSource }) => {
  return (
    <div className="opd-appoint-list">
      <div>
        <AntDTable
          style={{ overflowX: "scroll" }}
          columns={columns}
          dataSource={dataSource}
          pagination={true}
        />
      </div>
      <div className="opd-appoint-footer">
        <Row justify="center" className="opd-footer-item">
          {dataSource && (
            <div className="opd-appoint-footer-record">
              <span>{dataSource.length}</span> Records Found
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Table;
