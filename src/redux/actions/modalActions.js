import { SHOW_MODAL, HIDE_MODAL } from "../constants/modalConstants";

export const openModal = (data) => {
  return {
      type: SHOW_MODAL,
      payload: data
  }
}

export const hideModal = () => {
  return {
      type: HIDE_MODAL,
  }
}