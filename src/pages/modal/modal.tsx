import React from "react";
import { useState, useEffect } from "react";
import "@src/style/modal/modal.scss";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
  score: number;
  modalData: {
    name: string;
    desc: string;
  };
  // modalstate: number
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, score, modalData }) => {
  const [allowclose, setAllowClose] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAllowClose(true);
    }, 4600);
  }, [score]);
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  return (
    <>
      <div className="modal">
        <div
          className="modal_close"
          onClick={() => {
            allowclose == true && setIsOpen(false);
            setAllowClose(false);
          }}
        >
          X
        </div>
        <div className="modal_darkbg" />
        <img
          className="modal_gift"
          draggable={false}
          src="/src/svg/Gifts/holded_gift.SVG"
        />
        <div className={`${score > 0 ? `modal_score` : `modal_score1`}`}>
          {score > 0 ? "+" + score! : score}
        </div>
        {/* <img className="modal_fortune" draggable={false} src="https://drive.google.com/file/d/1H-8xs75_TAfPBt8_pZVwSg0Pp280rxDa/view?usp=sharing"/> */}
        <div className="modal_content">
          <div className="modal_icon">{modalData.name}</div>
          <div className="modal_desc">{modalData.desc}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
