import {
  GET_LIST_EMPLOYEE,
  GET_LIST_EMPLOYEE_RESPONSE,
  GET_DETAIL_EMPLOYEE,
  GET_DETAIL_EMPLOYEE_RESPONSE,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_RESPONSE,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_RESPONSE,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_RESPONSE
} from "../constants/employeeConstants";

// get list emp action
export const getListEmployee = () => {
  return {
    type: GET_LIST_EMPLOYEE,
  };
};

export const getListEmployeeResponse = (data, status) => {
  return {
      type: GET_LIST_EMPLOYEE_RESPONSE,
      payload: {
        data,
        status
      }
  }
}

// get detail emp action
export const getDetailEmployee = (data) => {
  return {
    type: GET_DETAIL_EMPLOYEE,
    payload: data
  };
};

export const getDetailEmployeeResponse = (data, status) => {
  return {
      type: GET_DETAIL_EMPLOYEE_RESPONSE,
      payload: {
        data,
        status
      }
  }
}

// create emp action
export const createEmployee = (data) => {
  return {
    type: CREATE_EMPLOYEE,
    payload: data
  };
};

export const createEmployeeResponse = (data, status) => {
  return {
      type: CREATE_EMPLOYEE_RESPONSE,
      payload: {
        data,
        status
      }
  }
}

// edit emp action
export const editEmployee = (id, data) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: {
      id,
      data
    }
  };
};

export const editEmployeeResponse = (data, status) => {
  return {
      type: EDIT_EMPLOYEE_RESPONSE,
      payload: {
        data,
        status
      }
  }
}

// delete emp action
export const deleteEmployee = (data) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: data
  };
};

export const deleteEmployeeResponse = (status) => {
  return {
      type: DELETE_EMPLOYEE_RESPONSE,
      payload: {
        status
      }
  }
}