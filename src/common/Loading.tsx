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
              color="error"
              sx={{
                position: "absolute",
                right: "-9px",
                top: "-20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px !important",
                height: "100px !important",
              }}
            />
          </Box>
          <img
            className="loading_img"
            width={60}
            height={60}
            src={getImageURL("./assets/HowLucky2025_logo.webp")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Loading;
