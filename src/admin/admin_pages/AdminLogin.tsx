import Input from '@mui/material/Input';
import { useState } from 'react';
import "@src/admin/admin_style/AdminLogin.scss";

function AdminLogin(){
    const [userName, setUserName] = useState<string | number>('');
    const [userpassword, setUserPassword] = useState<string | number>('');

    const handleName = (event: React.ChangeEvent<{ value: unknown }>) =>{
        setUserName(event.target.value as number);
        console.log('username', userName);
    }

    const handlePassword = (event: React.ChangeEvent<{ value: unknown }>) =>{
        setUserPassword(event.target.value as number);
        console.log('userpassword', userpassword);
    }

    return(
        <div className="admin">
            <div className="admin_dash">
                <div className="admin_title">Admin Login</div>
                <div className="admin_dash_input">
                    {/* User Name:  */}
                    <Input
                        value={userName}
                        onChange={handleName}
                        name='username'
                        placeholder='Enter Name'
                    />
                </div>
                <div className="admin_dash_input">
                    {/* User Email:  */}
                    <Input
                        value={userpassword}
                        onChange={handlePassword}
                        name='userpassword'
                        placeholder='Enter Password'
                    />
                </div>
                <div className='admin_dash_select'>
                    Login
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;