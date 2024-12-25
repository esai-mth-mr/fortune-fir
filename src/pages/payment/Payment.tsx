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
import Loading from "../../common/Loading";
import { STRIPE_PUB_KEY } from "../../constant";

const stripePromise = loadStripe(STRIPE_PUB_KEY);

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
  const [loading, setLoading] = React.useState(false);
  //crypto part
  //end of crypto part

  //modal part
  React.useEffect(() => {
    props.setOpen(props.open);
  }, []);

  const handleClose = () => {
    //setOpen(false);
    props.setOpen(false);
  };
  //end of modal part

  //paypayl part
  const handlePayPal = async () => {
    setLoading(true);
    handleClose();
    await axios
      .post(
        "api/payment/paypal/pay",
        {
          action: props.action,
        },
        setAuthToken()
      )
      .then((res) => {
        setLoading(false);
        window.open(res.data.approvalUrl, "_blank");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };
  //end of paypayl part

  //stripe part
  const handleStripe = async () => {
    setLoading(true);
    handleClose();
    await axios
      .post(
        "api/payment/stripe/session-initiate",
        { action: props.action },
        setAuthToken()
      )
      .then(async (res) => {
        if (res.status === 200) {
          const stripe = await stripePromise;
          const sessionId = res.data.sessionId;
          if (!stripe) {
            toast.error("Failed to load stripe");
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
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.error === true)
          toast.error(error.response.data.message);
        else toast.success(error.response.data.message);
      });
  };
  //end of stripe part

  React.useEffect(() => {
    //setAction(props.action);
  }, []);
  return (
    <div>
      {loading && <Loading />}
      <Dialog
        open={props.open}
        maxWidth="xl"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
            width: "280px",
            height: "470px",
            backgroundColor: "#f5f5f5",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px !important",
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
            fontFamily: "Poppins",
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
              fontFamily: "Poppins",
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
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "30px",
                  }}
                  src={getImageURL("./assets/stripe.webp")}
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
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "30px",
                  }}
                  src={getImageURL("./assets/paypal.webp")}
                  alt="PayPal Logo"
                  draggable="false"
                ></img>
              </button>
            </div>
            <hr style={{ opacity: 20, zIndex: -1 }}></hr>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ zIndex: 1 }}>
          <Button onClick={handleClose} sx={{ fontFamily: "Poppins" }}>
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
            src={getImageURL("./assets/santa-1.webp")}
          ></img>
        </div>
      </Dialog>
    </div>
  );
}
