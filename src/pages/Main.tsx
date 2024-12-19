import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
import { Stack } from '@mui/material';  
import { Pagination } from '@mui/material';  
// import Modal from '../components/Modal';
import Modal from './modal/modal';

function Main() {  
    return(
        <div className='board'>
            <div className='main_img_field'>
                <img className='main_img' src="/src/assets/backgroundImage _1.png"/>
            </div>
            <div className='gifts_field'>
                kjjkj;kj
            </div>
        </div>
    )
}  

export default Main;