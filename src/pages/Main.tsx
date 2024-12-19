import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
import { Stack } from '@mui/material';  
import { Pagination } from '@mui/material';  
import Modal from './modal/modal';
import 'animate.css';

function Main() {  
    const [month, setMonth] = useState(1);
    const [count, setCount] = useState(0);

    const months=["","Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Type the array  
    const [shuffledMonths, setShuffledMonths] = useState<number[]>([...array]); // Ensure the state holds an array of numbers  
    const [gifts, setGifts] = useState<number[]>([]); // Make sure gifts holds an array of numbers  

    const [isOpen, setIsOpen] = useState(false);

    const shuffleArray = (array: number[]): number[] => {  
        return array.sort(() => 0.5 - Math.random());  
    };  

    useEffect(() => {  
        if (count % 7 === 0) {  
            setGifts(shuffleArray([...shuffledMonths]));  
        }  
    }, [count, shuffledMonths]); 

    useEffect(()=>{
        console.log(count);
    })
    
    return(
        <div className='board'>
            <div className='main_month'>
                <div className='month_title'>2025</div>
                <div className='month_num'><h6 style={{ fontSize:"30px"}}>{months[month]}</h6></div>
            </div>
            <div className='score'>
                <div className='score_content'>Score:300</div>
                <div className='available'>
                    <img src='/src/svg/Gifts/gift_1.SVG' width={20}/>X{7-count}
                </div>
            </div>
            <div className='main_img_field'>
                <img className='main_img' src="/src/assets/backgroundImage _1.png"/>
            </div>
            <div className='gifts_field'>
                <div className='gift-field-child'>
                {gifts.map((item, index)=>( index%2==0?<div className='gifts_line'>
                    {/* animate__animated animate__bounce */}
                    <img key={item} className={`${`gift_l`}`} onClick={()=>{count<7&&setCount(count+1); setIsOpen(true);}} src={`${`/src/svg/Gifts/gift_`+item+`.svg`}`}/>
                    <img key={gifts[index+6]} className={`${`gift_r`}`} onClick={()=>{count<7&&setCount(count+1); setIsOpen(true);}} src={`${`/src/svg/Gifts/gift_`+gifts[index+1]+`.svg`}`}/>
                </div>:<></>))}
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen}/>} {/* Render the modal conditionally */}
            <div onClick={()=>{month!=12&&count==7&&setMonth(month+1);
                month!=12&&count==7&&setCount(0);
                
            }} style={{backgroundColor: count<7?"#f5f5f5":"red",borderColor:count<7?"#c7c7c7":"red", color:count<7?"#c7c7c7":"white"}} className='gift_next_btn'>
                {month<12?"Next":""}  

                <Link className='gift_finish' to="/result">
                    {month==12?"Finish":""}
                </Link>
            </div>
        </div>

    )
}  

export default Main;