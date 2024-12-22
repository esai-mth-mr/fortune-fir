import "@src/style/pages/notFound.scss";

function NotFound() {
  return (
    <div className="notfound-board">
      <div className="notfound-hero_img_field">
        <img
          className="notfound-hero_image"
          src="/assets/backgroundImage _1.png"
          draggable={false}
          alt="notfound-hero_imgage"
        />
      </div>
      <div className="notfound-failIcon_field">
        <img
          src="/assets/failIcon.png"
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
