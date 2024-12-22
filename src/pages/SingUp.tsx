import "@src/style/global.scss";
import "@src/style/pages/signup.scss";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CelebrationIcon from "@mui/icons-material/Celebration";
import WorkIcon from "@mui/icons-material/Work";
import WcIcon from "@mui/icons-material/Wc";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type ErrorType = {
  username?: string;
  email?: string;
  password?: string;
  gender?: string;
  birthday?: string;
  job?: string;
};

const SignUp: React.FC = () => {
  const [inputState, setInputState] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    gender: "male",
    birthday: "",
    job: "",
  });
  const [errors, setErrors] = useState<ErrorType>({});
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field being updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateInputs = () => {
    const newErrors: ErrorType = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.birthday) {
      newErrors.birthday = "Birthday is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.job) {
      newErrors.job = "Job is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (!validateInputs()) {
      return;
    }

    const newUser = {
      email: formData.email,
      name: formData.username,
      password: formData.password,
      gender: formData.gender,
      date: formData.birthday,
      job: formData.job,
    };

    axios
      .post("api/auth/register", newUser)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("email", formData.email);
        navigate("/required");
      })
      .catch((err) => {
        toast.error("Please Sign up later");
      });
  };

  const isContinueDisabled = () => {
    // Check if there are any errors in username, email, or password
    return (
      !formData.username ||
      !formData.email ||
      !/\S+@\S+\.\S+/.test(formData.email) ||
      !formData.password
    );
  };

  return (
    <div className="board">
      <img
        className="sign_header"
        src="/src/assets/santamodel.png"
        alt="Header"
        draggable="false"
      />
      <div className="form_field">
        {/* UserName or Gender */}
        <div className="form_input_field">
          {inputState === 1 ? (
            <TextField
              variant="outlined"
              size="small"
              type="text"
              value={formData.username}
              name="username"
              fullWidth
              onChange={handleInput}
              placeholder="Enter your name"
              error={!!errors.username} // Show error state
              helperText={errors.username} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon className="form_icon" />
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <Select
              value={formData.gender}
              name="gender"
              fullWidth
              size="small"
              onChange={handleInput}
              error={!!errors.gender} // Show error state
              startAdornment={
                <InputAdornment position="start">
                  <WcIcon className="form_icon" />
                </InputAdornment>
              }
            >
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
            </Select>
          )}
        </div>
        {/* Email or Birthday */}
        <div className="form_input_field">
          {inputState === 1 ? (
            <TextField
              variant="outlined"
              size="small"
              type="email"
              value={formData.email}
              name="email"
              fullWidth
              onChange={handleInput}
              placeholder="Enter your email"
              error={!!errors.email} // Show error state
              helperText={errors.email} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon className="form_icon" />
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <TextField
              variant="outlined"
              label="Birthday"
              size="small"
              type="date"
              value={formData.birthday}
              name="birthday"
              fullWidth
              onChange={handleInput}
              error={!!errors.birthday} // Show error state
              helperText={errors.birthday} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CelebrationIcon className="form_icon" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
        {/* Password or Job */}
        <div className="form_input_field">
          {inputState === 1 ? (
            <TextField
              variant="outlined"
              size="small"
              type="password"
              value={formData.password}
              name="password"
              placeholder="Enter your password"
              fullWidth
              onChange={handleInput}
              error={!!errors.password} // Show error state
              helperText={errors.password} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon className="form_icon" />
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <TextField
              variant="outlined"
              size="small"
              type="text"
              value={formData.job}
              name="job"
              placeholder="Enter your job"
              fullWidth
              onChange={handleInput}
              error={!!errors.job} // Show error state
              helperText={errors.job} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon className="form_icon" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
      </div>
      <div className="sign_desc">
        I already have an account. <a href="/login">Sign In.</a>
      </div>
      {inputState === 1 ? (
        <div
          onClick={() => setInputState(2)}
          className={`sign_btn ${isContinueDisabled() ? "disabled" : ""}`}
          style={{ pointerEvents: isContinueDisabled() ? "none" : "auto" }}
        >
          Continue
        </div>
      ) : (
        <div className="sign_btn" onClick={handleSignUp}>
          Sign Up
        </div>
      )}
    </div>
  );
};

export default SignUp;
