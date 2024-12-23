import React from "react";
import { useState, useEffect } from "react";
import "@src/style/modal/modal.scss";
import getImageURL from "../../utils/getImageURL";

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
    }, 2600);
  }, [score]);

  return (
    <>
      <div className="modal">
        <img
          onClick={() => {
            allowclose == true && setIsOpen(false);
            setAllowClose(false);
          }}
          className="modal_close"
          src={getImageURL("./assets/close.webp")}
          draggable={false}
          alt="modal_close"
        />
        <div className="modal_darkbg" />
        <img
          className="modal_gift"
          draggable={false}
          src={getImageURL("./assets/svg/Gifts/holded_gift.webp")}
        />
        <div className={`${score > 0 ? `modal_score` : `modal_score1`}`}>
          {score > 0 ? "+" + score! : score}
        </div>
        <div className="modal_content">
          <div className="modal_icon" style={{color: score<0?"black":"#126706"}}>{modalData.name}</div>
          <div className="modal_desc" style={{color: score<0?"black":"#0f4c06"}}>{modalData.desc}</div>
        </div>

        {/* run sounds */}
        {score > 200 && score <= 300 ? (
          <audio className="hidden" controls autoPlay>
            <source src={getImageURL("./sounds/exe_good.wav")} />
          </audio>
        ) : (
          <></>
        )}
        {score > 100 && score <= 200 ? (
          <audio className="hidden" controls autoPlay>
            <source src={getImageURL("./sounds/very_good.wav")} />
          </audio>
        ) : (
          <></>
        )}
        {score > 0 && score <= 100 ? (
          <audio className="hidden" controls autoPlay>
            <source src={getImageURL("./sounds/good.wav")} />
          </audio>
        ) : (
          <></>
        )}
        {score > -100 && score <= 0 ? (
          <audio className="hidden" controls autoPlay>
            <source src={getImageURL("./sounds/bad.mp3")} />
          </audio>
        ) : (
          <></>
        )}
        {score > -200 && score <= -100 ? (
          <audio className="hidden" controls autoPlay>
            <source src={getImageURL("./sounds/very_bad.mp3")} />
          </audio>
        ) : (
          <></>
        )}
        {score > -200 && score <= -300 ? (
          <audio className="hidden" controls autoPlay>
            <source src={getImageURL("./sounds/exe_bad.mp3")} />
          </audio>
        ) : (
          <></>
        )}

        {score > 200 && score <= 300 ? (
          <img
            src={getImageURL("./assets/exe_good.webp")}
            className="modal_luck"
            alt="modol_luck_icon"
            draggable={false}
          ></img>
        ) : (
          <></>
        )}
        {score > 100 && score <= 200 ? (
          <img
            src={getImageURL("./assets/very_good.webp")}
            className="modal_luck"
            alt="modol_luck_icon"
            draggable={false}
          ></img>
        ) : (
          <></>
        )}
        {score > 0 && score <= 100 ? (
          <img
            src={getImageURL("./assets/good.webp")}
            className="modal_luck"
            alt="modol_luck_icon"
            draggable={false}
          ></img>
        ) : (
          <></>
        )}
        {score > -100 && score <= 0 ? (
          <img
            src={getImageURL("./assets/bad.webp")}
            className="modal_luck"
            alt="modol_luck_icon"
            draggable={false}
          ></img>
        ) : (
          <></>
        )}
        {score > -200 && score <= -100 ? (
          <img
            src={getImageURL("./assets/very_bad.webp")}
            className="modal_luck"
            alt="modol_luck_icon"
            draggable={false}
          ></img>
        ) : (
          <></>
        )}
        {score > -300 && score <= -200 ? (
          <img
            src={getImageURL("./assets/exe_bad.webp")}
            className="modal_luck"
            alt="modol_luck_icon"
            draggable={false}
          ></img>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Modal;
