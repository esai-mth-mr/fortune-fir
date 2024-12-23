import { useEffect, useState } from "react";
import "@src/style/verify/required.scss";
import axios from "../../utils/axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import getImageURL from "../../utils/getImageURL";

function Required() {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(localStorage.getItem("email") || "");
  }, []);

  const handleResendEmail = () => {
    if (email === "") return;

    axios
      .post("api/auth/resend-email", { email })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="board">
      <div className="verify_hero_img_field">
        <img
          className="hero_image"
          src={getImageURL("./assets/backgroundImage _1.png")}
          draggable={false}
          alt="hero_image"
        />
      </div>
      <div className="verifyIcon_field">
        <img
          src={getImageURL("./assets/verify.png")}
          draggable="false"
          alt="verifyIcon"
          className="verifyIcon"
        ></img>
      </div>
      <div className="title">Email Verification</div>
      <div className="content">
        You’re almost there! We sent an email to{" "}
        <span style={{ textDecoration: "underline" }}>{email}</span>
        . <br />
        If you don’t see it, you may need to check your spam folder
      </div>
      <div className="verify_button_field">
        Still can't find the email?&nbsp;
        <div className="verify_button" onClick={handleResendEmail}>
          Resend
        </div>
      </div>

      <div className="verify_button_field" style={{ marginTop: "10px" }}>
        Need help? &nbsp;
        <Link className="verify_button" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Required;
