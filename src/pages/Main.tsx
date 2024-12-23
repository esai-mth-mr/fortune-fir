import "@src/style/global.scss";
import "@src/style/pages/main.scss";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "./modal/modal";
import "animate.css";
import { getRandomNum } from "../helper/Helper";
import { getInitDataApi } from "../api/getInitDataApi";
import { saveMonthStoryApi } from "../api/saveMonthStoryApi";
import toast from "react-hot-toast";
import getImageURL from "../utils/getImageURL";
import Loading from "../common/Loading";
import { saveYearStoryApi } from "../api/saveYearStoryApi";
import { getRegenerationAssetsApi } from "../api/getRegenerationAssetsApi";
import { GETDATA_ERROR } from "../constant";

interface DataType {
  _id: string;
  name: string;
  luck: string;
  index: number;
  description: string;
  url: string;
}

interface ModalDataType {
  name: string;
  desc: string;
}

interface SaveSendDataType {
  point: number;
  total_point: number;
  assets: number[];
  month: number;
}

interface SaveSendYearDataType {
  total_point: number;
}

function Main() {
  const [month, setMonth] = useState(1);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [sendArray, setSendArray] = useState<number[]>([]);

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

  const [isEdit, setEdit] = useState<boolean>(false);

  //navigate
  const handleRegenerate = () => {
    navigate(`/result/?main_month=${month}`);
  };

  const [loading, setLoading] = useState(false);

  const shuffleArray = (array: number[]): number[] => {
    return array.sort(() => 0.5 - Math.random());
  };

  // API functions
  const getInitData = useCallback(async () => {
    setLoading(true); // Start loading
    try {
      const res = await getInitDataApi();
      if (res.status !== 200) {
        if (res.message === GETDATA_ERROR) {
          navigate("/result");
          return;
        }
        toast.error(res.message);
      } else {
        setData(res.message.data);
        setMonth(res.message.month);
        setDisplayYear(res.message.year_point);
        setyearpoint(res.message.year_point);
        console.log(res.message);
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
    } finally {
      setLoading(false); // Stop loading
    }
  }, []);

  const getRegenerateData = async (data: any) => {
    setLoading(true); // Start loading
    try {
      const res = await getRegenerationAssetsApi(data);
      if (res.status !== 200) {
        toast.error(res.message);
      } else {
        setData(res.message.data);
        setMonth(res.message.month);
        setDisplayYear(res.message.year_point);
        setyearpoint(res.message.year_point);
        console.log(res.message);
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const saveMonthStory = async (sendData: SaveSendDataType) => {
    setLoading(true); // Start loading
    try {
      const res = await saveMonthStoryApi(sendData);
      if (res.status !== 200) {
        toast.error(res.message);
        return false;
      } else {
        console.log(res.message);
        return true;
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
      return false;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const saveYearStory = async (sendData: SaveSendYearDataType) => {
    setLoading(true); // Start loading
    try {
      const res = await saveYearStoryApi(sendData);
      if (res.status !== 200) {
        toast.error(res.message);
        return false;
      } else {
        console.log(res.message);
        return true;
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
      return false;
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (count % 7 === 0) {
      setGifts(shuffleArray([...array]));
    }
  }, [count]);

  // useEffect(() => {
  //   getInitData();
  // }, [getInitData]);

  const [yearpoint, setyearpoint] = useState<number>(0);
  const [monthpoint, setmonthpoint] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);
  const [modalData, setModalData] = useState<ModalDataType>({
    name: "",
    desc: "",
  });

  const [yeardisplaypoint, setDisplayYear] = useState<number>(0);
  const [displaypoint, setDisplaypoint] = useState<number>(0);

  //for animation
  const [countnum, setCountNum] = useState<boolean>(false);
  //allow moving to next
  const [allownext, setAllowNext] = useState<boolean>(false);

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

  const handleItemClick = (
    index: number,
    luck: string,
    name: string,
    description: string,
    assetIndex: number
  ) => {
    if (AllowOpen[index] && count < 7) {
      setCount((prev) => prev + 1);
      setAllowOpen((prev) =>
        prev.map((isOpen, i) => (i === index ? false : isOpen))
      );
      setIsOpen(true);
      setPoint(getpoint(luck)!);
      setModalData({
        name: name,
        desc: description,
      });
      setCountNum((prev) => !prev);
      setSendArray((prev) => [...prev, assetIndex]);
    }
  };

  const handleNextButton = async () => {
    if (!isEdit && allownext && count === 7) {
      const sendData = {
        point: monthpoint,
        total_point: yearpoint,
        assets: sendArray,
        month: month,
      };

      const result = await saveMonthStory(sendData);

      if (result) {
        if (month !== 12) {
          setMonth(month + 1);
        } else {
          const sendYearData = {
            total_point: yearpoint,
          };
          const result_year = await saveYearStory(sendYearData);
          if (result_year) {
            navigate("/result");
            return;
          } else {
            toast.error("Failed save year story. Please try agin.");
          }
        }
      }

      getInitData();

      setCount(0);
      setAllowOpen(AllowOpen.map(() => true));
      setmonthpoint(0);
      setPoint(0);
      setDisplaypoint(0);
      setCountNum(false);
      // setyearpoint(0);
      setSendArray([]);
    }

    if (isEdit && count === 7) {
      handleRegenerate();
    }
  };

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
    if (count == 7) {
      setTimeout(() => {
        setAllowNext(true);
      }, 1000);
    }
    if (count == 0) {
      setAllowNext(false);
    }
  }, [count]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.size == 1) {
      let result_month = queryParams.get("result_month");
      const result_data = [...result_month?.split("_")!];
      console.log("result_data", result_data[0]);
      console.log("result_data_1", result_data[1]);
      if (result_month) {
        setMonth(parseInt(result_data[0]));
        setDisplayYear(parseInt(result_data[1]));
        setyearpoint(parseInt(result_data[1]));
      }
      setEdit(true);

      getRegenerateData(parseInt(result_month!));
    } else {
      setEdit(false);
      getInitData();
    }
  }, []);

  useEffect(() => {
    const audio = document.getElementById("main-audio") as HTMLAudioElement;
    if (audio) {
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="board">
      {loading && <Loading />}
      {/* Main Content */}
      <div
        className={loading ? "disabled-content board_content" : "board_content"}
      >
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
            <div style={{ fontSize: "16px" }}>{7 - count}</div>
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
              {data.map((item: DataType, index) =>
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
                (item: DataType, index) =>
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
        {isOpen && (
          <Modal setIsOpen={setIsOpen} score={point} modalData={modalData} />
        )}{" "}
        {/* Render the modal conditionally */}
        <div
          onClick={handleNextButton}
          style={{
            backgroundColor: !isEdit ? (count < 7 ? "#f5f5f5" : "red") : "red",
            borderColor: !isEdit ? (count < 7 ? "#c7c7c7" : "red") : "white",
            color: !isEdit ? (count < 7 ? "#c7c7c7" : "white") : "white",
          }}
          className={`${!isEdit ? "gift_next_btn" : "edit_btn"}`}
        >
          {!isEdit ? (month < 12 ? "Next" : "") : "Submit"}
          {
            !isEdit &&
              month === 12 &&
              // <div className="gift_finish">
              "Finish"
            // </div>
          }
        </div>
        {isEdit && (
          <div className="cancel_btn" onClick={handleRegenerate}>
            Cancel
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
