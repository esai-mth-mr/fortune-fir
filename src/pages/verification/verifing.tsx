import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "../../style/verify/verifing.scss";

const Verifing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    if (token) {
      axios
        .post("/api/auth/verify-Email", { verificationCode: token })
        .then((res) => {
          setTimeout(() => {
            navigate("/successful");
          }, 2000);
        })
        .catch((error) => {
          setTimeout(() => {
            navigate("/failed");
          }, 2000);
        });
    }
  }, []);
  return (
    <div className="body">
      <div className="spinner_field">
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #fff",
            borderTop: "4px solid #ff0d0d",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "10px",
          }}
        ></div>
        <p className="content_text">Loading...</p>
      </div>
    </div>
  );
};

export default Verifing;
