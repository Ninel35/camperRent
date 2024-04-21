import ReactDOM from "react-dom";
import css from "./Modal.module.css";
const Modal = () => {
  return ReactDOM.createPortal(
    <div className={css.wrapper}>
      <div className={css.modalContainer}>hhhhhhhhhhhh</div>
    </div>,
    document.getElementById("modalRoot")
  );
};

export default Modal;
