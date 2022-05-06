import * as React from "react";
import { Modal } from "antd";
import { useModal } from "../../shared/custom-hook/useModal";

const ModalComponent = () => {
  const { modalInfo, closeModal } = useModal();

  // callback for submit modal
  const callback = () => {
    modalInfo.callbackFunction(modalInfo?.bodyContent?.record);
    closeModal();
  }

  return (
    <>
      <Modal title={modalInfo?.titleHeader} visible={modalInfo?.isShowModal} onOk={callback} onCancel={closeModal}>
        {modalInfo?.bodyContent && <p>{`${modalInfo?.bodyContent?.text} '${modalInfo?.bodyContent?.record?.first_name}' ?`}</p>}
      </Modal>
    </>
  );
};

export default ModalComponent;
