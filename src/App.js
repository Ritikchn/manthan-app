import React ,{useState} from 'react';
import './App.css';
import SearchCont from './components/SearchCont';
import Navbar from './components/Navbar.jsx';
import SearchBox from './components/SearchBox';
import Result from './components/Result';
import Card from './components/Card';
function App() {
  const [First,setFirst]=useState(true);
  const [Display,setDisplay]=useState(false);
  const [CardV ,setCardV]=useState(false);

  const notify=()=>{
    console.log("clicked")
    setCardV(!CardV);
  }

  const change =()=>{
      setFirst(!First);
      setDisplay(true);
  }

  return (
    <div className="App">
    <Navbar message={Display} ping={notify}></Navbar>
    <Card  show={Display} number={First} vis={CardV} visF={notify}></Card>
    <SearchCont></SearchCont>
    <SearchBox function={change}  ></SearchBox>
    {Display?
     First? <Result type="2"></Result>:<Result type="3"></Result>
    :<div></div>
     }
   
    </div>
  );
}

export default App;
