import { useDispatch } from "react-redux";
import { openToast } from "../../redux/actions/toastActions";
import { useAppSelector } from "../../redux/store";


export const useToast = () => {
  const dispatch = useDispatch();
  const toast = useAppSelector((state) => state.toasts);
  const showToast = (data) => {
    dispatch(
      openToast({
        ...data,
        isShowToast: true,
        delay: 3000
      }
      )
    );
  }

  return {
    showToast,
    toast
  };
};