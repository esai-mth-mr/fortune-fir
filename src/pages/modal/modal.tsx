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
            <div className="modal_darkbg" />
            <img className="modal_gift"  draggable={false} src='/src/svg/Gifts/holded_gift.SVG'/>
      
            <div className=""></div>

        </div>
        </>
    );
}

export default Modal;
