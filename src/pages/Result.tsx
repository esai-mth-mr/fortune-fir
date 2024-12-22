import React, { ReactEventHandler, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import '@src/style/global.scss';  
import '@src/style/pages/main.scss';  
import { Stack } from '@mui/material';  
import { Pagination } from '@mui/material';  


function Result(){
    const [month, setMonth] = useState<number>(1);
    // const [count, setCount] = useState(0);

    // const [currentPage, setCurrentPage] = useState(1);
    const [paystate, setPayed] = useState<boolean>(false);
    const navigate = useNavigate();

    const eval_data=[
      {eval_state: "Extremely Good", eval_content:"Living here means you will experience success in various endeavors. Opportunities will arise, from lucrative investments to meeting inspiring individuals who can change your life for the better."},
      {eval_state: "Very Good", eval_content:"You are likely to encounter wonderful opportunities that align with your goals, whether in business or personal projects, enhancing your sense of achievement and happiness."},
      {eval_state: "Good", eval_content:"You may experience some positive developments in your job, such as small promotions or recognition for your efforts, contributing to a sense of stability and satisfaction."},
      {eval_state: "Bad", eval_content:"Challenges may arise frequently, making it difficult to navigate through daily tasks and responsibilities effectively, leading to frustration and stress in your life."},
      {eval_state: "Very Bad", eval_content:"Expect a series of unfortunate events that could derail your plans and ambitions, leading to feelings of hopelessness and discouragement in various aspects of life."},
      {eval_state: "Extremely Bad", eval_content:"Social interactions can be highly detrimental; relationships may become toxic or nonexistent, leading to profound feelings of loneliness and disconnection from the world around you."},
    ]
    //metadta
    const allowdata=[
        {month: 1, story: "you are welcom1", point: 300},
        {month: 2, story: "you are welcom2", point: 300},
        {month: 3, story: "you are welcom3", point: 300},
        {month: 4, story: "you are welco4", point: 300},
        {month: 5, story: "you are welcom5", point: 300},
        {month: 6, story: "you are welco6", point: 300},
        {month: 7, story: "you are welcom7", point: 300},
        {month: 8, story: "you are welcom8", point: 300},
        {month: 9, story: "you are welcom9", point: 300},
        {month: 10, story: "you are welcom10", point: 300},
        {month: 11, story: "you are welcom11", point: 300},
        {month: 12, story: "you are welcom12", point: 300},
        {month: 13, story: "you are welcom13", point: 900},
    ]

    const notallowdata=[
        {month: 1, point: 300},
        {month: 2, point: 300},
        {month: 3, point: 300},
        {month: 4, point: 300},
        {month: 5, point: 300},
        {month: 6, point: 300},
        {month: 7, point: 300},
        {month: 8, point: 300},
        {month: 9, point: 300},
        {month: 10, point: 300},
        {month: 11, point: 300},
        {month: 12, point: 300},
        {month: 13, point: 300},
    ]
    const months=["","Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // useEffect(()=>{setMonth(currentPage)},[currentPage]);
    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
      ) => {
        setMonth(value);
        console.log(value)
      };

      const handleRegenerate= () =>{
        const queryParam = new  URLSearchParams(String(month));
console.log(queryParam);
        //navigate(`/main/?month=${month}`);
        setMonth(13);

      }
    return(
        <div className='board'>
            <div className="board_content">
              {month<=12?<div className={`${month<=12?`main_month`:``}`}>
                  <div className='month_title'>2025</div>
                  <div className='month_num'><h6 style={{ fontSize:"30px"}}>{months[month]!}</h6></div>
              </div>:<></>}
              
              {month==13? <div className={`${month==13?`totalstory`:``}`}>
                  Total<br></br>story
              </div>:<></>}
              
              {month<=12?<div className={`${month<=12?`result_score`:``}`}>
                  {month<=12?<><div>Year:{allowdata[12].point}</div>
                  <div>Month:{allowdata[month-1].point}</div></>:<>Year:{allowdata[month-1].point}</>}
              </div>:<></>}
              
              {month==13?<div className={`${month==13?`result_year_score`:``}`}>
                  <div>Year Point</div>
                  <div>{allowdata[12].point}</div>
              </div>:<></>}
              
              <div className='main_img_field'>
                  <img className='main_img' src="/src/assets/backgroundImage _1.png"/>
              </div>
              <div className="result_pagination">
                  <Stack style={{width: "100%"}} spacing={1}>
                      <Pagination 
                      onChange={handlePageChange}   
                      count={12}   
                      variant="outlined"  
                      />
                  </Stack>
              </div>
              {paystate==true?
                  <><div onClick={()=>setMonth(13)} style={{left:"15%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn'>Total Story</div>
                  <Link onClick={handleRegenerate} style={{right:"15%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn' to="/main">Regenerate</Link></>
              :<>
                  <div onClick={()=>setMonth(13)} style={{left:"1%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn'>Total Story</div>
                  <div style={{left:"35%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn'>Preview</div>
                  <Link onClick={handleRegenerate} style={{right:"1%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn' to="/main">Regenerate</Link>
              </>
              }
              <div className="result_field">
                  <div className={`${paystate==true?`result_content`:`result_content2`}`}>
                      {paystate==true?allowdata[month-1].story!:allowdata[month-1].story}
                  </div>
              </div>
              {/* display for description */}
              {/* <div className="result_state_desc">
                <div className="result_state_desc_title">
                  {allowdata[month-1].point>=1400&&allowdata[month-1].point<=2100?eval_data[0].eval_state:""}
                  {allowdata[month-1].point>=700&&allowdata[month-1].point<1400?eval_data[1].eval_state:""}
                  {allowdata[month-1].point>=0&&allowdata[month-1].point<1400?eval_data[2].eval_state:""}
                  {allowdata[month-1].point>=-700&&allowdata[month-1].point<0?eval_data[3].eval_state:""}
                  {allowdata[month-1].point>=-1400&&allowdata[month-1].point<-700?eval_data[4].eval_state:""}
                  {allowdata[month-1].point>=-2100&&allowdata[month-1].point<-1400?eval_data[5].eval_state:""}
                </div>
                <div className="result_state_desc_desc">
                  {allowdata[month-1].point>=1400&&allowdata[month-1].point<=2100?eval_data[0].eval_content:""}
                  {allowdata[month-1].point>=700&&allowdata[month-1].point<1400?eval_data[1].eval_content:""}
                  {allowdata[month-1].point>=0&&allowdata[month-1].point<1400?eval_data[2].eval_content:""}
                  {allowdata[month-1].point>=-700&&allowdata[month-1].point<0?eval_data[3].eval_content:""}
                  {allowdata[month-1].point>=-1400&&allowdata[month-1].point<-700?eval_data[4].eval_content:""}
                  {allowdata[month-1].point>=-2100&&allowdata[month-1].point<-1400?eval_data[5].eval_content:""}
                </div>
              </div> */}
            </div>
        </div>
    )
}

export default Result;