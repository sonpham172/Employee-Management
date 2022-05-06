import { useDispatch } from "react-redux";
import { openModal, hideModal } from "../../redux/actions/modalActions";
import { useAppSelector } from "../../redux/store";

export const useModal = () => {
  const dispatch = useDispatch();
  const modalInfo = useAppSelector((state) => state.modals);
  const showModal = (data) => {
    dispatch(
      openModal({
        ...data
      }
      )
    );
  }

  const closeModal = () => {
    dispatch(
      hideModal()
    );
  }

  return {
    showModal,
    closeModal,
    modalInfo
  };
};