import "@src/style/global.scss";
import "@src/style/pages/getready.scss";
import { Link } from "react-router-dom";
import getImageURL from "../utils/getImageURL";

function GetReady() {
  return (
    <div className="board">
      <div className="getready_img_field">
        <img
          className="getready_img"
          src={getImageURL("./assets/backgroundImage _1.webp")}
          alt="ready"
          draggable="false"
        />
      </div>
      <Link className="getready_btn" to="/main">
        Get Ready
      </Link>
    </div>
  );
}

export default GetReady;
