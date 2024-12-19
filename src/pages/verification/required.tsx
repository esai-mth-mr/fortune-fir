import { useEffect, useState } from 'react';
import React from 'react';
import '@src/style/verify/required.scss';

function Required(){
    return(
        <div className='board'>
            <div className='verify'>
                <div className='verify_pic'>
                    <img className='verify_pic_icon' src='src/assets/modal.jpg'/> 
                </div>
                <div className='verify_title'>
                    Please verify your email
                </div>
                <div className='verify_desc'>
                    you are almost there? We sent an email to 
                </div>
                <div className='verify_cap'>
                    Just click on the link in that email to complete your signup.
                    If you don't see it,you may need to check your spam folder
                </div>
                <div className='verify_cap2'>
                    Still can't find the email?
                </div>
                <div className='verify_btn'>
                    <div className='verify_btn_obj'>
                        Resend Email
                    </div>
                </div>
                <div className='verify_final'>
                    <div>Need help?</div>
                    <div className='verify_contact'>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Required;