import { useNavigate } from "react-router-dom";

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
      <div className="title">Payment Failed</div>
      <div className="content">
        Your Paymenet Failed.
        <br />
        Please try again.
      </div>

      <div className="button_field">
        <button className="button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Failure;
