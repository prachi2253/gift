import { useNavigate } from "react-router-dom";

function Card({image , name ,password}){
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/maingift' ,{state:{avatar:image , profile:name , password}});
    }
    return(
        <div
            onClick = {handleclick}
            className="card text-center mx-3"
            style={{
                width: "150px",
                background: "black",
                color: "#fff",
                
                overflow: "hidden",
                transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>  
        </div>
    );
}
export default Card;