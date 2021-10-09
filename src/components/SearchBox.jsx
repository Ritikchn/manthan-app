import React, { useState } from 'react';
import {scroller} from 'react-scroll';
import "../css/SearchBox.css";
const SearchBox=(props)=>{
    const[Input,setInput]=useState("");

    const scrollToSection = () => {
        scroller.scrollTo("table", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };
    const submit=()=>{
        setInput("");
        props.function();
        setTimeout(()=>{
            scrollToSection()},1000);
       
    }
    return(<div>
        <div className="searchbox-cont">
        <i class="fas fa-search fa-2x" ></i><input className="search-input" type="text"  placeholder="Enter the URL of Profile" onChange={(e)=>setInput(e.target.value)} value={Input}></input>
            <button onClick={submit}>Submit</button>
        </div>
    </div>);
}
export default SearchBox;