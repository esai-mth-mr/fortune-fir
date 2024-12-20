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
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <div className="spinner" style={{ marginBottom: "10px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #ccc",
            borderTop: "4px solid #007bff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Verifing;
