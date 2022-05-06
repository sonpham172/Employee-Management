import {call, put, takeLatest} from "redux-saga/effects";
import {
    GET_LIST_EMPLOYEE,
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    GET_DETAIL_EMPLOYEE,
    EDIT_EMPLOYEE,
    LIST_STATUS_ACTION
} from "../constants/employeeConstants";
import {
    getListEmployeeResponse,
    createEmployeeResponse,
    deleteEmployeeResponse,
    getDetailEmployeeResponse,
    editEmployeeResponse
} from "../actions/employeeActions";

import {
    getEmployeeRequest,
    createEmployeeRequest,
    deleteEmployeeRequest,
    getDetailEmployeeRequest,
    editEmployeeRequest
} from "../apis/employeeApis";

function* handleGetListEmployee() {
    try {
        const getEmployeeRes = yield call(getEmployeeRequest);
        yield put(getListEmployeeResponse(getEmployeeRes?.data, LIST_STATUS_ACTION.SUCCESS));
    } catch (error) {
        yield put(getListEmployeeResponse(null, LIST_STATUS_ACTION.FAILED));
    }
}

function* handleGetDetailEmployee(data) {
    try {
        const getDetailEmployeeRes = yield call(getDetailEmployeeRequest, data?.payload);
        yield put(getDetailEmployeeResponse(getDetailEmployeeRes?.data, LIST_STATUS_ACTION.SUCCESS));
    } catch (error) {
        yield put(getDetailEmployeeResponse(null, LIST_STATUS_ACTION.FAILED));
    }
}

function* handleCreateEmployee(data) {
    try {
        const createEmployeeRes = yield call(createEmployeeRequest, data?.payload);
        yield put(createEmployeeResponse(createEmployeeRes?.data, LIST_STATUS_ACTION.SUCCESS));
    } catch (error) {
        yield put(createEmployeeResponse(null, LIST_STATUS_ACTION.FAILED));
    }
}

function* handleDeleteEmployee(data) {
    try {
        const deleteEmployeeRes = yield call(deleteEmployeeRequest, data?.payload?.id);
        if(deleteEmployeeRes.status === 200) {
            const getEmployeeRes = yield call(getEmployeeRequest);
            yield put(getListEmployeeResponse(getEmployeeRes?.data, LIST_STATUS_ACTION.SUCCESS));
        }
        yield put(deleteEmployeeResponse(LIST_STATUS_ACTION.SUCCESS));
    } catch (error) {
        yield put(getListEmployeeResponse(null, LIST_STATUS_ACTION.FAILED));
        yield put(deleteEmployeeResponse(LIST_STATUS_ACTION.FAILED));
    }
}

function* handleEditEmployee(data) {
    try {
        const editEmployeeRes = yield call(editEmployeeRequest, data?.payload?.id, data?.payload?.data);
        yield put(editEmployeeResponse(editEmployeeRes?.data, LIST_STATUS_ACTION.SUCCESS));
    } catch (error) {
        yield put(editEmployeeResponse(null, LIST_STATUS_ACTION.FAILED));
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_LIST_EMPLOYEE, handleGetListEmployee);
    yield takeLatest(GET_DETAIL_EMPLOYEE, handleGetDetailEmployee);
    yield takeLatest(CREATE_EMPLOYEE, handleCreateEmployee);
    yield takeLatest(DELETE_EMPLOYEE, handleDeleteEmployee);
    yield takeLatest(EDIT_EMPLOYEE, handleEditEmployee);
}