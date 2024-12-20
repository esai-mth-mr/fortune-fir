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
            <div className="modal_score">
                + 300 
            </div>
            {/* <img className="modal_fortune" draggable={false} src="https://drive.google.com/file/d/1H-8xs75_TAfPBt8_pZVwSg0Pp280rxDa/view?usp=sharing"/> */}
            <div className="modal_content">
                <div className="modal_icon">Cherry Medal</div>
                <div className="modal_desc">The Winner Medal is not just a shiny piece of metal; it’s your golden ticket to a world where luck dances at your fingertips! Adorned with sparkles that could blind an eagle, this medal whispers sweet nothings of fortune into your ear. Legend has it that those who wear it find themselves in the right place at the right time—like stumbling upon a pot of gold at the end of a rainbow or winning the last slice of pizza at a party. With this medal, your luck is as bright as its gleam, promising days filled with laughter, unexpected windfalls, and maybe even a surprise dance-off victory! Just remember, with great luck comes great responsibility—use it wisely</div>
            </div>

        </div>
        </>
    );
}

export default Modal;
