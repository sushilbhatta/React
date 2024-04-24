import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
// insted of using forwardRef and useImperativeHandle we can pass  via prop as well.
const Modal = function Modal({ open, children }) {
  console.log(open);
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

  // this method doesnot show the backdrop because for backdrop we need to use the showModal Browser API

  // if (open === true) {
  //   dialog.current.showModal();

  //   // 1st render execute this as open is fasle inintially
  // } else {
  //   dialog.current.close();
  // }

  // the avove conditional statement will yield the error because inintially the open is false and when else part is executed ,
  // useRef doesnot  put reference of the dialog DOM node in the dialog.current .so  dialog.current have no access to the Browesr API used by dialog called  close() and close is undefined.
  // to solve this issue we can use the useEffect() hook to synchrouize the  open prop.
  // as we know that the useEffect is executed after the component is executed. and that mean that now the reference of the dialog element is created by the ref={dialog} below and now the DOM api function could be accessed.
  // since the open is correctly synchrouized with the time it is accessable we can say react is used to synchroize the props
  useEffect(() => {
    if (open === true) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);

  return createPortal(
    <dialog className='modal' ref={dialog} open={open}>
      {/* open attribute is the builtin html attribute for the html dialog element . It should either be true or false */}
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
