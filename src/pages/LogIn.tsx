import "@src/style/global.scss";
import "@src/style/pages/signup.scss";
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { encryptToken } from "../utils/cryptToken";
import toast from "react-hot-toast";
import getImageURL from "../utils/getImageURL";

function LogIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    axios
      .post("api/auth/login", formData)
      .then((res) => {
        localStorage.setItem("token", encryptToken(res.data.token));
        navigate("/main");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="board">
      <img
        className="sign_header"
        src={getImageURL("./assets/santamodel-1.webp")}
        alt="hero"
        draggable="false"
      />
      <div className="form_field">
        <div className="form_input_field">
          <TextField
            variant="outlined"
            size="small"
            type="email"
            value={formData.email}
            name="email"
            fullWidth
            onChange={handleInput}
            placeholder="Enter your email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon className="form_icon" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="form_input_field">
          <TextField
            variant="outlined"
            size="small"
            type="password"
            value={formData.password}
            name="password"
            fullWidth
            onChange={handleInput}
            placeholder="Enter your password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon className="form_icon" />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="login_desc">
        I have already an account.<a href="/signup">Sign Up.</a>
      </div>
      <div className="login_btn" onClick={handleLogin}>
        Sign In
      </div>
    </div>
  );
}

export default LogIn;
