import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import "./payment.css";
import setAuthToken from "../../utils/setAuthToken";
// import CryptoBoard from "./wallet";
import axios from "../../utils/axios";
import toast from "react-hot-toast";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Payment() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  //crypto part
  //end of crypto part

  //modal part
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //end of modal part
  const handlePayPal = () => {
    axios
      .post(
        "api/payment/paypal/pay",
        {
          action: "regeneration",
        },
        setAuthToken()
      )
      .then((res) => {
        window.open(res.data.approvalUrl, "_blank");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  React.useEffect(() => {}, []);
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>PAY: $0.99</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="stripe">
              <button
                style={{
                  width: "100%",
                }}
              >
                <img
                  style={{ width: "100%", height: "30px" }}
                  src="/src/assets/stripe.svg"
                ></img>
              </button>
            </div>
            <div className="paypal">
              <button style={{ width: "100%" }} onClick={handlePayPal}>
                {" "}
                <img
                  style={{ width: "100%", height: "30px" }}
                  src="/src/assets/paypal.svg"
                  alt="PayPal Logo"
                ></img>
              </button>
            </div>
            <hr></hr>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
