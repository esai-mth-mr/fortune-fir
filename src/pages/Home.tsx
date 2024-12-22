import "@src/style/pages/home.scss";
import "@src/style/global.scss";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import setAuthToken from "../utils/setAuthToken";

function Home() {
  const navigate = useNavigate();
  const handleStart = () => {
    const pretoken = localStorage.getItem("token");
    if (pretoken) {
      axios
        .post("/api/auth/checkUser", {}, setAuthToken())
        .then((res) => {
          console.log(res.data.message);
          navigate("/main");
        })
        .catch((err) => {
          console.log(err);
          navigate("/login");
        });

      return;
    }
    navigate("/login");
  };

  return (
    <div className="board">
      <div className="home_header">
        <img
          className="landing"
          src="/src/assets/santa2.png"
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
