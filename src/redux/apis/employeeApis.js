import {
  URL_API,
} from "../constants/employeeConstants";
import axios from "axios";

// api get employee
export const getEmployeeRequest = async () =>
  await axios({
      url: URL_API + `/employees?_sort=created_at&_order=DESC`,
      method: "get",   
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  }).then(response => response)
  .catch(error => error)

// api get detail employee
export const getDetailEmployeeRequest = async (id) =>
await axios({
    url: URL_API + `/employees/${id}`,
    method: "get",   
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
}).then(response => response)
.catch(error => error)

// api create employee
export const createEmployeeRequest = async (data) =>
  await axios({
      url: URL_API + `/employees`,
      method: "post",
      data,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  }).then(response => response)
  .catch(error => error)

// api edit employee
export const editEmployeeRequest = async (id, data) =>
  await axios({
      url: URL_API + `/employees/${id}`,
      method: "put",
      data,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  }).then(response => response)
  .catch(error => error)

// api delete employee
export const deleteEmployeeRequest = async (id) =>
  await axios({
      url: URL_API + `/employees/${id}`,
      method: "delete",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  }).then(response => response)
  .catch(error => error)