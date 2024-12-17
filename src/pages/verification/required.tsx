import { useEffect, useState } from 'react';
import '@src/style/verify/required.scss';

function Required(){
    return(
        <div className='board'>
            <div className='modal'>
                <div className='modal_pic'>
                    <img className='modal_pic_icon' src='src/assets/modal.jpg'/> 
                </div>
                <div className='modal_title'>
                    Please verify your email
                </div>
                <div className='modal_desc'>
                    you are almost there? We sent an email to 
                </div>
                <div>
                    Just click on the link in that email to complete your signup.
                    If you don't see it,you may need to check your spam folder
                </div>
                <div>
                    Still can't find the email?
                </div>
                <div className='modal_btn'>
                    <div className='modal_btn_obj'>
                        Resend Email
                    </div>
                </div>
                <div>
                    Need help? Contact Us
                </div>
            </div>
        </div>
    )
}

export default Required;