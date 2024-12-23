import { useNavigate } from "react-router-dom";
import getImageURL from "../../utils/getImageURL";

const Failure = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/result");
  };
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
      <div className="failIcon_field">
        <img
          src={getImageURL("./assets/failIcon.webp")}
          draggable="false"
          alt="failIcon"
          className="failIcon"
        ></img>
      </div>
      <div
        className="gradient-text-1"
        style={{
          fontSize: "30px",
          fontFamily: "Poppins-Bold",
          marginBottom: "60px",
        }}
      >
        Payment Failed!
      </div>
      <div
        className=""
        style={{
          fontSize: "16px",
          fontFamily: "Poppins",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div className="button_field" style={{ marginBottom: "200px" }}>
        <button className="button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Failure;
