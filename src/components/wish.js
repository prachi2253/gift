import React from "react";
import Cake from './cake/cake';
import bdyimage from '../assets/images/bdy.jpg';
import { useNavigate } from 'react-router-dom';


function Wish() {
    const navigate = useNavigate();
  return(
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh', flexDirection: 'column', backgroundColor: 'transparent'}}>
        <img
          src={bdyimage}
          alt="Birthday"
          style={{
            marginTop: '3vh',
            width: 'auto',
            height: '50vh',
            maxWidth: '95%',
            objectFit: 'contain',
            display: 'block'
          }}
        />
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Cake />
        </div>
        <button
        backgroundColor="white"
        color="black"
          className="btn btn-primary"
          style={{ marginTop: '2rem' ,
                backgroundColor : '#d01a23ff', 
                color: 'black',
                border: '2px solid #d01a23ff'
}}
          onClick={() => {
            navigate('/user');
          }}
        >
          Thank You!
        </button>
      </div>
    </div>
  )
}

export default Wish;
