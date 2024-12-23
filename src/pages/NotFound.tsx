import "@src/style/pages/notFound.scss";
import getImageURL from "../utils/getImageURL";

function NotFound() {
  return (
    <div className="notfound-board">
      <div className="notfound-hero_img_field">
        <img
          className="notfound-hero_image"
          src={getImageURL("./assets/backgroundImage _1.webp")}
          draggable={false}
          alt="notfound-hero_imgage"
        />
      </div>
      <div className="notfound-failIcon_field">
        <img
          src={getImageURL("./assets/failIcon.webp")}
          draggable="false"
          alt="failIcon"
          className="notfound-failIcon"
        ></img>
      </div>
      <div className="notfound-title">Page Not Found</div>
    </div>
  );
}

export default NotFound;
