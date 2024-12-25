import { CircularProgress } from "@mui/material";
import getImageURL from "../utils/getImageURL";
import { useEffect, useState } from "react";
import "@src/style/pages/loading.scss";
const LoadingResult = () => {
  const [collecting, setCollecting] = useState<boolean>(true);
  const [analysing, setAnalysing] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setCollecting(false);
      setAnalysing(true);
    }, 2000);
    setTimeout(() => {
      setAlmost(true);
      setAnalysing(false);
    }, 4000);
  }, []);

  return (
    <div className="spinnertotal">
      <div className="spinner">
        <div className="spinner-container">
          <div className="spinner-order">
            <div className="spinner-logo">
              <img
                className="spinner-img"
                width={60}
                height={60}
                src={getImageURL("./assets/HowLucky2025_logo.webp")}
              ></img>
            </div>
            <CircularProgress
              className="spinner-progress"
              color="success"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80px !important",
                height: "80px !important",
              }}
              thickness={1.5}
            />
            <div className="spinner-content">
              {collecting ? (
                <div className="loading_content">Uploading...</div>
              ) : (
                <></>
              )}
              {analysing ? (
                <div className="loading_content">Analysing ...</div>
              ) : (
                <></>
              )}
              {almost ? (
                <div className="loading_content">Almost Done</div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingResult;
