import React from 'react';
import "../css/SearchCont.css";
function SearchCont(){
    return(
        <div className="cont-1">
        <div className="first-div">
        <div className="search-cont">
        <h1>Welcome <br />to the RYN Tech project.</h1>
        <p>Procedure :<br />
 -	Submit the URL of social media account.<br />
 -	Tap the submit button.<br />
 -	A table will appear showcasing the results</p>
        
        </div>
       
        </div>
        <div className="second-div">
            <img src="../svg/social-media.svg" width="800px" height="500px" alt="svg" />
        </div>
        </div>
    )
}
export default SearchCont;