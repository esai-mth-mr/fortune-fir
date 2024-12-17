import '@src/style/global.scss';
import '@src/style/pages/main.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';

function Main(){
    const gifts =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffeled = gifts.sort(() => {
      const randomTrueOrFalse = Math.random() > 0.5;
      return randomTrueOrFalse ? 1 : -1
    });
    const giftdisplay= gifts.map((gift, index)=>{
        // const i=index+1;
        <img className={`${"gift_"+index}`} src={`${"src/assets/gift_"+gift+".png"}`}/>
        }
    );
    
    return(
        <div className='board'>
            <div className='month'>
                <img className='characters' src="src/assets/main_characters.png"/>
                <img className='month_icon' src="src/assets/months/1.png"/>
            </div>
            <img className='main_tree' src="src/assets/main_tree.png"></img>
            <div className='main_header'>
                <div className='ratings'>Ratings</div>
                <div className='results'>Results</div>
            </div>
            
            <div className='main_footer'>
                <Stack spacing={2}>
                <Pagination count={10} variant="outlined" color="secondary" />
                </Stack>
            </div>
            {giftdisplay}
            
            {/* <img className={`${"gift_2"}`} src={`${"src/assets/gift_2"+".png"}`}/> */}
            
        </div>
    )
}

export default Main;