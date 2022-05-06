import { SHOW_TOAST } from '../constants/toastConstants';

const INIT_STATE = {
  isShowToast: false,
  title: "",
  message: "",
  delay: 0,
  autoHide: true
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_TOAST:
      return {
        ...state,
        isShowToast: true,
        ...payload
      };
    default:
      return state;
  }
};