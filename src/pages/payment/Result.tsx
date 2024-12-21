import { useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const payerId = queryParams.get("payerId");
  const paymentId = queryParams.get("paymentId");
  const state = queryParams.get("state");

  const fetchDataAPI = async () => {
    try {
      const res = await axios.post(
        "api/payment/paypal/success",
        {
          payerId: payerId,
          paymentId: paymentId,
          state: state,
        },
        setAuthToken()
      );

      if (res.data.error) {
        return false;
      }
      return true;
    } catch (error: any) {
      return false;
    }
  };

  useEffect(() => {
    if (!payerId || !paymentId || !state) {
      navigate("/payment/cancel");
      return;
    }

    const getFetchData = async () => {
      const result = await fetchDataAPI();

      if (!result) {
        navigate("/payment/cancel");
        return;
      }
      navigate("/payment/success");
    };

    getFetchData();
  }, [payerId, paymentId]);

  return <div>Result</div>;
};

export default Result;
