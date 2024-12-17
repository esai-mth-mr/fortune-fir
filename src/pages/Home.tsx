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
            {/* <div className='img'>
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
            </div> */}
            <div className='header'>
                <img className="landing" src="src/assets/landing.jpg"/>
            </div>
            <div className='buttons'>
                <Link className='start' to="/signup">Get Started</Link>
                <Link className='start' to="/signup">Contact Us</Link>
                <Link className='start' to="/signup">Help</Link>
            </div>

        </div>
    );
}

export default Home;
