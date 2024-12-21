import "@src/style/global.scss";
import "@src/style/pages/contact.scss";
import { TextField } from "@mui/material";

function Contact() {
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
            fullWidth
            variant="outlined"
            className="bg-white"
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
            rows={4}
            fullWidth
            variant="outlined"
            className="bg-white"
          />
        </div>
      </div>
      <div className="contact_button">Send</div>
    </div>
  );
}

export default Contact;
