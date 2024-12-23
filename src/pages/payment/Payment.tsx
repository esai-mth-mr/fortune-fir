import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import "./payment.css";
import setAuthToken from "../../utils/setAuthToken";
// import CryptoBoard from "./wallet";
import axios from "../../utils/axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import getImageURL from "../../utils/getImageURL";

const stripePromise = loadStripe(
  "pk_test_51QXkg1A9YfpPkxIlDXG9iEGhAWo0bEaxfukGsLYfyzBkcMV4jipebVVh3XnfKjj9YZjL3uv8uiexgIkwgoWTcTqu00tZhUIpUx"
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Payment(props: {
  action: string;
  open: boolean;
  setOpen: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState("");
  //crypto part
  //end of crypto part

  //modal part
  React.useEffect(() => {
    console.log("heeeeeee");
    console.log(props.open);
    setOpen(props.open);
  }, []);

  const handleClose = () => {
    //setOpen(false);
    props.setOpen(false);
  };
  //end of modal part

  //paypayl part
  const handlePayPal = () => {
    axios
      .post(
        "api/payment/paypal/pay",
        {
          action: props.action,
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
  //end of paypayl part

  //stripe part
  const handleStripe = () => {
    axios
      .post(
        "api/payment/stripe/session-initiate",
        { action: action },
        setAuthToken()
      )
      .then(async (res) => {
        if (res.status === 200) {
          const stripe = await stripePromise;
          const sessionId = res.data.sessionId;
          if (!stripe) {
            toast.error("failed to load stripe");
            return;
          }
          if (!sessionId) {
            toast.error("sessionId not found");
            return;
          }
          const { error } = await stripe?.redirectToCheckout({ sessionId });
          if (error) {
            toast.error("Error redirecting to Stripe");
          }
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        //toast.error(error.response.data.message);
      });
  };
  //end of stripe part

  React.useEffect(() => {
    console.log(props.action);
    setAction("regeneration");
  }, []);
  return (
    <Dialog
      open={props.open}
      maxWidth="xl"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "10px",
          width: "280px",
          height: "470px",
        },
      }}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {/* Ribbon */}
      <Box
        sx={{
          position: "absolute",
          top: "68px", // Adjust to fine-tune the position
          left: "10px", // Adjust to fine-tune the position
          // backgroundColor: "red",
          color: "white",
          padding: "5px 30px",
          fontSize: "14px",
          fontFamily: "Poppins-bold",
          transform: "translate(-29.3%) rotate(-45deg)",
          transformOrigin: "top left",
          zIndex: 2, // Ensure it is above other content
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)", // Optional: Add shadow for a better
          background:
            "linear-gradient(to right, rgb(28, 216, 210) 0%, rgb(147, 237, 199) 51%, rgb(28, 216, 210) 100%)",
          backgroundSize: "200% auto",
        }}
      >
        Christmas!
      </Box>
      <DialogTitle>
        <div
          style={{
            //fontFamily: "PlayfairDisplay-Bold",
            fontWeight: "900",
            fontSize: "40px",
            fontFamily: "Poppins-bold",
          }}
          className="gradient-text"
        >
          $0.99
        </div>
      </DialogTitle>
      <DialogContent sx={{ zIndex: 1 }}>
        <DialogContentText
          id="alert-dialog-slide-description"
          sx={{
            marginTop: "10px",
          }}
        >
          <div className="stripe">
            <button
              style={{
                width: "100%",
              }}
              className="stripeBtn"
              onClick={handleStripe}
            >
              <img
                style={{ width: "100%", height: "30px" }}
                src={getImageURL("./assets/stripe.svg")}
              ></img>
            </button>
          </div>
          <div className="paypal">
            <button
              style={{ width: "100%" }}
              onClick={handlePayPal}
              className="paypalBtn"
            >
              <img
                style={{ width: "100%", height: "30px" }}
                src={getImageURL("./assets/paypal.svg")}
                alt="PayPal Logo"
                draggable="false"
              ></img>
            </button>
          </div>
          <hr style={{ opacity: 20, zIndex: -1 }}></hr>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ zIndex: 1 }}>
        <Button onClick={handleClose} sx={{ fontFamily: "Poppins-bold" }}>
          Close
        </Button>
      </DialogActions>
      <div
        style={{
          position: "absolute",
          zIndex: 0,
          bottom: "0",
          right: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{ objectFit: "cover" }}
          src={getImageURL("./assets/santa.png")}
        ></img>
      </div>
    </Dialog>
  );
}
