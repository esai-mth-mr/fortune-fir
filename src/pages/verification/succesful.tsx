import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@src/style/verify/succesful.scss";
import getImageURL from "../../utils/getImageURL";

function Succesful() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

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
      <div className="title">Email Verification</div>
      <div className="content">
        Your email was verified. <br />
        You can continue using the application.
      </div>
    </div>
  );
}

export default Succesful;
