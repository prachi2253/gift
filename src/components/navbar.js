
import React from 'react';


function Navbar({avatar , profileName}) {
    const userAvatar = avatar;
    const userName = profileName;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <a className="navbar-brand" href="#"style={{ color: "#e50914", fontWeight: "bold" }}>BRAINROT</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item"><a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); window.open(process.env.REACT_APP_US_VIDEO,'_blank')}}>From Prachi</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); window.open(process.env.REACT_APP_BADMOSH_VIDEO,'_blank')}}>Badmosh</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); window.open(process.env.REACT_APP_GALLERY_VIDEO,'_blank')}}>Gallery</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); window.open(process.env.REACT_APP_SURPRISE_VIDEO,'_blank')}}>Surprise</a></li>
                </ul>

                <h1 className="gift-wish">Happy Birthday Baby!</h1>
                <div className="d-flex align-items-center">
                    <span style={{ color: "#fff", marginRight: "10px" }}>
                    {userName}
                    </span>
                    <img
                    src={userAvatar}
                    alt={userName}
                    className="rounded-2"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                </div>
             </div>   
        </div> 
    </nav>
  );
};

export default Navbar;

   