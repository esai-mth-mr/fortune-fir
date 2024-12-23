import { useEffect } from "react";
import getImageURL from "../../utils/getImageURL";

const Success = () => {
  useEffect(() => {}, []);
  return (
    <div className="board">
      <div className="hero_img_field">
        <img
          className="hero_imgage"
          src={getImageURL("./assets/backgroundImage _1.png")}
          draggable={false}
          alt="hero_imgage"
        />
      </div>
      <div className="successIcon_field">
        <img
          src={getImageURL("./assets/successIcon.png")}
          draggable="false"
          alt="successIcon"
          className="successIcon"
        ></img>
      </div>
      <div
        className="gradient-text"
        style={{
          fontSize: "30px",
          fontFamily: "Poppins-Bold",
          marginBottom: "60px",
        }}
      >
        Payment Successed!
      </div>
      <div
        className=""
        style={{
          fontSize: "16px",
          fontFamily: "Poppins",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "0px 20px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          You can see the result. You can continue using the applications.
        </div>
      </div>
    </div>
  );
};

export default Success;
