import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
import { Stack } from '@mui/material';  
import { Pagination } from '@mui/material';  
import 'animate.css';

function Main() {  
    const [month, setMonth] = useState(1);
    const [count, setCount] = useState(0);

    const [isHovered, setIsHovered] = useState(false);  
    const months=["","January", "Feburuary", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
    return(
        <div className='board'>
            <div className='main_month'>
                {months[month]}
            </div>
            <div className='main_img_field'>
                <img className='main_img' src="/src/assets/backgroundImage _1.png"/>
            </div>
            <div className='gifts_field'>
                <div className='gift-field-child'>
                {[1,2,3,4,5,6].map((item, index)=>( <div className='gifts_line'>
                    <img key={item} className={`${`gift_l animate__animated animate__bounce`}`} onClick={()=>{setCount(count+1)}} src={`${`/src/svg/Gifts/gift_`+item*2+`.svg`}`}/>
                    <img key={item} className={`${`gift_l animate__animated animate__bounce`}`} onClick={()=>setCount(count+1)} src={`${`/src/svg/Gifts/gift_`+item+`.svg`}`}/>
                </div>))}
                </div>
            </div>
            <div onClick={()=>setMonth(month+1)} className='gift_next_btn'>
                {month<12?"Next":""}
                <Link className='gift_finish' to="/result">
                    {month==12?"Finish":""}
                </Link>
            </div>
        </div>
    )
}  

export default Main;