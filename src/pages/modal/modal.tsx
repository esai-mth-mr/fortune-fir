import React from "react";
import { useState, useEffect } from "react";
import '@src/style/modal/modal.scss';
import { RiCloseLine } from 'react-icons/ri';

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
    modalstate: number 
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, modalstate }) => {
    console.log(modalstate);
    return (
        <>
            <div className="modal_darkbg" onClick={() => setIsOpen(false)} />
            <div className="modal">
                <div className="modal_header">
                    <img className="modal_close" onClick={()=>setIsOpen(false)} src="src/assets/close.png"/>
                </div>
                <div className="modal_body">
                    {
                        modalstate==1?
                        [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index)=>(
                          <>
                            <div className="modal_rating_line">
                                <div className="rating_no">1</div>
                                <div className="rating_username">userid12123123</div>
                                <div className="rating_score">1200</div>
                            </div>
                          </>  
                        )):<div></div>
                    }
                    {modalstate?<img className="modal_tree" src="src/assets/modal_tree.png"/>:<></>}
                    
                    {
                        modalstate==2&&
                        <div className="modal_result">
                            The beach-ball is not just your average inflatable toy; it’s a vibrant orb of joy that brings sunshine wherever it rolls! With its bright colors and cheerful bounce, this ball is a symbol of carefree summer days spent at the beach or poolside. Legend has it that those who play with this beach-ball experience an influx of good vibes and laughter. Whether you're spiking it over a net or simply tossing it around with friends, this beach-ball is known to attract fun and fortune. Get ready for spontaneous adventures and delightful surprises when you choose this lucky charm!
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Modal;
