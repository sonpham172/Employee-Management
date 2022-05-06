import React, { useEffect } from "react";
import { notification } from "antd";
import { useToast } from "../../shared/custom-hook/useToast";

const ToastComponent = () => {
  const { toast } = useToast();

  // auto destroy after open
  useEffect(() => {
    notification.destroy();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      {toast?.isShowToast && notification.open({
        key: toast?.title,
        message: toast?.title,
        description: toast?.message
      })}
    </div>
  );
};

export default ToastComponent;