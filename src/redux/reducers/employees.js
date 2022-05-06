import {
  LIST_STATUS_ACTION,
  GET_LIST_EMPLOYEE,
  GET_LIST_EMPLOYEE_RESPONSE,
  GET_DETAIL_EMPLOYEE,
  GET_DETAIL_EMPLOYEE_RESPONSE,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_RESPONSE,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_RESPONSE,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_RESPONSE
} from "../constants/employeeConstants";

const INIT_STATE = {
  'employeeList': {
    'data': [],
    'status': LIST_STATUS_ACTION.LOADING,
  },
  'itemEmployee': {
    'data': {},
    'status': LIST_STATUS_ACTION.LOADING
  },
  'addEmployee': {
    'addedEmployee': {},
    'status': LIST_STATUS_ACTION.LOADING
  },
  'removeEmployee': {
    'status': LIST_STATUS_ACTION.LOADING
  },
  'updateEmployee': {
    'updatedEmployee': {},
    'status': LIST_STATUS_ACTION.LOADING
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_LIST_EMPLOYEE:
      return {
        ...state,
        employeeList: {
          data: [],
          status: LIST_STATUS_ACTION.LOADING
        }
      }

    case GET_LIST_EMPLOYEE_RESPONSE:
      return {
        ...state,
        employeeList: {
          data: action.payload.data,
          status: action.payload.status
        }
      }

    case GET_DETAIL_EMPLOYEE:
      return {
        ...state,
        itemEmployee: {
          data: null,
          status: LIST_STATUS_ACTION.LOADING
        }
      }

    case GET_DETAIL_EMPLOYEE_RESPONSE:
      return {
        ...state,
        itemEmployee: {
          data: action.payload.data,
          status: action.payload.status
        }
      }

    case CREATE_EMPLOYEE:
      return {
        ...state,
        addEmployee: {
          addedEmployee: {},
          status: LIST_STATUS_ACTION.LOADING
        }
      }

    case CREATE_EMPLOYEE_RESPONSE:
      return {
        ...state,
        addEmployee: {
          addedEmployee: action.payload.data,
          status: action.payload.status
        }
      }

    case DELETE_EMPLOYEE:
      return {
        ...state,
        removeEmployee: {
          status: LIST_STATUS_ACTION.LOADING
        }
      }

    case DELETE_EMPLOYEE_RESPONSE:
      return {
        ...state,
        removeEmployee: {
          status: action.payload.status
        }
      }

    case EDIT_EMPLOYEE:
      return {
        ...state,
        updateEmployee: {
          updatedEmployee: {},
          status: LIST_STATUS_ACTION.LOADING
        }
      }

    case EDIT_EMPLOYEE_RESPONSE:
      return {
        ...state,
        updateEmployee: {
          updatedEmployee: action.payload.data,
          status: action.payload.status
        }
      }

    default:
      return state;
  }
}