import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@src/style/global.scss";
import "@src/style/pages/main.scss";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import getImageURL from "../utils/getImageURL";
import Payment from "./payment/Payment";
import { showResultApi } from "../api/showResultApi";
import toast from "react-hot-toast";
import { checkRegenerationApi } from "../api/checkRegenerationApi";
import { upgradeRoundApi } from "../api/upgradeRoundApi";
import Loading from "../common/Loading";
import PredictionAndTipsComponent from "../components/PredictionAndTipsComponent";

function Result() {
  const [isresultOpen, setIsResultOpen] = useState<boolean>(true);
  const [paystate, setPayed] = useState<boolean>(false);
  const [action, setAction] = useState<string>("");
  const [openPayment, setOpenPayment] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  //interacting database data
  const [month, setMonth] = useState(1);
  const [month_point, setMonthPoint] = useState<number>(0);
  const [year_point, setYearPoint] = useState<number>(0);
  const [desc, setDesc] = useState<String>("");

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

  const eval_data = [
    {
      eval_state: "Extremely Good",
      eval_content:
        "Living here means you will experience success in various endeavors. Opportunities will arise, from lucrative investments to meeting inspiring individuals who can change your life for the better.",
    },
    {
      eval_state: "Very Good",
      eval_content:
        "You are likely to encounter wonderful opportunities that align with your goals, whether in business or personal projects, enhancing your sense of achievement and happiness.",
    },
    {
      eval_state: "Good",
      eval_content:
        "You may experience some positive developments in your job, such as small promotions or recognition for your efforts, contributing to a sense of stability and satisfaction.",
    },
    {
      eval_state: "Bad",
      eval_content:
        "Challenges may arise frequently, making it difficult to navigate through daily tasks and responsibilities effectively, leading to frustration and stress in your life.",
    },
    {
      eval_state: "Very Bad",
      eval_content:
        "Expect a series of unfortunate events that could derail your plans and ambitions, leading to feelings of hopelessness and discouragement in various aspects of life.",
    },
    {
      eval_state: "Extremely Bad",
      eval_content:
        "Social interactions can be highly detrimental; relationships may become toxic or nonexistent, leading to profound feelings of loneliness and disconnection from the world around you.",
    },
  ];

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
    console.log(event);
    await showResult(value);
    setMonth(value);
    setIsResultOpen(true);
  };

  const handleShowTotalStory = async () => {
    await showResult(13);
    setMonth(13);
  };

  //navigate
  const handlePreview = () => {
    if (!paystate) {
      setOpenPayment(true);
      setAction("preview");
    }
  };
  const handleRegenerate = async () => {
    setAction("regeneration");

    const result = await checkRegeneration();

    if (result) {
      navigate(
        `/main/?result_month=${
          month.toString() + "_" + (year_point - month_point).toString()
        }"`
      );

      return;
    }
  };
  const handleReround = async () => {
    if (await upgradeRound()) {
      navigate("/main");
    }
  };

  //API functions
  const showResult = async (sendData: number) => {
    setLoading(true); // Start loading
    try {
      const res = await showResultApi(sendData);
      if (res.status !== 200) {
        toast.error(res.message);
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
      toast.error("Failed to fetch data!");
      navigate("/main");

      return false;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const checkRegeneration = async () => {
    setLoading(true); // Start loading
    try {
      const res = await checkRegenerationApi(month);
      if (res.status !== 200) {
        toast.error(res.message);
        return false;
      } else {
        if (res.message.payment) {
          setPayed(true);
          return true;
        } else {
          setOpenPayment(true);
          setPayed(false);
          return false;

          // return true;
        }
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
      return false;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const upgradeRound = async () => {
    setLoading(true); // Start loading
    try {
      const res = await upgradeRoundApi();
      if (res.status !== 200) {
        toast.error(res.message);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
      return false;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  //navigate with main
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size == 1) {
      const result_month = queryParams.get("main_month");
      setMonth(parseInt(result_month!));
    } else {
      setMonth(1);
    }
  }, []);

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
      {open==true&&<div className="result_modal">
        <div className="result_modal_img">
          <img style={{width:'auto', height:'auto'}}
              src={getImageURL("./assets/santa-1.webp")}
              alt="main"
              draggable="false"
          />
        </div>
        <div className="result_modal_desc">If you click reround, all data will be deleted and you have to edit again.</div>
        <div className="result_modal_buttons">
          <div className="result_modal_button" onClick={handleReround}>Accept</div>
          <div className="result_modal_button" onClick={handleClose}>Cancel</div>
        </div>
        <img className="result_modal_close"
            src={getImageURL("./assets/close.webp")}
            alt="main"
            draggable="false"
            onClick={handleClose}
        />
      </div>}
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
          input={{ inputString: test_input }}
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
            Total<br></br>story
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
        {paystate == true ? (
          <>
            <div
              onClick={handleRegenerate}
              style={{
                left: "1%",
                bottom: "12%",
                width: "30%",
                height: "30px",
              }}
              className="common_btn"
            >
              Regenerate
            </div>
            <div
              onClick={handleShowTotalStory}
              style={{
                left: "35%",
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
                right: "1%",
                bottom: "12%",
                width: "30%",
                height: "30px",
              }}
              className="common_btn"
            >
              Reround
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => setMonth(13)}
              style={{
                left: "5%",
                bottom: "12%",
                width: "40%",
                height: "30px",
              }}
              className="common_btn"
            >
              Total Story
            </div>
            <div
              style={{
                right: "5%",
                bottom: "12%",
                width: "40%",
                height: "30px",
              }}
              className="common_btn"
              onClick={handlePreview}
            >
              View
            </div>
            <div
              onClick={handleRegenerate}
              style={{
                left: "5%",
                bottom: "18%",
                width: "40%",
                height: "30px",
              }}
              className="common_btn"
            >
              Regenerate
            </div>
            <div
              onClick={handleOpen}
              // onClick={handleReround}
              style={{
                right: "5%",
                bottom: "18%",
                width: "40%",
                height: "30px",
              }}
              className="common_btn"
            >
              Reround
            </div>
          </>
        )}
        <div
          className={`${`result_field`}`}
          style={{ height: paystate == true ? "50%" : "45%" }}
        >
          <div className={paystate ? "result_content" : "result_content2"}>
            {paystate ? (
              <PredictionAndTipsComponent
                input={{ inputString: desc.toString() }}
                onZoomClick={_handleClickFullScrenn}
              />
            ) : (
              <PredictionAndTipsComponent
                input={{ inputString: test_input }}
                onZoomClick={_handleClickFullScrenn}
              />
            )}
          </div>
        </div>
        {/* display for description */}
        {paystate==false&&<div
          className={`${
            isresultOpen == true ? `result_state_desc` : `result_state_desc1`
          }`}
        >
          <div className="result_state_desc_title">
            {month_point >= 1400 && month_point <= 2100
              ? eval_data[0].eval_state
              : ""}
            {month_point >= 700 && month_point < 1400
              ? eval_data[1].eval_state
              : ""}
            {month_point >= 0 && month_point < 700
              ? eval_data[2].eval_state
              : ""}
            {month_point >= -700 && month_point < 0
              ? eval_data[3].eval_state
              : ""}
            {month_point >= -1400 && month_point < -700
              ? eval_data[4].eval_state
              : ""}
            {month_point >= -2100 && month_point < -1400
              ? eval_data[5].eval_state
              : ""}
          </div>
          <div className="result_state_desc_desc">
            {month_point >= 1400 && month_point <= 2100
              ? eval_data[0].eval_content
              : ""}
            {month_point >= 700 && month_point < 1400
              ? eval_data[1].eval_content
              : ""}
            {month_point >= 0 && month_point < 700
              ? eval_data[2].eval_content
              : ""}
            {month_point >= -700 && month_point < 0
              ? eval_data[3].eval_content
              : ""}
            {month_point >= -1400 && month_point < -700
              ? eval_data[4].eval_content
              : ""}
            {month_point >= -2100 && month_point < -1400
              ? eval_data[5].eval_content
              : ""}
          </div>

          <img
            onClick={() => setIsResultOpen(false)}
            className="result_close"
            src={getImageURL("./assets/close.webp")}
            draggable={false}
            alt="result_close"
          />
          <img
            className="result_santa"
            src={getImageURL("./assets/santa-1.webp")}
            draggable={false}
            alt="result_santa"
          />

          {month_point >= 1400 && month_point <= 2100 ? (
            <img
              className="result_anim_luck"
              src={getImageURL("./assets/exe_good.webp")}
              draggable={false}
              alt="result_anim"
            />
          ) : (
            ""
          )}
          {month_point >= 700 && month_point < 1400 ? (
            <img
              className="result_anim_luck"
              src={getImageURL("./assets/very_good.webp")}
              draggable={false}
              alt="result_anim"
            />
          ) : (
            ""
          )}
          {month_point >= 0 && month_point < 700 ? (
            <img
              className="result_anim_luck"
              src={getImageURL("./assets/good.webp")}
              draggable={false}
              alt="result_anim"
            />
          ) : (
            ""
          )}
          {month_point >= -700 && month_point < 0 ? (
            <img
              className="result_anim_luck"
              src={getImageURL("./assets/bad.webp")}
              draggable={false}
              alt="result_anim"
            />
          ) : (
            ""
          )}
          {month_point >= -1400 && month_point < -700 ? (
            <img
              className="result_anim_luck"
              src={getImageURL("./assets/very_bad.webp")}
              draggable={false}
              alt="result_anim"
            />
          ) : (
            ""
          )}
          {month_point >= -2100 && month_point < -1400 ? (
            <img
              className="result_anim_luck"
              src={getImageURL("./assets/exe_bad.webp")}
              draggable={false}
              alt="result_anim"
            />
          ) : (
            ""
          )}
        </div>}
      </div>
    </div>
  );
}

export default Result;
