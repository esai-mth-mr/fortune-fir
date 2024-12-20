import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
// import { Stack } from '@mui/material';  
// import { Pagination } from '@mui/material';  
import Modal from './modal/modal';
import 'animate.css';
import { getRandomNum } from '../helper/Helper';

function Main() {  
    const [month, setMonth] = useState(1);
    const [count, setCount] = useState(0);

    const months=["","Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Type the array  
    const [shuffledMonths, setShuffledMonths] = useState<number[]>([...array]); // Ensure the state holds an array of numbers  
    const [gifts, setGifts] = useState<number[]>([]); // Make sure gifts holds an array of numbers  
   
    const allowopen: boolean[] = [true, true, true, true, true, true, true, true, true, true, true, true, true];
    const [AllowOpen, setAllowOpen] = useState<boolean[]>([...allowopen]);

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

    const [points, setPoints] = useState<Number[]>([]);
    const [totalpoint, setTotalPoint] = useState(Number);
    useEffect(()=>{
        console.log(getRandomNum(200, 300, 1));
    })

    const selectedPoint=(lucklevel:string)=>{
        if(lucklevel=="exe_good"){
            return getRandomNum(200, 300, 1);
        }
        switch(lucklevel){
            case "exe_good": return getRandomNum(200, 300, 1);
            case "very_good": return getRandomNum(200, 300, 1);
        }
    }
    
    return(
        <div className='board'>
            <div className='main_month'>
                <div className='month_title'>2025</div>
                <div className='month_num'><h6 style={{ fontSize:"30px"}}>{months[month]}</h6></div>
            </div>
            <div className='score'>
                <div className={`${count==0?`score_content`:`score_content_2`}`}>Score:300</div>
                <div className='available'>
                    <img src='/src/svg/Gifts/gift_1.svg'  draggable={false} alt="modal_gift" width={20}/>X{7-count}
                </div>
            </div>
            <div className='main_img_field'>
                <img className='main_img' src="/src/assets/backgroundImage _1.png"  draggable={false} alt="main_img"/>
            </div>
            <div className='gifts_field'>
                <div className='gift-field-child'>
                    <div className='gifts-field-child-left'>
                        {gifts.map((item, index)=>(
                            index%2==0?
                            <img key={index} className={`${`gift_l`}`}  draggable={false} alt={`${`gift`+index}`}
                            src={`${AllowOpen[index]==true?`/src/svg/Gifts/gift_`+item+`.svg`:`/src/assets/openbox.png`}`}
                            onClick={()=>{
                                AllowOpen[index]==true&&count<7&&setCount(count+1);  
                                count<7?setAllowOpen(AllowOpen.map((m, i) => {
                                    return m==true&&i != index;
                                })):''; 
                                count<7?setIsOpen(AllowOpen[index]):setIsOpen(false);}} 
                            ></img>:<></>
                        ))}
                    </div>
                    <div className='gifts-field-child-right'>
                        {gifts.map((item, index)=>(
                            index%2==1?
                            <img key={index} className={`${`gift_r`}`}   draggable={false} alt={`${`gift`+index}`}
                            src={`${AllowOpen[index]==true?`/src/svg/Gifts/`+`gift_`+item+`.svg`:`/src/assets/openbox.png`}`}
                            onClick={()=>{
                                AllowOpen[index]==true&&count<7&&setCount(count+1);  
                                count<7?setAllowOpen(AllowOpen.map((m, i) => {
                                    return m==true&&i != index;
                                })):''; 
                                count<7?setIsOpen(AllowOpen[index]):setIsOpen(false);}} 
                            ></img>
                            :<></>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen}/>} {/* Render the modal conditionally */}
            <div onClick={()=>{month!=12&&count==7&&setMonth(month+1);
                month!=12&&count==7&&setCount(0);
                count==7&&setAllowOpen(AllowOpen.map((m, i)=>{
                    return true;
                }))
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