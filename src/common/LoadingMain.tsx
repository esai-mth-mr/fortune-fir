import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./Loading.css";
import getImageURL from "../utils/getImageURL";
import { useEffect, useState } from "react";
const LoadingMain = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [collecting, setCollecting] = useState<boolean>(false);
  const [analysing, setAnalysing] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCollecting(true);
    }, 2000);
    setTimeout(() => {
      setCollecting(false);
      setAnalysing(true);
    }, 4000);
    setTimeout(() => {
      setAnalysing(false);
      setAlmost(true);
    }, 6000);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner-img-container">
          <Box sx={{ display: "flex" }}>
            <CircularProgress
              color="success"
              sx={{
                position: "absolute",
                right: "12px",
                top: "-12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80px !important",
                height: "80px !important",
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
          {loading ? (
            <div className="loading_content_loading">Uploading ...</div>
          ) : (
            <></>
          )}
          {collecting ? (
            <div className="loading_content_collecting">
              Collecting Month Data ...
            </div>
          ) : (
            <></>
          )}
          {analysing ? (
            <div className="loading_content_loading">Analysing ...</div>
          ) : (
            <></>
          )}
          {almost ? (
            <div className="loading_content_loading">Almost Done</div>
          ) : (
            <></>
          )}
        </div>
        <div className="spinner-content"></div>
      </div>
    </div>
  );
};

export default LoadingMain;
