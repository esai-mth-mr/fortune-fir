import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@src/style/global.scss";
import "@src/style/pages/main.scss";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import getImageURL from "../utils/getImageURL";
import Payment from "./payment/Payment";
import { showResultApi } from "../api/showResultApi";
import Loading from "../common/Loading";
import PredictionAndTipsComponent from "../components/PredictionAndTipsComponent";

function Result() {
  const [paystate, setPayed] = useState<boolean>(false);
  const [action, setAction] = useState<string>("");
  const [openPayment, setOpenPayment] = useState<boolean>(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //interacting database data
  const [month, setMonth] = useState(13);
  const [month_point, setMonthPoint] = useState<number>(0);
  const [year_point, setYearPoint] = useState<number>(0);
  const [desc, setDesc] = useState<string>("");

  //For the Description Fullscreen flag
  const [dFullScreen, setDFullScreen] = useState<boolean>(false);
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const test_input = `  Prediction: This is template. This is template.This is template.This is template.
  This is template.This is template.This is template.This is template.This is template.
  This is template.This is template.This is template.This is template.
  This is template.This is template.This is template.
  This is template.This is template.This is template. Tips: 1. Keep Snacks Handy: YThis is template.
            2. Double-Check Everything: This is template. 3. Laugh It Off:This is template. 4.
            Record the Quirks: This is template. 5. Stay Positive: This is template.`;

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(event.type);
    await showResult(value);
    setMonth(value);
  };

  const handleShowTotalStory = async () => {
    await showResult(13);
    setMonth(13);
  };

  const handleReround = async () => {
    setAction("preview");
    setOpenPayment(true);
  };

  //API functions
  const showResult = async (sendData: number) => {
    setLoading(true); // Start loading
    try {
      const res = await showResultApi(sendData);
      if (res.status !== 200) {
        if (res.status === 402) navigate("/getready");
        navigate("/main");
        return false;
      } else {
        setMonth(res.message.message.month);
        setMonthPoint(res.message.message.point);
        setYearPoint(res.message.message.year_point);
        setPayed(res.message.display);
        if (res.message.message.story) setDesc(res.message.message.story);
        return true;
      }
    } catch (error) {
      navigate("/main");

      return false;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    showResult(month);
  }, [month]);

  // Handle Click of the description full screen modal show
  const _handleClickFullScrenn = () => {
    setDFullScreen(!dFullScreen);
    if (paystate === false) setDFullScreen(false);
  };
  return (
    <div className="board">
      <audio
        id="audio_player"
        src="./sounds/main_page.mp3"
        autoPlay
        loop
      ></audio>
      {open == true && (
        <div className="result_modal">
          <div className="result_modal_img">
            <img
              style={{ width: "auto", height: "auto" }}
              src={getImageURL("./assets/santa-1.webp")}
              alt="main"
              draggable="false"
            />
          </div>
          <div className="result_modal_desc">
            If you click reround, all data will be deleted and you have to edit
            again.
          </div>
          <div className="result_modal_buttons">
            <div className="result_modal_button" onClick={handleReround}>
              Accept
            </div>
            <div className="result_modal_button" onClick={handleClose}>
              Cancel
            </div>
          </div>
          <img
            className="result_modal_close"
            src={getImageURL("./assets/close.webp")}
            alt="main"
            draggable="false"
            onClick={handleClose}
          />
        </div>
      )}
      {loading && <Loading />}
      <Payment action={action} setOpen={setOpenPayment} open={openPayment} />
      <div
        className="modal_description_full"
        style={
          dFullScreen
            ? { height: "100%" }
            : { height: "0px", margin: "0px", padding: "0px" }
        }
      >
        <PredictionAndTipsComponent
          input={desc}
          onZoomClick={_handleClickFullScrenn}
        />
      </div>
      <div className="board_content">
        {month <= 12 ? (
          <div className="main_month">
            <div className="month_title">2025</div>
            <div className="month_num">
              <h6 style={{ fontSize: "30px" }}>{months[month]!}</h6>
            </div>
          </div>
        ) : (
          <></>
        )}

        {month === 13 ? (
          <div className="totalstory">
            Year<br></br>Luck
          </div>
        ) : (
          <></>
        )}

        {month <= 12 ? (
          <div className="result_score">
            {month <= 12 ? (
              <>
                <div>Year:{year_point}</div>
                <div>Mon:{month_point}</div>
              </>
            ) : (
              <>Year:{year_point}</>
            )}
          </div>
        ) : (
          <></>
        )}

        {month === 13 ? (
          <div className="result_year_score">
            <div>Year Point</div>
            <div>{year_point}</div>
          </div>
        ) : (
          <></>
        )}
        <div className="main_img_field">
          <img
            className="main_img"
            src={getImageURL("./assets/backgroundImage _1.webp")}
            alt="main"
            draggable="false"
          />
        </div>
        <div className="result_pagination">
          <div className="result_page">
            <Stack style={{ width: "100%" }} spacing={1}>
              <Pagination
                sx={{ display: "flex", justifyContent: "center" }}
                onChange={handlePageChange}
                count={12}
                variant="outlined"
                boundaryCount={1}
                size="small"
              />
            </Stack>
          </div>
        </div>
        <div>
          <div
            onClick={handleShowTotalStory}
            style={{
              left: "10%",
              bottom: "12%",
              width: "30%",
              height: "30px",
            }}
            className="common_btn"
          >
            Total Story
          </div>
          <div
            onClick={handleOpen}
            // onClick={handleReround}
            style={{
              right: "10%",
              bottom: "12%",
              width: "30%",
              height: "30px",
            }}
            className="common_btn"
          >
            Reround
          </div>
        </div>
        <div
          className={`${`result_field`}`}
          style={{ height: paystate == true ? "50%" : "45%" }}
        >
          <div className={paystate ? "result_content" : "result_content2"}>
            {paystate ? (
              <>
                <PredictionAndTipsComponent
                  input={desc}
                  onZoomClick={_handleClickFullScrenn}
                />
              </>
            ) : (
              <PredictionAndTipsComponent
                input={test_input}
                onZoomClick={_handleClickFullScrenn}
              />
            )}
          </div>
        </div>
        {/* display for description */}
      </div>
    </div>
  );
}

export default Result;
