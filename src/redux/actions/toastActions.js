import { SHOW_TOAST } from "../constants/toastConstants";

export const openToast = (data) => {
  return {
      type: SHOW_TOAST,
      payload: data
  }
}