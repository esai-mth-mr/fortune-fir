import {ReactEventHandler, useEffect, useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import "@src/style/global.scss";
import "@src/style/pages/main.scss";
import { Stack } from '@mui/material';  
import { Pagination } from '@mui/material';  

function Result() {
    const [isresultOpen, setIsResultOpen]=useState<boolean>(true);
  const [month, setMonth] = useState(1);
  const [paystate, setPayed] = useState<boolean>(false);
  const navigate = useNavigate();
  const location= useLocation();
  const eval_data=[
    {eval_state: "Extremely Good", eval_content:"Living here means you will experience success in various endeavors. Opportunities will arise, from lucrative investments to meeting inspiring individuals who can change your life for the better."},
    {eval_state: "Very Good", eval_content:"You are likely to encounter wonderful opportunities that align with your goals, whether in business or personal projects, enhancing your sense of achievement and happiness."},
    {eval_state: "Good", eval_content:"You may experience some positive developments in your job, such as small promotions or recognition for your efforts, contributing to a sense of stability and satisfaction."},
    {eval_state: "Bad", eval_content:"Challenges may arise frequently, making it difficult to navigate through daily tasks and responsibilities effectively, leading to frustration and stress in your life."},
    {eval_state: "Very Bad", eval_content:"Expect a series of unfortunate events that could derail your plans and ambitions, leading to feelings of hopelessness and discouragement in various aspects of life."},
    {eval_state: "Extremely Bad", eval_content:"Social interactions can be highly detrimental; relationships may become toxic or nonexistent, leading to profound feelings of loneliness and disconnection from the world around you."},
  ]
  //metadta
  const allowdata = [
    { month: 1, story: "you are welcom1", point: 300 },
    { month: 2, story: "you are welcom2", point: 300 },
    { month: 3, story: "you are welcom3", point: 300 },
    { month: 4, story: "you are welco4", point: 300 },
    { month: 5, story: "you are welcom5", point: 300 },
    { month: 6, story: "you are welco6", point: 300 },
    { month: 7, story: "you are welcom7", point: 300 },
    { month: 8, story: "you are welcom8", point: 300 },
    { month: 9, story: "you are welcom9", point: 300 },
    { month: 10, story: "you are welcom10", point: 300 },
    { month: 11, story: "you are welcom11", point: 300 },
    { month: 12, story: "you are welcom12", point: 300 },
    { month: 13, story: "you are welcom13", point: 900 },
  ];

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

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setMonth(value);
  };

  useEffect(() => {
    setPayed(false);
  });

  //navigate
  const handleRegenerate= () =>{
    navigate(`/main/?result_month=${month.toString()+"_"+(allowdata[12].point-allowdata[month].point).toString()}"`);
  }
  const handleReround = () => {
      navigate(`/main`);
  }
  //navigate with main
  useEffect(()=>{
      const queryParams = new URLSearchParams(location.search);
      if(queryParams.size==1){
          const result_month = queryParams.get("main_month");
          setMonth(parseInt(result_month!));
      }
      else{
          setMonth(1);
      }
  },[]);    

  return (
    <div className="board">
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
        <div className="main_img_field">
          <img
            className="main_img"
            src="/src/assets/backgroundImage _1.png"
            alt="main"
            draggable="false"
          />
        </div>
        <div className="result_pagination">
          <div className="result_page">
              <Stack style={{width: "100%"}} spacing={1}>
                <Pagination 
                onChange={handlePageChange}   
                count={12}   
                variant="outlined"  
                />
              </Stack>
          </div>
        </div>
        {paystate==true?
          <>
            <div onClick={handleRegenerate} style={{left:"1%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn'>Regenerate</div>
            <div onClick={()=>setMonth(13)} style={{left:"35%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn'>Total Story</div>
            <div onClick={handleReround} style={{right:"1%", bottom:"12%", width:"30%", height:"30px"}} className='common_btn' >Reround</div></>
          :<>
            <div onClick={()=>setMonth(13)} style={{left:"5%", bottom:"12%", width:"40%", height:"30px"}} className='common_btn'>Total Story</div>
            <div style={{right:"5%", bottom:"12%", width:"40%", height:"30px"}} className='common_btn'>Preview</div>
            <div onClick={handleRegenerate} style={{left:"5%", bottom:"18%", width:"40%", height:"30px"}} className='common_btn' >Regenerate</div>
            <div onClick={handleReround} style={{right:"5%", bottom:"18%", width:"40%", height:"30px"}} className='common_btn' >Reround</div>
        </>
        }
        <div className={`${`result_field`}`} style={{height: paystate==true?"50%":"45%"}}>
            <div className={`${paystate==true?`result_content`:`result_content2`}`}>
                {paystate==true?allowdata[month-1].story!:allowdata[month-1].story}
            </div>
        </div>
        {/* display for description */}
        <div className={`${isresultOpen==true?`result_state_desc`:`result_state_desc1`}`}>
          <div className="result_state_desc_title">
            {allowdata[month-1].point>=1400&&allowdata[month-1].point<=2100?eval_data[0].eval_state:""}
            {allowdata[month-1].point>=700&&allowdata[month-1].point<1400?eval_data[1].eval_state:""}
            {allowdata[month-1].point>=0&&allowdata[month-1].point<700?eval_data[2].eval_state:""}
            {allowdata[month-1].point>=-700&&allowdata[month-1].point<0?eval_data[3].eval_state:""}
            {allowdata[month-1].point>=-1400&&allowdata[month-1].point<-700?eval_data[4].eval_state:""}
            {allowdata[month-1].point>=-2100&&allowdata[month-1].point<-1400?eval_data[5].eval_state:""}
          </div>
          <div className="result_state_desc_desc">
            {allowdata[month-1].point>=1400&&allowdata[month-1].point<=2100?eval_data[0].eval_content:""}
            {allowdata[month-1].point>=700&&allowdata[month-1].point<1400?eval_data[1].eval_content:""}
            {allowdata[month-1].point>=0&&allowdata[month-1].point<700?eval_data[2].eval_content:""}
            {allowdata[month-1].point>=-700&&allowdata[month-1].point<0?eval_data[3].eval_content:""}
            {allowdata[month-1].point>=-1400&&allowdata[month-1].point<-700?eval_data[4].eval_content:""}
            {allowdata[month-1].point>=-2100&&allowdata[month-1].point<-1400?eval_data[5].eval_content:""}
          </div>

          <img onClick={()=>setIsResultOpen(false)} className="result_close" src="/src/assets/close.png" draggable={false} alt="result_close"/>
          <img className="result_santa" src="/src/assets/santa.png" draggable={false} alt="result_close"/>

          {allowdata[month-1].point>=1400&&allowdata[month-1].point<=2100?<img className="result_anim_luck" src="/src/assets/exe_good.png" draggable={false} alt="result_anim"/>:""}
          {allowdata[month-1].point>=700&&allowdata[month-1].point<1400?<img className="result_anim_luck" src="/src/assets/very_good.png" draggable={false} alt="result_anim"/>:""}
          {allowdata[month-1].point>=0&&allowdata[month-1].point<700?<img className="result_anim_luck" src="/src/assets/good.png" draggable={false} alt="result_anim"/>:""}
          {allowdata[month-1].point>=-700&&allowdata[month-1].point<0?<img className="result_anim_luck" src="/src/assets/bad.png" draggable={false} alt="result_anim"/>:""}
          {allowdata[month-1].point>=-1400&&allowdata[month-1].point<-700?<img className="result_anim_luck" src="/src/assets/very_bad.png" draggable={false} alt="result_anim"/>:""}
          {allowdata[month-1].point>=-2100&&allowdata[month-1].point<-1400?<img className="result_anim_luck" src="/src/assets/exe_bad.png" draggable={false} alt="result_anim"/>:""}
        </div>
      </div>
    </div>
  );
}

export default Result;
