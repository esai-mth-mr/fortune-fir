import '@src/style/global.scss';
import '@src/style/pages/main.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Main(){
    return(
        <div className='board'>
            <img className='main_tree' src="src/assets/main_tree.png"></img>
            <div className='month'>January</div>
            {/* box */}
            {/* <img className='gift_1' src="src/assets/gift.png"></img> */}
            <img className='gift_2' src="src/assets/gift1.png"></img>
            <img className='gift_3' src="src/assets/gift2.png"></img>
            
        </div>
    )
}

export default Main;