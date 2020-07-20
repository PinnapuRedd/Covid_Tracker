import React, { useState, useEffect } from 'react';
import * as stateAbbr from "datasets-us-states-abbr";
import Chart from "./Chart.js"
import Line from './Linechart.js';
import styles from './App.css';
import image from './images/images.gif';
import Daata from './Daata.js';
import ReactPlayer from 'react-player'
import DoughnutChart from'./Doughnut';


function App() {
  const [activeQuery, setActiveQuery] = useState("AK")
  const [stateData, setStateData] = useState({})


  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://covidtracking.com/api/states?state=${activeQuery.toLocaleLowerCase()}`
      );

      const data = await res.json();

      setStateData(data);
    }
    getData();
  }, [activeQuery]);

  return (
    <div id="App" >
      <div id="video" >
        <div id="videos">
          <ReactPlayer url='https://www.youtube.com/watch?v=B9D2RHaA68c' />

        </div>
        <div>
          <img src={'https://media.giphy.com/media/dVuyBgq2z5gVBkFtDc/giphy.gif'} alt="photo_verybig_203853" id="images" />

        </div>
      </div>
<div style={{   paddingTop: "150px" }}>
<Daata />
</div>
     

      <form style={{ width: "400px", marginLeft: "35%", paddingTop: "15px" }}  >

        <label  >
          Select a state:
          <select value={activeQuery} onChange={e => setActiveQuery(e.target.value)} style={{ width: "100px", marginLeft: "20px" }}>
            {Object.values(stateAbbr).map(abbr => {
              return (
                <option key={abbr} value={abbr}>
                  {abbr}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      {/* <TotalCases /> */}

      <div id="float-container"  >
        <div id="float-child">
          <Chart data={stateData} />
        </div>
        <div id="float-child2">
          <Line data={stateData} /></div>

      </div>
<DoughnutChart data={stateData}/>


    </div>
  );
}

export default App;
