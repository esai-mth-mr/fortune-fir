import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./Loading.css";
import getImageURL from "../utils/getImageURL";
import { useEffect, useState } from "react";
const LoadingMain = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [analysing, setAnalysing] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      setAnalysing(true);
    }, 60000)
    setTimeout(()=>{
      setAnalysing(false);
      setAlmost(true);
    }, 120000)

  }, [])

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner-img-container">
          <Box sx={{ display: "flex" }}>
            <CircularProgress 
              color="success"
              sx={{
                position:'absolute',
                right:'-1px',
                top:'-12px', 
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center', 
                width: '80px !important', 
                height: '80px !important'
              }}
              thickness={1.5}
            />
          </Box>
          <img
            className="loading_img"
            width={60}
            height={60}
            src={getImageURL("./assets/HowLucky2025_logo.webp")}
          ></img>
         
        </div>
        <div className="spinner-content">
          {loading?<div className="loading_content_loading">Uploading</div>:<></>}
          {analysing?<div className="loading_content_analysing">Analysing</div>:<></>}
          {almost?<div className="loading_content_done">Almost Done</div>:<></>}
        </div>
      </div>
    </div>
  );
};

export default LoadingMain;
