import React from "react";
import './Showdata.css';

const Showdata=(props)=> {
    return ( 
     <>
     <div className="main-container">
         <h2>{props.Country}</h2>
         <div className="card-container flex-container">
             <div className="card flex-container ">
              <h3>Confirmed</h3>
              <h2>{props.Confirmed}</h2>
             </div>

             <div className="card flex-container">
              <h3>Recovered</h3>
              <h2>{props.Recovered}</h2>
             </div>

             <div className="card flex-container">
              <h3>Deceased </h3>
              <h2>{props.Deaths}</h2>
             </div>
         </div>

     </div>
     </>
     );
}

export default Showdata;