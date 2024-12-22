import { useState } from "react";
import "@src/style/global.scss";
import "@src/style/pages/contact.scss";
import { TextField } from "@mui/material";
import axios from "../utils/axios";
import toast from "react-hot-toast";

type ErrorType = {
  email?: string;
  message?: string;
};

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const validateInputs = () => {
    const newErrors: ErrorType = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message) {
      newErrors.message = "message is required!";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field being updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = () => {
    if (!validateInputs()) {
      toast.error(
        errors.email || errors.message || "All inputs must be filled."
      );
      return;
    }

    axios
      .post("api/contact/sendData", formData)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="board">
      <div className="title">Contact US</div>
      <div className="contact_img_field">
        <img
          src="/src/assets/plane.png"
          alt="plane"
          draggable="false"
          className="contact_img"
        ></img>
      </div>
      <div className="contact_form">
        <div>
          <TextField
            id="email"
            label="Email Address"
            type="email"
            name="email"
            fullWidth
            variant="outlined"
            className="bg-white"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="notify_label">
            We'll never share your email with anyone else.
          </p>
        </div>
        <div>
          <TextField
            id="message"
            label="Your Message"
            multiline
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            fullWidth
            variant="outlined"
            className="bg-white"
          />
        </div>
      </div>
      <div className="contact_button" onClick={handleSubmit}>
        Send
      </div>
    </div>
  );
}

export default Contact;
