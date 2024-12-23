import { useEffect, useState } from "react";
<<<<<<< Updated upstream
import getImageURL from "../utils/getImageURL";
=======

>>>>>>> Stashed changes
import "./Loading.css";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");
<<<<<<< Updated upstream
  const loadingVarieties = ["Loading", "Loading.", "Loading..", "Loading..."];
=======
  //const [leftYear, setLeftYear] = useState("");
  //const [rightYear, setRightYear] = useState("");
  const loadingVarieties = ["Loading", "Loading.", "Loading..", "Loading..."];
  //const loadingLeftYear = ["2", "20", "2", ""];
  //const loadingRightYear = ["2", "25", "2", ""];
>>>>>>> Stashed changes
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(loadingVarieties[index]);
<<<<<<< Updated upstream
      index = (index + 1) % loadingVarieties.length;
=======
      console.log(loadingVarieties[index]);
      index = (index + 1) % loadingVarieties.length;
      //setLeftYear(loadingLeftYear[index1]);
      //setRightYear(loadingRightYear[index1]);
      // index1 = (index1 + 1) % loadingLeftYear.length;
>>>>>>> Stashed changes
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading-container">
      <div className="loading-content">
<<<<<<< Updated upstream
        <div className="spinner-img-container">
          <img
            width={60}
            height={60}
            src={getImageURL("./assets/spinner.png")}
          ></img>
        </div>
=======
        {/* <div className="front-text gradient-text">{leftYear}</div> */}
        <div className="spinner-img-container">
          <img width={60} height={60} src="/src/assets/spinner.png"></img>
        </div>
        {/* <div className="back-text gradient-text">{rightYear}</div> */}
>>>>>>> Stashed changes
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
