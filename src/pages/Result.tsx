import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@src/style/global.scss";
import "@src/style/pages/main.scss";

function Result() {
  const [month, setMonth] = useState(1);
  // const [count, setCount] = useState(0);

  const [paystate, setPayed] = useState<boolean>(false);

  //metadta
  const allowdata = [
    { month: 1, story: "you are welcom1", point: 300 },
    { month: 2, story: "you are welcom2", point: 300 },
    { month: 3, story: "you are welcom3", point: 300 },
    { month: 4, story: "you are welco4", point: 300 },
    { month: 5, story: "you are welcom5", point: 300 },
    { month: 6, story: "you are welco6", point: 300 },
    { month: 7, story: "you are welcom7", point: 300 },
    { month: 8, story: "you are welcom8", point: 300 },
    { month: 9, story: "you are welcom9", point: 300 },
    { month: 10, story: "you are welcom10", point: 300 },
    { month: 11, story: "you are welcom11", point: 300 },
    { month: 12, story: "you are welcom12", point: 300 },
    { month: 13, story: "you are welcom13", point: 900 },
  ];

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

  useEffect(() => {
    setPayed(false);
  });

  return (
    <div className="board">
      <div className="board_content">
        <div className={`${month <= 12 ? `main_month` : ``}`}>
          <div className="month_title">2025</div>
          <div className="month_num">
            <h6 style={{ fontSize: "30px" }}>{months[month]!}</h6>
          </div>
        </div>
        <div className={`${month == 13 ? `totalstory` : ``}`}>
          Total<br></br>story
        </div>

        {month <= 12 ? (
          <>
            <div className={`${`result_score`}`}>
              {month <= 12 ? (
                <>
                  <div>Year:{allowdata[12].point}</div>
                  <div>Month:{allowdata[month - 1].point}</div>
                </>
              ) : (
                <>Year:{allowdata[12].point}</>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        <div className={`${month <= 12 ? `result_score` : ``}`}>
          {month <= 12 ? (
            <>
              <div>Year:{allowdata[12].point}</div>
              <div>Month:{allowdata[month - 1].point}</div>
            </>
          ) : (
            <>Year:{allowdata[12].point}</>
          )}
        </div>

        <div className={`${month == 13 ? `result_year_score` : ``}`}>
          <div>Year Point</div>
          <div>{allowdata[12].point}</div>
        </div>
        <div className="main_img_field">
          <img
            className="main_img"
            src="/src/assets/backgroundImage _1.png"
            alt="main"
            draggable="false"
          />
        </div>
        <div onClick={() => setMonth(month + 1)} className="gift_next_btn">
          {month < 13 ? "Next" : "previous"}
          <Link className="gift_finish" to="/main">
            {month == 13 ? "Finish" : ""}
          </Link>
        </div>
        <div className="result_field">
          <div
            className={`${
              paystate == false ? `result_content` : `result_content2`
            }`}
          >
            {paystate == false ? allowdata[month - 1].story! : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
