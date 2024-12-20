import React from "react";
import { useState, useEffect } from "react";
import '@src/style/modal/modal.scss';
import { RiCloseLine } from 'react-icons/ri';

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
    // modalstate: number 
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
    return (
        <>
        <div className="modal">
            <div className="modal_close" onClick={()=>setIsOpen(false)}>X</div>
            <div className="modal_darkbg" onClick={() => setIsOpen(false)} />
            <img className="modal_gift"  draggable={false} onClick={()=>setIsOpen(false)} src='/src/svg/Gifts/holded_gift.SVG'/>
            {/* {[1,2,3,4,5,6,7,8].map((item, index)=>{
                <div>
                <img className="" src='/src/svg/star.png'/>
                </div>
            })} */}
            <img className="modal_star-1" draggable={false} src='/src/assets/star.png' alt="star"/>
            <div className="modal_score">+300</div>
            <img className="modal_star-2" src='/src/assets/star.png'/>
            <img className="modal_star-3" src='/src/assets/star.png'/>
            <img className="modal_star-4" src='/src/assets/star.png'/>
        </div>
        </>
    );
}

export default Modal;
