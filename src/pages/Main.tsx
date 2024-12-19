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
    const months=["","Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const array=[1,2,3,4,5,6,7,8,9,10,11,12];
    const shufflemonths=array.sort( () => .5 - Math.random());
    return(
        <div className='board'>
            <div className='main_month'>
                <div className='month_title'>2025</div>
                <div className='month_num'><h6 style={{ fontSize:"30px"}}>{months[month]}</h6></div>
            </div>
            <div className='main_img_field'>
                <img className='main_img' src="/src/assets/backgroundImage _1.png"/>
            </div>
            <div className='gifts_field'>
                <div className='gift-field-child'>
                {shufflemonths.map((item, index)=>( index%2==0?<div className='gifts_line'>
                    {/* animate__animated animate__bounce */}
                    <img key={item} className={`${`gift_l`}`} onClick={()=>{setCount(count+1)}} src={`${`/src/svg/Gifts/gift_`+item+`.svg`}`}/>
                    <img key={shufflemonths[index+6]} className={`${`gift_r`}`} onClick={()=>setCount(count+1)} src={`${`/src/svg/Gifts/gift_`+shufflemonths[index+1]+`.svg`}`}/>
                </div>:<></>))}
                </div>
            </div>
            <div onClick={()=>month!=12&&setMonth(month+1)} className='gift_next_btn'>
                {month<12?"Next":""}
                <Link className='gift_finish' to="/result">
                    {month==12?"Finish":""}
                </Link>
            </div>
        </div>
    )
}  

export default Main;