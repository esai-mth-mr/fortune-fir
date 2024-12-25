import "@src/style/pages/getready.scss";
import getImageURL from "../utils/getImageURL";
import { useEffect, useState } from "react";
import Payment from "./payment/Payment";
// import Loading from "../common/LoadingMain";
import LoadingMain from "../common/Loading";
// import { checkAuthApi } from "../api/checkAuthApi";

function GetReady() {
    const [loading, setLoading] = useState(false);
    const [action, setAction] = useState<string>("");
    const [openPayment, setOpenPayment] = useState<boolean>(false);
    const handleOnPayment = () => {
        setOpenPayment(true);
    }
    //delete this part, this is initialization
    useEffect(()=>{
        setLoading(false);
        setAction("")
    },[])
    //
    return (
        <div className="board">
            <div className="snow">
                {Array.from({ length: 50 }).map((_, index) => {
                    const randomDelay = Math.random() * 3; // Random delay between 0 and 5 seconds
                    const randomDuration = 7 + Math.random() * 10; // Random duration between 5 and 10 seconds
                    const randomLeft = Math.random() * 100; // Random horizontal position (0% to 100%)
                    const randomSize = 5 + Math.random() * 7; // Random size between 10px and 30px

                    return (
                        <div
                            key={index}
                            className="snowflake"
                            style={{
                                animationDelay: `${randomDelay}s`,
                                animationDuration: `${randomDuration}s`,
                                left: `${randomLeft}%`,
                                width: `${randomSize}px`,
                                height: `${randomSize}px`,
                            }}
                        ></div>
                    );
                })}
            </div>
            <audio
                id="audio_player"
                src="./sounds/main_page.mp3"
                autoPlay
                loop
            ></audio>
            <div className="getready_dash">
                <div className="getready_img_field">
                    <img
                        className="getready_img"
                        src={getImageURL("./assets/backgroundImage.webp")}
                        draggable={false}
                        alt="getready_img"
                    />
                </div>
                <div className="getready_title">
                    Uncover Secrets of Luck and Fate
                </div>
                <div className="getready_content">
                    Explore Your Luck Today
                </div>
                <div className="getready_btn"
                    onClick={handleOnPayment}>
                    Get Ready
                </div>
                {loading && <LoadingMain />}
                <Payment action={action} setOpen={setOpenPayment} open={openPayment} />
            </div>

        </div>
    )
}

export default GetReady;