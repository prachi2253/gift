import React from "react";
import Navbar from './navbar';
import { useLocation } from 'react-router-dom';
import './gift.css';

function Gift() {
    const location = useLocation();
    const { avatar, profile } = location.state || {};
    const password = location.state?.password;
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    
    const video = {
        title: "With Love From Your Loved Ones",
        description: "This video is made with love and care, just for you. Hope it brings a smile to your face and joy to your heart. Happy Birthday!",
        thumbnail: process.env.REACT_APP_GIFT_THUMBNAIL,
    };
    const Videos = [
        {
            title: "Badmosh",
            thumbnail: process.env.REACT_APP_BADMOSH,
            link: process.env.REACT_APP_BADMOSH_VIDEO
        },
        {
            title: "From me to you",
            thumbnail: process.env.REACT_APP_US_URL,
            link: process.env.REACT_APP_US_VIDEO
        },
        {
            title: "Gallery",
            thumbnail: process.env.REACT_APP_COLLAGE,
            link: process.env.REACT_APP_GALLERY_VIDEO
        },
        {
            title: "Surprise",
            thumbnail: process.env.REACT_APP_SURPRISE,
            link: process.env.REACT_APP_SURPRISE_VIDEO
        },
    ];

    const handleClick = () => {
        const videoUrl = process.env.REACT_APP_MAIN_VIDEO;
        window.open(videoUrl, "_blank");
    };
    const handlec = () => {
        const videoUrl = process.env.REACT_APP_TRAILER_VIDEO;
        window.open(videoUrl, "_blank");
    };
    return (
        <div>
            <Navbar avatar={avatar} profileName={profile} />
            <div className="gift-container">
                <div className="video-wrapper">
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="video-thumbnail"
                    />

                    <div className="video-info">
                        <div className="video-badges"><span className="n-logo">P</span> SERIES</div>
                        <h1 className="gift-title">{video.title}</h1>
                        <div className="video-meta">9.5/10 &nbsp; • &nbsp; 2h 13m &nbsp; • &nbsp; 2025</div>
                        <p className="gift-description">{video.description}</p>
                        <div className="video-actions">
                            <button className="btn-play" onClick={handleClick}> Play</button>
                            <button className="btn-trailer"onClick={handlec}>Watch Trailer</button>
                        </div>

                        

                    </div>
                </div>
                <div className="trending">
                    <h1 className="trending-head">Trending Now</h1>
                    <div className="trending-videos">
                        {Videos.map((vid,index)=>(
                            <div key={index} className="trending-card" onClick={() => window.open(vid.link, "_blank")}>
                                <img src={vid.thumbnail} alt={vid.title} className="trending-thumbnail" 
                               style={{
                                    ...(vid.title === "From me to you" && { objectPosition: "top" }),
                                    ...(vid.title === "Surprise" && { objectPosition: "right center" }),
                                }}/>
                                <div className="trending-title">{vid.title}</div>
                            </div>
                        ))}
                    </div>        
                </div>
                
            </div>
            

        </div>
    );
}

export default Gift;
