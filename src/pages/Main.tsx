import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
import { Stack } from '@mui/material';  
import { Pagination } from '@mui/material';  
// import Modal from '../components/Modal';
import Modal from './modal/modal';

function Main() {  
    const [month, setMonth] = useState(1);
    const [count, setCount]=useState(0);
    const [gifts, setGifts]=useState<number[]>();
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];  
    const shuffledGifts = [...array].sort(() => Math.random() - 0.5);  
    
    useEffect(()=>{
        if(count%7==0){
            setGifts([...shuffledGifts]);
        }
    }, [count])

    useEffect(()=>{
        console.log(count);
    })

    // useEffect(()=>{
    //     if(count%7==0){

    //     }
    // }, [month, count])
    //modal
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // Shuffle gifts array  
    // useEffect(() => {  
    //     // Shuffle gifts array  
    //     const shuffledGifts = [...array].sort(() => Math.random() - 0.5);  

    //     // Check if count is a multiple of 7 (excluding when count is 0 to prevent initial set)  
    //     if (count > 0 && count % 7 === 0) {  
    //         // setGifts(shuffledGifts); // Set shuffled gifts to state  
    //     }  
    // }, [count, array]); // Only run when count changes  
    // Create gift display elements  
    const giftdisplay = gifts?.map((gift, index) => (  
        <img   
            onClick={()=>{setCount(count+1)}}
            key={index}   
            className={`gift_${index}`}   
            src={`src/assets/gift_${gift}.png`}   
            alt={`Gift ${gift}`}   
        />  
    ));
    
    //modal
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);  
    const [isModalState, setModalState] = useState<number>(1);

    const openModal = () => setIsModalOpen(true);  
    const closeModal = () => setIsModalOpen(false);  
  
    return (  
        <div className='board'>  
            <div className='month'>  
                <img className='characters' src="src/assets/main_characters.png" alt="Characters" />  
                
                <img className='month_icon' src={`${`src/assets/months/`+month+`.png`}`} alt="Month Icon" />  
            </div>  
            <img className='main_tree' src="src/assets/main_tree.png" alt="Main Tree" />  
            {/* <div className='main_header'>  
                <div className='main_header_rating' onClick={()=>{setIsOpen(true); setModalState(1)} }>Ratings</div>  
                {isOpen&&<Modal setIsOpen={setIsOpen} modalstate={isModalState}/>}
                <div className='results' onClick={()=>{setIsOpen(true); setModalState(2)}}>Results</div>  
                {isOpen&&<Modal setIsOpen={setIsOpen} modalstate={isModalState}/>}
                You can select 7 gifts in 12 items and you can edit only once for this month. Please select gifts and then move to next month.
            </div>   */}
            
            <div className='main_footer'>  
                <div className='main_footer_btn' onClick={()=>{month<12?setMonth(month+1):""; setCount(0); setGifts([...shuffledGifts]);}}>
                    {month<12?"Next":""}
                    {month==12?"Finish":""}
                </div>
                {/* <Stack spacing={2}>  
                    <Pagination  onChange={(event, newPage) => setMonth(newPage)}   count={12} variant="outlined" color="secondary" />  
                </Stack>   */}
            </div>  
            
            <div className='gifts-container'> {/* Optional: You can style this container */}  
                {giftdisplay}  
            </div>  
        </div>  
    );  
}  

export default Main;