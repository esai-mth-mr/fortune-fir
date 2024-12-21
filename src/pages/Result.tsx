import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@src/style/global.scss";
import "@src/style/pages/main.scss";

function Result() {
  const [month, setMonth] = useState(1);

  const [paystate, setPayed] = useState<boolean>(false);

  useEffect(() => {
    setPayed(false);
  }, []);
  //metadta
  // const allowata=[
  //     {month: 1, story: "you are welcom", point: 300},
  //     {month: 2, story: "you are welcom", point: 300},
  //     {month: 3, story: "you are welcom", point: 300},
  //     {month: 4, story: "you are welcom", point: 300},
  //     {month: 5, story: "you are welcom", point: 300},
  //     {month: 6, story: "you are welcom", point: 300},
  //     {month: 7, story: "you are welcom", point: 300},
  //     {month: 8, story: "you are welcom", point: 300},
  //     {month: 9, story: "you are welcom", point: 300},
  //     {month: 10, story: "you are welcom", point: 300},
  //     {month: 11, story: "you are welcom", point: 300},
  //     {month: 12, story: "you are welcom", point: 300},
  //     {month: 13, story: "you are welcom", point: 300},
  // ]

  // const notallowdata=[
  //     {month: 1, point: 300},
  //     {month: 2, point: 300},
  //     {month: 3, point: 300},
  //     {month: 4, point: 300},
  //     {month: 5, point: 300},
  //     {month: 6, point: 300},
  //     {month: 7, point: 300},
  //     {month: 8, point: 300},
  //     {month: 9, point: 300},
  //     {month: 10, point: 300},
  //     {month: 11, point: 300},
  //     {month: 12, point: 300},
  //     {month: 13, point: 300},

  // ]

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

  return (
    <div className="board">
      <div className={`${month <= 12 ? `main_month` : ``}`}>
        <div className="month_title">2025</div>
        <div className="month_num">
          <h6 style={{ fontSize: "30px" }}>{months[month]}</h6>
        </div>
      </div>
      <div className="main_img_field">
        <img className="main_img" src="/src/assets/backgroundImage _1.png" />
      </div>
      <div onClick={() => setMonth(month + 1)} className="gift_next_btn">
        {month < 13 ? "Next" : ""}
        <Link className="gift_finish" to="/main">
          {month == 13 ? "Finish" : ""}
        </Link>
      </div>
      <div className="result_field">
        <div
          className={`${
            paystate == true ? `result_content` : `result_content2`
          }`}
        >
          {month == 1
            ? "To create a compelling description for your item, the  that aligns with its  luck status, consider the following description: Description for Beach-BallThe beach-ball is not just your average inflatable toy; it’s a vibrant orb of joy that brings sunshine whs prediction prompt."
            : "kjljkj"}
        </div>
      </div>
    </div>
  );
}

export default Result;
