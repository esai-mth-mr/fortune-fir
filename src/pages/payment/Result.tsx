import { useEffect, useState } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";
import getImageURL from "../../utils/getImageURL";
const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    if (!payerId || !paymentId || !state) {
      // axios
      //   .post("/api/stripe/session-complete", {}, setAuthToken())
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((err) => console.error(err));
      navigate("/payment/cancel");
      return;
    }

    const getFetchData = async () => {
      const result = await fetchDataAPI();

      if (!result) {
        setIsLoading(false);
        navigate("/payment/cancel");
        return;
      }
      setIsLoading(false);
      navigate("/payment/success");
    };

    getFetchData();
  }, [payerId, paymentId]);

  return (
    <div>
      {isLoading && <Loading />}
      <div className="board">
        <div className="hero_img_field">
          <img
            className="hero_imgage"
            src={getImageURL("./assets/santa2.webp")}
            // src="/src/assets/santa2.webp"
            draggable={false}
            alt="hero_imgage"
          />
        </div>
        <div
          className="gradient-text"
          style={{
            fontFamily: "Poppins-boldItalic",
            fontSize: "40px",
            marginTop: "100px",
          }}
        >
          2025 LUCK!
        </div>
      </div>
    </div>
  );
};

export default Result;
