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
      <div className="title">Payment Successed!</div>
      <div className="content">
        You can see the result. <br />
        You can continue using the applications.
      </div>
    </div>
  );
};

export default Success;
