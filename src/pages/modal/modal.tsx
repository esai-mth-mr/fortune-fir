import React from "react";
import { useState, useEffect } from "react";
import '@src/style/modal/modal.scss';
import { RiCloseLine } from 'react-icons/ri';

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
    return (
        <>
            <div className="modal_darkbg" onClick={() => setIsOpen(false)} />
            <div className="modal">
                <div className="modal_header">
                    <img className="modal_close" onClick={()=>setIsOpen(false)} src="src/assets/close.png"/>
                </div>
                <div className="modal_body">
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((item, index)=>(
                          <>
                            <div className="modal_rating_line">
                                <div className="rating_no">1</div>
                                <div className="rating_username">userid12123123</div>
                                <div className="rating_score">1200</div>
                            </div>
                          </>  
                        ))
                    }
    
                    <img className="modal_tree" src="src/assets/modal_tree.png"/>
                    {/* <div className="modal_rating_line">
                        <div className="rating_no">1</div>
                        <div className="rating_username">userid12123123</div>
                        <div className="rating_score">1200</div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Modal;
