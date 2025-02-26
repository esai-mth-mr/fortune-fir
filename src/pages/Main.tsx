import "@src/style/global.scss";
import "@src/style/pages/main.scss";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./modal/modal";
import "animate.css";
import { getRandomNum } from "../helper/Helper";
import { getInitDataApi } from "../api/getInitDataApi";
import { saveMonthStoryApi } from "../api/saveMonthStoryApi";
import toast from "react-hot-toast";
import getImageURL from "../utils/getImageURL";
import Loading from "../common/Loading";
import LoadingMain from "../common/LoadingMain";
import LoadingResult from "../common/LoadingResult";
import { saveYearStoryApi } from "../api/saveYearStoryApi";

import {
  IInitDataType,
  IModalDataType,
  ISaveSendDataType,
  ISaveSendYearDataType,
} from "../types";
import { shuffleData } from "../utils/randomArrangeArray";
import { ERRORS } from "../constant";
import DescriptionModal from "./modal/descriptionModal";
import PredictionAndTipsComponent from "../components/PredictionAndTipsComponent";

function Main() {
  //========================Declare variables================================

  const [month, setMonth] = useState(1);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

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

  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Type the array
  const [gifts, setGifts] = useState<number[]>([]); // Make sure gifts holds an array of numbers

  const allowopen: boolean[] = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  const [AllowOpen, setAllowOpen] = useState<boolean[]>([...allowopen]);

  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingResult, setLoadingResult] = useState(false);
  const [loadingMain, setLoadingMain] = useState(false);

  const [yearpoint, setyearpoint] = useState<number>(0);
  const [monthpoint, setmonthpoint] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);
  const [modalData, setModalData] = useState<IModalDataType>({
    name: "",
    desc: "",
  });

  const [yeardisplaypoint, setDisplayYear] = useState<number>(0);
  const [displaypoint, setDisplaypoint] = useState<number>(0);

  //for animation
  const [countnum, setCountNum] = useState<boolean>(false);
  //allow moving to next
  const [allownext, setAllowNext] = useState<boolean>(false);

  const [desc, setDesc] = useState<string>("");
  const [descModal, setDescModal] = useState(false);

  //For the Description Fullscreen flag
  const [dFullScreen, setDFullScreen] = useState<boolean>(false);

  // =============================API functions===================================

  const getInitData = useCallback(async () => {
    setLoading(true); // Start loading
    try {
      const res = await getInitDataApi();
      if (res.status !== 200) {
        if (res.status === 402) navigate("/getready");

        if (res.message === ERRORS.getDataError) {
          navigate("/result");
          return;
        } else {
          if (res.message === ERRORS.accountNotFound) navigate("/login");
          if (res.message === ERRORS.activateAccountRequired)
            navigate("/required");
        }
      } else {
        setData(shuffleData(res.message.data));
        setGifts(shuffleArray([...array]));
        setMonth(res.message.month);
        setDisplayYear(res.message.year_point);
        setyearpoint(res.message.year_point);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later!");
    } finally {
      setLoading(false); // Stop loading
    }
  }, []);

  const saveMonthStory = async (sendData: ISaveSendDataType) => {
    setLoadingResult(true); // Start loading
    try {
      const res = await saveMonthStoryApi(sendData);
      if (res.status !== 200) {
        if (res.status === 402) navigate("/getready");
        return false;
      } else {
        setDesc(res.message);
        setIsOpen(false);
        setDescModal(true);
        return true;
      }
    } catch (error) {
      return false;
    } finally {
      setLoadingResult(false); // Stop loading
    }
  };

  const saveYearStory = async (sendData: ISaveSendYearDataType) => {
    setLoadingMain(true); // Start loading
    try {
      const res = await saveYearStoryApi(sendData);
      if (res.status !== 200) {
        if (res.status === 402) navigate("/getready");
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return false;
    } finally {
      setLoadingMain(false); // Stop loading
    }
  };

  //======================================hook==================================

  useEffect(() => {
    if (count % 1 === 0) {
      setGifts(shuffleArray([...array]));
    }
  }, [count]);

  //display for animation
  useEffect(() => {
    if (point != 0) {
      setTimeout(() => {
        setDisplaypoint(monthpoint);
      }, 1500);
      setTimeout(() => {
        setmonthpoint(monthpoint + point);
      }, 1500);

      setTimeout(() => {
        setDisplayYear(yeardisplaypoint);
      }, 1500);
      setTimeout(() => {
        setyearpoint(yeardisplaypoint + point);
      }, 1500);
    }
  }, [point]);

  //display animate number for specific duration
  useEffect(() => {
    if (point > 0 && point != 0) {
      if (displaypoint != monthpoint) {
        setTimeout(() => {
          setDisplaypoint(displaypoint + 1);
        }, 2);
      }

      if (yeardisplaypoint != yearpoint) {
        setTimeout(() => {
          setDisplayYear(yeardisplaypoint + 1);
        }, 2);
      }
    } else if (point < 0 && point != 0) {
      if (displaypoint != monthpoint) {
        setTimeout(() => {
          setDisplaypoint(displaypoint - 1);
        }, 2);
      }

      if (yeardisplaypoint != yearpoint) {
        setTimeout(() => {
          setDisplayYear(yeardisplaypoint - 1);
        }, 2);
      }
    }
  });

  useEffect(() => {
    if (count == 1) {
      setTimeout(() => {
        setAllowNext(true);
      }, 1000);
    }
    if (count == 0) {
      setAllowNext(false);
    }
  }, [count]);

  useEffect(() => {
    getInitData();
  }, []);
  //===============================custom functions===================================

  const shuffleArray = (array: number[]): number[] => {
    return array.sort(() => 0.5 - Math.random());
  };

  const getpoint = (lucklevel: string) => {
    switch (lucklevel) {
      case "extremely good":
        return Math.ceil(getRandomNum(200, 300)!);
      case "very good":
        return Math.ceil(getRandomNum(100, 200)!);
      case "good":
        return Math.ceil(getRandomNum(0, 100)!);
      case "bad":
        return Math.ceil(getRandomNum(-100, 0)!);
      case "very bad":
        return Math.ceil(getRandomNum(-200, -100)!);
      case "extremely bad":
        return Math.ceil(getRandomNum(-300, -200)!);
    }
  };

  //==========================handle data===============================
  const handleItemClick = async (
    index: number,
    luck: string,
    name: string,
    description: string,
    assetIndex: number
  ) => {
    if (AllowOpen[index] && count < 1) {
      setCount((prev) => prev + 1);
      setAllowOpen((prev) =>
        prev.map((isOpen, i) => (i === index ? false : isOpen))
      );
      setIsOpen(true);

      const updatedpoint = getpoint(luck);

      setPoint(updatedpoint!);
      setModalData({
        name: name,
        desc: description,
      });
      setCountNum((prev) => !prev);

      const sendData = {
        point: monthpoint,
        total_point: yearpoint + updatedpoint!,
        assets: [assetIndex],
        month: month,
      };

      await saveMonthStory(sendData);
    }
  };

  const _handleClickFullScrenn = () => {
    setDFullScreen(!dFullScreen);
  };

  const handleNextButton = async () => {
    if (allownext && count === 1) {
      if (month === 12) {
        const sendYearData = {
          total_point: yearpoint,
        };
        const result_year = await saveYearStory(sendYearData);
        if (result_year) {
          navigate("/result");
          return;
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }

      setMonth(month + 1);

      getInitData();

      setCount(0);
      setAllowOpen(AllowOpen.map(() => true));
      setmonthpoint(0);
      setPoint(0);
      setDisplaypoint(0);
      setCountNum(false);
      // setyearpoint(0);
      setDescModal(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="board">
      {loading && <Loading />}
      {loadingResult && <LoadingResult />}
      {loadingMain && <LoadingMain />}

      {/* Main Content */}
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
      <div
        className={loading ? "disabled-content board_content" : "board_content"}
      >
        <audio src="./sounds/main_page.mp3" autoPlay loop></audio>
        <div className="main_month">
          <div className="month_title">2025</div>
          <div className="month_num">
            <h6 style={{ fontSize: "30px" }}>{months[month]}</h6>
          </div>
        </div>
        <div className="score">
          <div className="score_year">Year:{yeardisplaypoint}</div>
          <div className={`${`score_content`}`}>Month:{displaypoint!}</div>
          <div className={`${countnum == false ? `available` : `available1`}`}>
            <img
              className="modal_count_img"
              src={getImageURL("./assets/svg/Gifts/gift_1.webp")}
              draggable={false}
              alt="modal_gift"
              width={22}
            />
            <div
              style={{
                width: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              x
            </div>
            <div style={{ fontSize: "16px" }}>{1 - count}</div>
          </div>
        </div>
        <div className="main_img_field">
          <img
            className="main_img"
            src={getImageURL("./assets/backgroundImage _1.webp")}
            draggable={false}
            alt="main_img"
          />
        </div>
        <div className="gifts_field">
          <div className="gift-field-child">
            <div className="gifts-field-child-left">
              {data.map((item: IInitDataType, index) =>
                index % 2 === 0 ? (
                  <img
                    key={item._id} // Use a unique identifier as the key
                    className="gift_l"
                    draggable={false}
                    alt={`gift_${index}`}
                    src={
                      AllowOpen[index]
                        ? getImageURL(
                            `./assets/svg/Gifts/gift_${gifts[index]}.webp`
                          )
                        : getImageURL(`./assets/openbox.webp`)
                    }
                    onClick={() => {
                      handleItemClick(
                        index,
                        item.luck,
                        item.name,
                        item.description,
                        item.index
                      );
                    }}
                  />
                ) : null
              )}
            </div>
            <div className="gifts-field-child-right">
              {data.map(
                (item: IInitDataType, index) =>
                  index % 2 === 1 ? (
                    <img
                      key={item._id} // Use a unique key
                      className="gift_r" // Simplified className
                      draggable={false}
                      alt={`gift_${index}`} // Updated alt for better readability
                      src={
                        AllowOpen[index]
                          ? getImageURL(
                              `./assets/svg/Gifts/gift_${gifts[index]}.webp`
                            )
                          : getImageURL(`./assets/openbox.webp`)
                      }
                      onClick={() => {
                        handleItemClick(
                          index,
                          item.luck,
                          item.name,
                          item.description,
                          item.index
                        );
                      }}
                    />
                  ) : null // Return null instead of <></> for unused elements
              )}
            </div>
          </div>
        </div>
        {isOpen && <Modal score={point} modalData={modalData} />}
        {descModal && (
          <DescriptionModal
            desc={desc}
            onZoomClick={_handleClickFullScrenn}
            onNextClick={handleNextButton}
          />
        )}
        {/* Render the modal conditionally */}
        <div
          // onClick={handleNextButton}
          // style={{
          //   backgroundColor: !isEdit ? (count < 1 ? "#f5f5f5" : "red") : "red",
          //   borderColor: !isEdit ? (count < 1 ? "#c7c7c7" : "red") : "white",
          //   color: !isEdit ? (count < 1 ? "#c7c7c7" : "white") : "white",
          // }}
          // className={`${!isEdit ? "gift_next_btn" : "edit_btn"}`}
          style={{ display: "none" }}
        >
          {month < 12 ? "Next" : ""}
          {/* {
            !isEdit &&
              month === 12 &&
              // <div className="gift_finish">
              "Finish"
            // </div>
          } */}
        </div>
      </div>
    </div>
  );
}

export default Main;
