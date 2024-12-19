import '@src/style/global.scss';
import '@src/style/pages/signup.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as message_icon } from '../../src/svg/signup/message.svg';
import Messagesvg from '../../src/svg/signup/message.svg';

function SignUp(){
    const [inputstate, setInputState]=useState(1);
    return(
        <div className="board">
            <img className='sign_header' src="/src/assets/santamodel.png"/>
            <form className='form_field'>
                <div className='form_input_field'>
                    {/* <Messagesvg className='form_img'/> */}
                    <img className='form_img' src='/src/svg/signup/message.svg'/>
                    {/* <div className='form_input_content'>{inputstate==1?"Email...":"Gender"}</div> */}
                    {inputstate==1?<input className='form_input' name='email' placeholder='Email'/>:
                    <select className='form_input' name="gender" >
                        <option value="" disabled selected>Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>}
                </div>
                <div className='form_input_field'>
                    {/* <Messagesvg className='form_img'/> */}
                    <img className='form_img' src='/src/svg/signup/message.svg'/>
                    {/* <div className='form_input_content'>{inputstate==1?"User Name...":"Date Of Birth"}</div> */}
                    {inputstate==1?<input className='form_input' name='username' placeholder='User Name'/>:
                    <input className='form_input' name='birthday' type='date'  placeholder="Date of birth"/>}
                </div>
                <div className='form_input_field'>
                    {/* <Messagesvg className='form_img'/> */}
                    <img className='form_img' src='/src/svg/signup/message.svg'/>
                    {/* <div className='form_input_content'>{inputstate==1?"Password...":"Job"}</div> */}
                    {inputstate==1?<input className='form_input' name='password' placeholder='Password'/>:
                    <input className='form_input' name='job' placeholder='Job'/>}
                </div>

                {/* <input className='form_input'/>
                <input className='form_input'/> */}
            </form>
            <div className='sign_desc'>
                I have already an account.<b>Sign In.</b>
            </div>
            {inputstate==1?<div onClick={()=>setInputState(2)} className='sign_btn'>
                Continue
            </div>:
            <Link className='sign_btn' to="/login">
               Sign Up
            </Link>}
        </div>
    );
}

export default SignUp;