import { SHOW_MODAL, HIDE_MODAL } from '../constants/modalConstants';

const INIT_STATE = {
    isShowModal: false,
    bodyContent: {},
    titleHeader: ""
};

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_MODAL:
            return {
                ...state,
                isShowModal: true,
                ...payload
            };
        case HIDE_MODAL:
            return {
                ...state,
                isShowModal: false
            };
        default:
            return state;
    }
};