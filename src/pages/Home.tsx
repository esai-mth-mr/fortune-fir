import '@src/style/pages/home.scss';
import '@src/style/global.scss';
import { useEffect, useState } from 'react';
import { backgroundImages } from '../helper/Helper';
import { Link } from 'react-router-dom';

function Home() {
    const [currentImage, setCurrentImage] = useState<string>(backgroundImages[0]);
    const [nextImage, setNextImage] = useState<string>(backgroundImages[1]);
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const [imageKey, setImageKey] = useState<number>(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setFadeOut(true);

    //         setTimeout(() => {
    //             setImageKey((prev) => prev + 1);
    //             setNextImage(backgroundImages[(imageKey + 1) % backgroundImages.length]);
    //             setFadeOut(false);
    //         }, 2000);

    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, [imageKey]);

    return (
        <div className="board">
            <div className='img'>
                <img
                    src={currentImage}
                    alt="Current Background"
                    className={fadeOut ? 'fade-out' : 'fade-in'}
                />
                <img
                    src={nextImage}
                    alt="Next Background"
                    className={!fadeOut ? 'fade-in' : 'fade-out'}
                />
            </div>
            
            {/* <img className='title' src="src/assets/title.png" /> */}
            {/* <img className='logo' src="src/assets/santa-cap.png" />  */}
            <img className="rotating" src="src/assets/luck.png"/>
            {/* <div className="logo"><img className="" src="src/assets/santa_hat.jpg" width="50px"/></div> */}
            <div className="title">
                Fortune Fir
            </div>
            <div className='content'>
                There are so many lucky opportunities for you in the world
            </div>
            <div className="buttons">
                <Link className='getstarted' to="/signup">Get Started</Link>
                <Link className='contactus' to="/contactus">Contact Us</Link>
                <Link className='help' to="/help">Help</Link>
            </div>

        </div>
    );
}

export default Home;
