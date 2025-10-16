import Card from "./card";
import sleepyhead from "../assets/images/sleepyhead.jpg";
import jakaas from "../assets/images/jakaas.jpg";
import pookie from "../assets/images/pookie.jpg";
import nasha from "../assets/images/nasha.jpg";

function User(){
    function NetflixCurvedText() {
        return (
            <div style={{ marginBottom: '2rem'  }}>
                <svg width="400" height="200" viewBox="0 0 400 100">
                    <path id="curve" d="M20,80 Q200,0 380,80" fill="transparent" />
                    <text fill="#e50914" fontSize="82" fontWeight="bold">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            BRAINROT
                        </textPath>
                    </text>
                </svg>
            </div>
        );
    }
    return (
        <div style={{ 
            display: 'flex',          
            flexDirection: 'column', 
            alignItems: 'center',     
            backgroundColor: '#141414', 
            minHeight: '100vh', 
            color: '#fff', 
            paddingTop: '5rem' 
        }}>
            <NetflixCurvedText />
            <h1 style={{ fontSize: '2rem', marginBottom: '3rem', position: 'relative', top: '-50px' }}>Who's watching?</h1>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
            <Card image={sleepyhead} name="sleepyhead" />
            <Card image={jakaas} name="Jakaas" />
            <Card image={pookie} name="Pookie" />
            <Card image={nasha} name="Nasha" />
        </div>
        </div>
        
    )
}

export default User;