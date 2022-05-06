import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useModal } from "../../../shared/custom-hook/useModal";
import { LIST_STATUS_ACTION } from "../../../redux/constants/employeeConstants";
import StatusComponent from "../../common/StatusComponent";

const EmployeeListContent = ({ employees, onDeleteEmployee }) => {
  const { showModal } = useModal();
  const [dataEmployee, setDataEmployee] = useState([]);
  const columns = [
    {
      title: 'Firstname',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Lastname',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email address',
      dataIndex: 'email_address',
      key: 'email_address',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/employee/edit/${record.id}`}>
            <Button type="primary" size='small'>Edit</Button>
          </Link>
          <Button size='small' onClick={() => showModal({
            bodyContent: {
              text: "Are you sure you want to delete record have name",
              record
            },
            titleHeader: "Delete Employee",
            callbackFunction: onDeleteEmployee
          })}>Delete</Button>
        </Space>
      ),
    },
  ];

  // mapping data at server with data for table
  useEffect(() => {
    let updateDataEmployee = [];
    employees?.data?.map((employee) => {
      updateDataEmployee.push({
        key: employee?.id,
        ...employee
      });
    });
    setDataEmployee(updateDataEmployee);
  }, [employees]);

  return (
    <div>
      {employees?.status === LIST_STATUS_ACTION.SUCCESS && <div>
        <div className="emp-list-content">
          <Tooltip title="create new employee">
            <Link to="/employee/add"><Button size='large' type='primary' icon={<PlusOutlined />}>Add new</Button></Link>
          </Tooltip>
        </div>
        <Table columns={columns} dataSource={dataEmployee} pagination={false} />
      </div>
      }

      {employees?.status === LIST_STATUS_ACTION.LOADING && <StatusComponent status={LIST_STATUS_ACTION.LOADING} />}
      {employees?.status === LIST_STATUS_ACTION.FAILED && <StatusComponent status={LIST_STATUS_ACTION.FAILED} />}
    </div>
  )
}

export default EmployeeListContent;
