import React from 'react';  
import '@src/style/modal/modal.scss'; // Ensure you have some styles defined for your modal  

interface ModalProps {  
    isOpen: boolean;  
    onClose: () => void;  
    title: string;  
    children: React.ReactNode;  
}  

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {  
    if (!isOpen) return null; // Don't render the modal if it's not open  

    return (  
        // <div className='board'>
            <div className="modal">  
                <div className="modal-content">  
                    <span className="close" onClick={onClose}>&times;</span>  
                    <h2>{title}</h2>  
                    <div>{children}</div>  
                </div>  
            </div>  
        // </div>
    );  
};  

export default Modal;