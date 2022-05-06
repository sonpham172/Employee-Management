import React from "react";
import { LoadingOutlined, WarningOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { LIST_STATUS_ACTION } from "../../redux/constants/employeeConstants";

const StatusComponent = ({ status }) => {
  return (
    <div>
      {status === LIST_STATUS_ACTION.LOADING &&
        <div className="status-icon">
          <div className='status-spinner'>
            <LoadingOutlined />
          </div>
          <div className='status-text'> Loading . . . </div>
        </div>}
      {status === LIST_STATUS_ACTION.FAILED &&
        <div className="status-icon">
          <div className='status-spinner-failed'>
            <WarningOutlined />
          </div>
          <div className='status-text'> Error ! </div>
        </div>}
      {status === LIST_STATUS_ACTION.EMPTY &&
        <div className="status-icon">
          <div className='status-spinner-empty'>
            <InfoCircleOutlined />
          </div>
          <div className='status-text'> Nothing found ! </div>
        </div>}
    </div>
  );
}

export default StatusComponent;
