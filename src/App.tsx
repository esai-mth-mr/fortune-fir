import { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import SignUp from "./pages/SingUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Required from "./pages/verification/required";
import Succesful from "./pages/verification/succesful";
import Failed from "./pages/verification/failed";
import Result from "./pages/Result";
import Verifing from "./pages/verification/verifing";
import { decryptToken } from "./utils/cryptToken";
import { jwtDecode } from "jwt-decode";
import { logoutUser } from "./utils/logoutUser";
import { ICustomJwtPayload } from "./types";
import Contact from "./pages/Contact";
// import Payment from "./pages/payment/Payment";
import Failure from "./pages/payment/failure";
import Success from "./pages/payment/success";
import ResultPayment from "./pages/payment/Result";
import NotFound from "./pages/NotFound";
import Help from "./pages/Help";
import getImageURL from "./utils/getImageURL";
import AudioPlayer from "./common/AudioPlayer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = document.getElementById("main-audio") as HTMLAudioElement;
    if (audio) {
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    try {
      const pretoken = localStorage.getItem("token");
      if (pretoken) {
        const token = decryptToken(pretoken);
        const decoded = jwtDecode<ICustomJwtPayload>(token);

        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          logoutUser(navigate);
        }
      }
    } catch (err) {}
  }, []);
  return (
    <>
      <div className="app">
        <Link className="app-logo" to="/">
          <img
            src={getImageURL("./assets/HowLucky2025_logo.webp")}
            width="50px"
            height="50px"
          ></img>
        </Link>
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/required" element={<Required />} />
          <Route path="/verifing" element={<Verifing />} />
          <Route path="/successful" element={<Succesful />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />

          {/* private routes */}
          {/* <Route path="/main" element={<PrivateRoute />}>
            <Route path="/main" element={<Main />}></Route>
          </Route> */}
          <Route path="/main" element={<Main />}></Route>

          <Route path="/result" element={<Result />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/payment/paypal/result" element={<ResultPayment />} />
          <Route path="/payment/cancel" element={<Failure />} />
          <Route path="/payment/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Router /> */}
        <Toaster
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              marginTop: "30px",
              borderRadius: "10px",
              background: "#080808e0",
              color: "#fff",
              animationTimeline: "3000",
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
