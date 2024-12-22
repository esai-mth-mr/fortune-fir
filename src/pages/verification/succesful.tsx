import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@src/style/verify/succesful.scss";

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
          src="/assets/backgroundImage _1.png"
          draggable={false}
          alt="hero_imgage"
        />
      </div>
      <div className="successIcon_field">
        <img
          src="/assets/successIcon.png"
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
