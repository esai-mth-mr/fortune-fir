import React, { useState } from "react";
import { PaymentFormData, PaymentResponse } from "./types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "../../utils/axios";
import setAuthToken from "../../utils/setAuthToken";
import EachItem from "../../common/MenuItem";
const PaymentForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<PaymentFormData>({
    pay_currency: "BTC",
  });
  ///////////////////////////
  const handleChange = (event: SelectChangeEvent) => {
    setFormData({ pay_currency: event.target.value as string });
  };
  ///////////////////////

  // State for the API response
  const [paymentResponse, setPaymentResponse] =
    useState<PaymentResponse | null>(null);
  const [error, setError] = useState<string>("");

  // Submit the form to create a payment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPaymentResponse(null);

    try {
      // Replace with your backend URL
      const response = await axios.post(
        "api/payment/crypto/create-payment",
        formData,
        setAuthToken()
      );
      console.log(response);
      setPaymentResponse(response.data); // Save the response to display to the user
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.error ||
          "Failed to create payment. Please try again."
      );
    }
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.pay_currency}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="USDC">
              <EachItem />
            </MenuItem>
            <MenuItem value="USDT">
              <EachItem />
            </MenuItem>
            <MenuItem value="USDT">
              <EachItem />
            </MenuItem>
            <MenuItem value="USDT">
              <EachItem />
            </MenuItem>
          </Select>
        </FormControl>
        <button type="submit">Create Payment</button>
      </form>

      {/* Display the response */}
      {paymentResponse && (
        <div className="payment-response">
          <p>
            <strong>Payment URL:</strong>{" "}
            <a
              href={paymentResponse.payment_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {paymentResponse.payment_url}
            </a>
          </p>
          <p>
            <strong>Pay Address:</strong> {paymentResponse.pay_address}
          </p>
        </div>
      )}
      {/* Display errors */}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PaymentForm;
