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

    const data = [
        {name: "", description: "", luck: ""}
    ]

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

    const [yearpoint, setyearpoint] = useState<number>(0);
    const [monthpoint, setmonthpoint] = useState<number>(0);
    const [point, setPoint] = useState<number>(0);

    const [yeardisplaypoint, setDisplayYear]=useState<number>(0);
    const [displaypoint, setDisplaypoint] = useState<number>(0);
    
    //for animation
    const [countnum, setCountNum] = useState<boolean>(false);   
    //allow moving to next 
    const [allownext, setAllowNext]=useState<boolean>(false);
    
    const getpoint=(lucklevel:string)=>{
        switch(lucklevel){
            case "exe_good":  return  Math.ceil(getRandomNum(200, 300)!);
            case "very_good": return  Math.ceil(getRandomNum(100, 200)!);
            case "good": return Math.ceil( getRandomNum(0, 100)!);
            case "bad": return  Math.ceil(getRandomNum(-100, 0)!);
            case "very_bad": return  Math.ceil(getRandomNum(-200, -100)!);
            case "exe_bad": return  Math.ceil(getRandomNum(-300, -200)!);
        }
    }

    //display for animation
    useEffect(()=>{
        setTimeout(()=>{
            setDisplaypoint(monthpoint);
        }, 2500)
        setTimeout(() => {
            setmonthpoint(monthpoint+point);
        }, 2600);

        setTimeout(()=>{
            setDisplayYear(yeardisplaypoint);
        }, 2500)
        setTimeout(() => {
            setyearpoint(yeardisplaypoint+point);
        }, 2600);
    }, [point])

    //display animate number for specific duration
    useEffect(()=>{
        if(point>0){
            if(displaypoint!=monthpoint){
                setTimeout(()=>{
                    setDisplaypoint(displaypoint+1);
                }, 2)
            }  
            
            if(yeardisplaypoint!=yearpoint){
                setTimeout(()=>{
                    setDisplayYear(yeardisplaypoint+1);
                }, 2)
            }
        }
        else{
            if(displaypoint!=monthpoint){
                setTimeout(()=>{
                    setDisplaypoint(displaypoint-1);
                }, 2)
            }  
            
            if(yeardisplaypoint!=yearpoint){
                setTimeout(()=>{
                    setDisplayYear(yeardisplaypoint-1);
                }, 2)
            }
        }
        
    })

    useEffect(()=>{
        if(count==7){
            setTimeout(()=>{
                setAllowNext(true);
            }, 100)
        }
        if(count==0){
            setAllowNext(false);
        }
    },[count]);

    return(
        <div className='board'>
            <div className='main_month'>
                <div className='month_title'>2025</div>
                <div className='month_num'><h6 style={{ fontSize:"30px"}}>{months[month]}</h6></div>
            </div>
            <div className='score'>
                <div className='score_year'>Year:{yeardisplaypoint}</div>
                <div className={`${`score_content`}`}>Month:{displaypoint!}</div>
                <div className={`${countnum==false?`available`:`available1`}`}>
                    <img className='modal_count_img' src='/src/svg/Gifts/gift_1.svg'  draggable={false} alt="modal_gift" width={22}/><div style={{width: "20px", display:'flex', justifyContent:'center'}}>x</div><div style={{fontSize:'16px'}}>{7-count}</div>
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
                                AllowOpen[index]==true&&count<7?setAllowOpen(AllowOpen.map((m, i) => {
                                    return m==true&&i != index;
                                })):''; 
                                AllowOpen[index]==true&&count<7?setIsOpen(AllowOpen[index]):setIsOpen(false);
                                AllowOpen[index]==true&&count<7&&setPoint(getpoint("exe_bad")!);
                                AllowOpen[index]==true&&count<7&&setCountNum(!countnum);
                                }} 
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
                                AllowOpen[index]==true&&count<7?setAllowOpen(AllowOpen.map((m, i) => {
                                    return m==true&&i != index;
                                })):''; 
                                AllowOpen[index]==true&&count<7?setIsOpen(AllowOpen[index]):setIsOpen(false);
                                AllowOpen[index]==true&&count<7&&setPoint(getpoint("exe_bad")!);
                                AllowOpen[index]==true&&count<7&&setCountNum(!countnum);
                            }} 
                            >
                            </img>
                            :<></>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} score={point}/>} {/* Render the modal conditionally */}
            <div onClick={()=>{month!=12&&count==7&&setMonth(month+1);
                allownext==true&&month!=12&&count==7&&setCount(0);
                allownext==true&&count==7&&setAllowOpen(AllowOpen.map((m, i)=>{
                    return true;
                }));
                allownext==true&&count==7&&setmonthpoint(0);
                allownext==true&&count==7&&setPoint(0);
                allownext==true&&count==7&&setDisplaypoint(0);
                allownext==true&&count==7&&setCountNum(false);

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