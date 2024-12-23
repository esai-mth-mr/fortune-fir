import { useEffect, useState } from "react";
import getImageURL from "../utils/getImageURL";
import "./Loading.css";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  const loadingVarieties = ["Loading", "Loading.", "Loading..", "Loading..."];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(loadingVarieties[index]);
      index = (index + 1) % loadingVarieties.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner-img-container">
          <img
            width={60}
            height={60}
            src={getImageURL("./assets/spinner.png")}
          ></img>
        </div>
      </div>
      <p
        className="loading-text gradient-text"
        style={{ opacity: 20, fontFamily: "Poppins-boldItalic" }}
      >
        {loadingText}
      </p>
    </div>
  );
};

export default Loading;
