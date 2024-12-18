import '@src/style/global.scss';
import '@src/style/pages/signup.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as message_icon } from '../../src/svg/signup/message.svg';
import Messagesvg from '../../src/svg/signup/message.svg';

function LogIn(){
    return(
        <div className="board">
            <img className='sign_header' src="/src/assets/santamodel.png"/>
            <form className='form_login_field'>
                <div className='form_input_field'>
                    {/* <Messagesvg className='form_img'/> */}
                    <img className='form_img' src='/src/svg/signup/message.svg'/>
                    <div className='form_input_content'>Email...</div>
                    <input className='form_input'/>
                </div>
                
                <div className='form_input_field'>
                    {/* <Messagesvg className='form_img'/> */}
                    <img className='form_img' src='/src/svg/signup/message.svg'/>
                    <div className='form_input_content'>Password...</div>
                    <input className='form_input'/>
                </div>

                {/* <input className='form_input'/>
                <input className='form_input'/> */}
            </form>
            <div className='login_desc'>
                I have already an account.<b>Sign Up.</b>
            </div>
            <div className='login_btn'>
                Sign In
            </div>
        </div>
    );
}

export default LogIn;