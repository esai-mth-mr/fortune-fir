import '@src/style/global.scss';
import '@src/style/pages/signup.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp(){
    return(
        <div className="board">
            <div className='sign_header'>
                <img className='sign_up_tree' src="src/assets/sign_up_tree.png"/>
            </div>
            <div className='signup_title'>
                Sign up to Fortune Fir
            </div>
            <div className='signup_content'>
                Sign up and start your journey
            </div>
            <form>
                <div>
                    <label>User Name</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='text'/>
                </div>
                <div>
                    <Link className='signup' to="/continue">
                        Continue
                    </Link>
                </div>
            </form>
            <div className='choose'>
                <div>have an account?</div>
                <Link className='login' to="/login">Sign In</Link>
            </div>
        </div>
    );
}

export default SignUp;