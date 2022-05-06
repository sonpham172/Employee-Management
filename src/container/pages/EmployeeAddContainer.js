import React, { useEffect } from "react";
import { getFormValues } from 'redux-form';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  useParams,
  useHistory
} from "react-router-dom";

import AddEmployee from "../../component/pages/employee-add-edit/AddEmployee";
import { useToast } from "../../shared/custom-hook/useToast";
import { createEmployee, getDetailEmployee, editEmployee } from "../../redux/actions";
import { useHasChanged } from "../../shared/custom-hook/usePrevious";
import { LIST_STATUS_ACTION } from "../../redux/constants/employeeConstants";

const EmployeeAddContainer = ({ formCreateEmployee, addEmployee, itemEmployee, updateEmployee, removeEmployee }) => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const history = useHistory();
  const doesUpdateEmployeeChanged = useHasChanged(updateEmployee?.status);
  const doesAddEmployeeChanged = useHasChanged(addEmployee?.status);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getDetailEmployee(id));
    }
  }, []);

  useEffect(() => {
    // action after add a record successfully
    // then show a notification with status return from server
    // navigate to home page
    if (doesAddEmployeeChanged && addEmployee?.status === LIST_STATUS_ACTION.SUCCESS) {
      showToast({
        title: "Add Employee Notification",
        message: `Add new employee ${addEmployee?.status?.toLowerCase()}!`
      });
      history.push("/employee/list");
    }

    // action after update a record successfully
    // then show a notification with status return from server
    // navigate to home page
    if (doesUpdateEmployeeChanged && updateEmployee?.status === LIST_STATUS_ACTION.SUCCESS) {
      showToast({
        title: "Update Employee Notification",
        message: `Update employee ${updateEmployee?.status?.toLowerCase()}!`
      });
      history.push("/employee/list");
    }
  });

  const handleSubmit = () => {
    // if have id in param url, then dispatch action edit.
    // assumption gen date create/update at client.
    if (id) {
      dispatch(editEmployee(id, {
        ...formCreateEmployee,
        created_at: new Date()
      }));
    } else {
      dispatch(createEmployee({
        ...formCreateEmployee,
        created_at: new Date()
      }));
    }
  }

  const selectedItem = id ? itemEmployee?.data : null;
  return (
    <div className="employee-add-container">
      <AddEmployee
        itemEmployee={selectedItem}
        updateEmployee
        addEmployee
        onSubmit={handleSubmit}
      />

    </div>
  )
}

const mapStateToProps = (state) => {
  const { addEmployee, itemEmployee, updateEmployee, removeEmployee } = state.employees;
  return {
    formCreateEmployee: getFormValues('employee-form')(state),
    addEmployee,
    itemEmployee,
    updateEmployee,
    removeEmployee
  }
};
export default connect(mapStateToProps, {
  createEmployee,
  getDetailEmployee
})(EmployeeAddContainer);
