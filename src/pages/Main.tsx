import "@src/style/global.scss";
import "@src/style/pages/main.scss";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Modal from "./modal/modal";
import "animate.css";
import { getRandomNum } from "../helper/Helper";
import { getInitDataApi } from "../api/getInitDataApi";
import toast from "react-hot-toast";
import getImageURL from "../utils/getImageURL";
import Loading from "../common/Loading";

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

function Main() {
  const [month, setMonth] = useState(1);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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

  const getInitData = useCallback(async () => {
    setLoading(true); // Start loading
    try {
      const res = await getInitDataApi();
      if (res.status !== 200) {
        toast.error(res.message);
      } else {
        setData(res.message.data);
        console.log(res.message.data);
      }
    } catch (error) {
      toast.error("Failed to fetch data!");
    } finally {
      setLoading(false); // Stop loading
    }
  }, []);

  useEffect(() => {
    if (count % 7 === 0) {
      setGifts(shuffleArray([...array]));
    }
  }, [count]);

  useEffect(() => {
    getInitData();
  }, [getInitData]);

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

  //display for animation
  useEffect(() => {
    if (point != 0) {
      setTimeout(() => {
        setDisplaypoint(monthpoint);
      }, 2500);
      setTimeout(() => {
        setmonthpoint(monthpoint + point);
      }, 2600);

      setTimeout(() => {
        setDisplayYear(yeardisplaypoint);
      }, 2500);
      setTimeout(() => {
        setyearpoint(yeardisplaypoint + point);
      }, 2600);
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
      }, 100);
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
    } else {
      setMonth(1);
      setEdit(false);
    }
  }, []);

  return (
    <div className="board">
      {/* Loading Overlay */}
      {/* {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )} */}

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
              src={getImageURL("./assets/svg/Gifts/gift_1.svg")}
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
            src={getImageURL("./assets/backgroundImage _1.png")}
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
                            `./assets/svg/Gifts/gift_${gifts[index]}.svg`
                          )
                        : getImageURL(`./assets/openbox.png`)
                    }
                    onClick={() => {
                      if (AllowOpen[index] && count < 7) {
                        setCount((prev) => prev + 1);
                        setAllowOpen((prev) =>
                          prev.map((isOpen, i) =>
                            i === index ? false : isOpen
                          )
                        );
                        setIsOpen(true);
                        setPoint(getpoint(item.luck)!);
                        setModalData({
                          name: item.name,
                          desc: item.description,
                        });
                        setCountNum((prev) => !prev);
                      }
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
                              `./assets/svg/Gifts/gift_${gifts[index]}.svg`
                            )
                          : getImageURL(`./assets/openbox.png`)
                      }
                      onClick={() => {
                        if (AllowOpen[index] && count < 7) {
                          setCount((prev) => prev + 1);
                          setAllowOpen((prev) =>
                            prev.map((isOpen, i) =>
                              i === index ? false : isOpen
                            )
                          );
                          setIsOpen(true);
                          setPoint(getpoint(item.luck)!);
                          setCountNum((prev) => !prev);
                        }
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
          onClick={() => {
            isEdit == false &&
              allownext == true &&
              month != 12 &&
              count == 7 &&
              setMonth(month + 1);
            isEdit == false &&
              allownext == true &&
              month != 12 &&
              count == 7 &&
              setCount(0);
            isEdit == false &&
              allownext == true &&
              count == 7 &&
              setAllowOpen(
                AllowOpen.map(() => {
                  return true;
                })
              );
            isEdit == false &&
              allownext == true &&
              count == 7 &&
              setmonthpoint(0);
            isEdit == false && allownext == true && count == 7 && setPoint(0);
            isEdit == false &&
              allownext == true &&
              count == 7 &&
              setDisplaypoint(0);
            isEdit == false &&
              allownext == true &&
              count == 7 &&
              setCountNum(false);
            isEdit == false &&
              allownext == true &&
              count == 7 &&
              setyearpoint(0);
            isEdit == true && handleRegenerate();
          }}
          style={{
            backgroundColor:
              isEdit == false ? (count < 7 ? "#f5f5f5" : "red") : "red",
            borderColor:
              isEdit == false ? (count < 7 ? "#c7c7c7" : "red") : "white",
            color:
              isEdit == false ? (count < 7 ? "#c7c7c7" : "white") : "white",
          }}
          className={`${isEdit == false ? `gift_next_btn` : `edit_btn`}`}
        >
          {isEdit == false ? (month < 12 ? "Next" : "") : "View Result"}

          {isEdit == false ? (
            <Link className="gift_finish" to="/result">
              {isEdit == false ? (month == 12 ? "Finish" : "") : ""}
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
