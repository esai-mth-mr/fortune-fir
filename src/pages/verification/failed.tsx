import "@src/style/verify/failed.scss";
import { useNavigate } from "react-router-dom";

function Failed() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/required");
  };

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
      <div className="failIcon_field">
        <img
          src="/assets/failIcon.png"
          draggable="false"
          alt="failIcon"
          className="failIcon"
        ></img>
      </div>
      <div className="title">Email Verification</div>
      <div className="content">
        Your account access expired. <br />
        Please try again.
      </div>

      <div className="button_field">
        <button className="button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Failed;
