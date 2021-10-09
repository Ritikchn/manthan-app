import React from 'react';
import { Data } from '../Data';
import "../css/result.css";
const Result=(props)=>{
    const type=props.type;
    const green= "rgb"+"(143, 238, 143)";
    const red="rgb"+"(214, 92, 84)";
    const style1={animation:" scale 4s infinite"};
    const style2={ animation:" scale2 4s infinite"};
    return(
        <div className="result">
        <img style={style1} className="shapes " src="../svg/shapes.svg" alt="shapes" width="400px" height="400px"/>
        <img style={style2} className="  shapes2" src="../svg/shapes.svg" alt="shapes" width="400px" height="400px"/>
        
        <h1>RQ Score :</h1>
        <div className="table">
            <table>
                <tr>
                    <th>FACTORS</th>
                    <th>THRESHOLD</th>
                    <th>INSIGHTS </th>
                </tr>
            {Data.map((res)=>(
                 <tr>
                 <td>{res[0]}</td>
                 <td>{res[1]}</td>
                 <td style={type==="2"?{backgroundColor: green}:{backgroundColor: red}}>{res[type]}</td>
                 </tr>
            ))}
            </table>
            </div>
            
        </div>
    )
}
export default Result;