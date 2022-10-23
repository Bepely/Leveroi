import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const Graph = ({close, open}) => {


  const options = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "",
      },
    },
  };
  
  const labels = ["Open", "Close"];
  
  


 const data = {
    labels,
    datasets: [
      {
        label: close.long === true ? "Long Order" : "Short Order",
        data: [open.price, close.closePrice],
        borderColor: close.long === true ? 'rgb(100, 180, 110)' : 'rgb(180, 100, 110)',
        backgroundColor: (open.price < close.closePrice && close.long === true) || 
        (open.price > close.closePrice && close.long === false)
        ? 'rgb(100, 210, 110)' : 'rgb(210, 100, 110)',
        fill: false,
      }
    ],
  };


  return (
    <Line options={options} data={data}/>
  )
}

export default Graph