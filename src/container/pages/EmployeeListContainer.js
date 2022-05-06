import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { getListEmployee, deleteEmployee } from "../../redux/actions";
import EmployeeListContent from "../../component/pages/employee-list/EmployeeListContent";
import { useToast } from "../../shared/custom-hook/useToast";
import { useHasChanged } from "../../shared/custom-hook/usePrevious";
import { LIST_STATUS_ACTION } from "../../redux/constants/employeeConstants";

const EmployeeListContainer = ({ employeeList, removeEmployee }) => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const doesRemoveEmployeeChanged = useHasChanged(removeEmployee?.status);

  useEffect(() => {
    dispatch(getListEmployee())
  }, []);
  
  useEffect(() => {
    // action after removed a record successfully
    // then show a notification with status return from server
    if (doesRemoveEmployeeChanged && removeEmployee?.status === LIST_STATUS_ACTION.SUCCESS) {
      showToast({
        title: "Remove Employee Notification",
        message: `Remove employee ${removeEmployee?.status?.toLowerCase()}!`
      });
    }
  });

  const onDeleteEmployee = (record) => {
    dispatch(deleteEmployee(record));
  }

  return (
    <div className="employee-list-container">
      <EmployeeListContent
        employees={employeeList}
        onDeleteEmployee={onDeleteEmployee}
      />
    </div>
  )
}

const mapStateToProps = ({ employees }) => {
  const { employeeList, removeEmployee } = employees;
  return { employeeList, removeEmployee }
};
export default connect(mapStateToProps, {
  getListEmployee,
  deleteEmployee
})(EmployeeListContainer);
