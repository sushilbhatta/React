import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
// insted of using forwardRef and useImperativeHandle we can pass  via prop as well.
const Modal = function Modal({ open, children }) {
  const dialog = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  return createPortal(
    <dialog className='modal' ref={dialog} open={open}>
      {/* open attribute is the builtin html attribute for the html dialog element . It should either be true or false */}
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
