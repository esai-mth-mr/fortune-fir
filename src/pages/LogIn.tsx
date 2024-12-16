import '@src/style/global.scss';
import '@src/style/pages/login.scss';
import { useEffect, useState } from 'react';

function LogIn(){
    return(
        <div className="board">
            <img className='sign_up_tree' src="src/assets/sign_up_tree.png"/>
            <div className='signup_title'>
                Log in to Fortune Fir
            </div>
            <div className='signup_content'>
                Log in and start your journey
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
                <div className='signup'>
                    Log In
                </div>
            </form>
            <div className='choose'>
                <div>have an account?</div>
                <div>Log In</div>
            </div>
        </div>
    );
}

export default LogIn;