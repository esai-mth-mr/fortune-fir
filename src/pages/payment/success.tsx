import { useEffect } from "react";
import getImageURL from "../../utils/getImageURL";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/result");
  };
  useEffect(() => {}, []);
  return (
    <div className="board">
      <div className="hero_img_field">
        <img
          className="hero_imgage"
          src={getImageURL("./assets/backgroundImage _1.webp")}
          draggable={false}
          alt="hero_imgage"
        />
      </div>
      <div className="successIcon_field">
        <img
          src={getImageURL("./assets/successIcon.webp")}
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
        }}
      >
        Payment Successed!
      </div>
      <div>
        <button
          style={{
            background:
              "linear-gradient(to right, rgb(86, 171, 47) 0%, rgb(168, 224, 99) 51%, rgb(86, 171, 47) 100%)",
            backgroundSize: "200% auto",
            fontSize: "20px",
            fontFamily: "Poppins-bold",
            borderRadius: "50px",
            color: "white",
            padding: "8px 15px",
          }}
          className="button"
          onClick={handleBack}
        >
          See Result!
        </button>
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
