import React  from "react";
import "../css/Card.css";
const Card=(props)=>{  
    const run=()=>{
        props.visF();
    }
    const data1=" YOU ARE GOOD TO GO! (ACHA)";
    const data2=" HAVE A GOOD COMPANY AND HAVE COUNSELING(GANDA)";
return(
    <div className={props.vis?"card-cont":"card-cont-hidden"}>
    <div className="fancy">
    <div onClick={run} ><i  className="fa fa-arrow-right fa-2x"></i></div>
    <img src="../svg/message.svg" width="200px" height="100px" alt="svg" />
    </div>
        <h2>{props.show?props.number?data1:data2:"No Notification Please Enter the URL Of Profile"}</h2>
    </div>
)
}
export default Card;