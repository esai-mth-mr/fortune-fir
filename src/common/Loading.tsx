import { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./Loading.css";
import getImageURL from "../utils/getImageURL";
import { error } from "console";
const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  //const [leftYear, setLeftYear] = useState("");
  //const [rightYear, setRightYear] = useState("");
  const loadingVarieties = ["Loading", "Loading.", "Loading..", "Loading..."];
  //const loadingLeftYear = ["2", "20", "2", ""];
  //const loadingRightYear = ["2", "25", "2", ""];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(loadingVarieties[index]);
      console;
      index = (index + 1) % loadingVarieties.length;
      //setLeftYear(loadingLeftYear[index1]);
      //setRightYear(loadingRightYear[index1]);
      // index1 = (index1 + 1) % loadingLeftYear.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* <div className="front-text gradient-text">{leftYear}</div> */}
        <div className="spinner-img-container">
          <Box 
            sx={{ display: 'flex'}}
          >
            <CircularProgress 
              color="error"
              sx={{position:'absolute',right:'9px',top:'5px', display:'flex', justifyContent:'center', alignItems:'center', width: '50px', height: '50px'}}
              // size={'30rem'}
            />
          </Box>
          <img
            className="loading_img"
            width={60}
            height={60}
            src={getImageURL("./assets/HowLucky2025_logo.webp")}
          ></img>
        </div>
        {/* <div className="back-text gradient-text">{rightYear}</div> */}
      </div>
      {/* <p
        className="loading-text gradient-text"
        style={{ opacity: 20, fontFamily: "Poppins" }}
      >
        {loadingText}
      </p> */}
    </div>
  );
};

export default Loading;
