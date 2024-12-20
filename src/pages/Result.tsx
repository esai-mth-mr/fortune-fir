import React, { useState } from "react";
import { Link } from "react-router-dom";
import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  

function Result(){
    const [month, setMonth] = useState(1);
    const [count, setCount] = useState(0);
    const months=["","Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return(
        <div className='board'>
            <div className='main_img_field'>
                <img className='main_img' src="/src/assets/backgroundImage _1.png"/>
            </div>
            <div onClick={()=>setMonth(month+1)} className='gift_next_btn'>
                {month<13?"Next":""}
                <Link className='gift_finish' to="/main">
                    {month==13?"Finish":""}
                </Link>
            </div>
            <div className="result_field">
                <div className='result_content'>
                To create a compelling description for your item, the "beach-ball," that aligns with its "very good" luck status, consider the following description: Description for Beach-Ball:
                "The beach-ball is not just your average inflatable toy; it’s a vibrant orb of joy that brings sunshine wherever it rolls! With its bright colors and cheerful bounce, this ball is a symbol of carefree summer days spent at the beach or poolside. Legend has it that those who play with this beach-ball experience an influx of good vibes and laughter. Whether you're spiking it over a net or simply tossing it around with friends, this beach-ball is known to attract fun and fortune. Get ready for spontaneous adventures and delightful surprises when you choose this lucky charm!" This description emphasizes the fun and positive aspects of the beach-ball while also linking its use to the "very good" luck status, making it suitable for your game's prediction prompt.
                </div>
            </div>
           
            
        </div>
    )
}

export default Result;