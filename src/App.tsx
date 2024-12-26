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
import AudioPlayer from "./common/AudioPlayer";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./admin/admin_pages/Admin";
import AdminUser from "./admin/admin_pages/AdminUser";
import AdminPost from "./admin/admin_pages/AdminPost";
import AdminLogin from "./admin/admin_pages/AdminLogin";

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
          <HomeSharpIcon
            sx={{
              width: "100% !important",
              height: "auto",
              color: "#eda9a9",
              zIndex: "100",
              marginLeft: "0.3%",
              marginTop: "0.3%",
            }}
          />
        </Link>
        <AudioPlayer />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/required" element={<Required />} />
          <Route path="/verifing" element={<Verifing />} />
          <Route path="/successful" element={<Succesful />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          {/* Admin public Routes */}
          <Route path="/account/admin/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/account/admin/Admin" element={<Admin/>}/>
          <Route path="/account/admin/AdminUser" element={<AdminUser/>}/>
          <Route path="/account/admin/AdminPost" element={<AdminPost/>}/>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<Main />}></Route>

            <Route path="/result" element={<Result />} />
            <Route path="/payment/paypal/result" element={<ResultPayment />} />
            <Route path="/payment/cancel" element={<Failure />} />
            <Route path="/payment/success" element={<Success />} />
          </Route>

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
