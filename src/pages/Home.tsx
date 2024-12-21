import "@src/style/pages/home.scss";
import "@src/style/global.scss";
import { Link } from "react-router-dom";

function Home() {
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
          <Link className="start" to="/signup">
            Get Started
          </Link>
          <Link className="start" to="/signup">
            Contact Us
          </Link>
          <Link className="start" to="/signup">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
