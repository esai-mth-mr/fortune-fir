import '@src/style/global.scss';
import '@src/style/pages/signup.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Continue(){
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
                <label>Gender</label>
                <input type='text'/>
            </div>
            <div>
                <label>Date of Birth</label>
                <input type='text'/>
            </div>
            <div>
                <label>Job</label>
                <input type='text'/>
            </div>
            <div>
                <Link className='signup' to="/main">
                    Sign Up
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

export default Continue;