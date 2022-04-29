import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Graph = ({ chartData }) => {
    return ( 
        <div style={{height:"20vh",width:"80vw",position:"relative", marginBottom:"1%", padding:"1%"}}>
         <Bar
         data={chartData}
         />
      </div>

       
     );
}

export default Graph;