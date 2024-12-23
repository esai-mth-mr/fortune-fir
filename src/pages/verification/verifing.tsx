import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "../../style/verify/verifing.scss";
import Loading from "../../common/Loading";

const Verifing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    if (token) {
      axios
        .post("/api/auth/verify-Email", { verificationCode: token })
        .then(() => {
          setTimeout(() => {
            navigate("/successful");
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            navigate("/failed");
          }, 2000);
        });
    }
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default Verifing;
