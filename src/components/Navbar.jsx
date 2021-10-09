import React from 'react';
 import "../css/navbar.css";
function Navbar(props){
    
 return (
     <div>
        <div className="navbar-el">
            <ul>
                <li>RYN Tech</li>
                <li onClick={props.ping} className={props.message?"msg":"navigation"}><i class="far fa-bell fa-xs"></i>Notification</li>
            </ul>
        </div> 
     </div>
 )
}
export default Navbar;