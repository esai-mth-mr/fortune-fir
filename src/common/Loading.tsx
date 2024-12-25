import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./Loading.css";
import getImageURL from "../utils/getImageURL";
const Loading = () => {
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
          <div className="loading_content">
            <div className="loading_content_loading">
              Loading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
