import "@src/style/pages/home.scss";
import "@src/style/global.scss";
import { useNavigate } from "react-router-dom";
import getImageURL from "../utils/getImageURL";
import { checkAuthApi } from "../api/checkAuthApi";

function Home() {
  const navigate = useNavigate();

  const handleStart = async () => {
    const pretoken = localStorage.getItem("token");

    if (pretoken) {
      const res = await checkAuthApi();
      if (res.status == 200) {
        navigate("/getready");
      } else {
        navigate("/login");
      }
      return;
    }

    navigate("/login");
  };

  return (
    <div className="board">
      <div className="snow">
        {Array.from({ length: 50 }).map((_, index) => {
          const randomDelay = Math.random() * 3; // Random delay between 0 and 5 seconds
          const randomDuration = 7 + Math.random() * 10; // Random duration between 5 and 10 seconds
          const randomLeft = Math.random() * 100; // Random horizontal position (0% to 100%)
          const randomSize = 5 + Math.random() * 7; // Random size between 10px and 30px

          return (
            <div
              key={index}
              className="snowflake"
              style={{
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
              }}
            ></div>
          );
        })}
      </div>

      <div className="home_header">
        <img
          className="landing"
          src={getImageURL("./assets/santa2.webp")}
          alt="santa"
          draggable={false}
        />
      </div>
      <div className="home_footer">
        <div className="home_title">Unwrap the Magic of Thoughtful Giving</div>
        <div className="home_content">Get Ready for a Merry Christmas!</div>
        <div className="buttons">
          <div className="start" onClick={handleStart}>
            Get Started
          </div>
          <div
            className="start"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </div>
          <div
            className="start"
            onClick={() => {
              navigate("/help");
            }}
          >
            Help
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
