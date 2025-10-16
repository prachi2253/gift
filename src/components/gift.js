import React from "react";
import Navbar from './navbar';
import { useLocation } from 'react-router-dom';
import './gift.css';

function Gift() {
    const location = useLocation();
    const { avatar, profile } = location.state || {};
    
    const video = {
        title: "With Love From Your Loved Ones",
        description: "This video is made with love and care, just for you. Hope it brings a smile to your face and joy to your heart. Happy Birthday!",
        thumbnail: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
    };
     const trendingVideos = [
        {
            title: "About You",
            thumbnail: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=800&q=80",
            link: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
        },
        {
            title: "From me to you",
            thumbnail: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&q=80",
            link: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
        },
        {
            title: "Gallery",
            thumbnail: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&q=80",
            link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
        },
        {
            title: "Surprise",
            thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
            link: "https://www.youtube.com/watch?v=l9PxOanFjxQ"
        },
    ];

    const handleClick = () => {
        const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        window.open(videoUrl, "_blank");
    };
    const handlec = () => {
        const videoUrl = "https://www.youtube.com/watch?v=3GwjfUFyY6M";
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
                        {trendingVideos.map((vid,index)=>(
                            <div key={index} className="trending-card" onClick={() => window.open(vid.link, "_blank")}>
                                <img src={vid.thumbnail} alt={vid.title} className="trending-thumbnail" />
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
