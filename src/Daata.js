import React,{useState,useEffect} from 'react';
 
import App from'./App.css';

  function Daata() {
    const [confirmeddata, setconfirmeddata] = useState();
    const [recoveredddata, setrecoveredddata] = useState();
    const [deathdata, setdeathdata] = useState();




  useEffect(() => {
    

    async function getData() {
      const res = await fetch(
        `https://covid19.mathdro.id/api/countries/USA`
      );
 
      const data = await res.json();
      console.log(data.deaths.value)

      setconfirmeddata(data.confirmed.value);
      setrecoveredddata(data.recovered.value);
      setdeathdata(data.deaths.value);

    }
    getData();
  }, []);
        
  return (
  
  <div style={{ width: "500px", marginLeft:"28%",padding:"30px", marginTop:"15%"}}>

    <table id ="customers">
    <tr>
     <th colspan="2">Case details In USA</th>
  </tr>
    <tr >
    <td>Confirmed Cases:</td>
    <td>{confirmeddata}</td>
   </tr>  
   <tr>
    <td>recovered Cases:</td>
    <td>{recoveredddata}</td>
   </tr>
   <tr>
    <td>Deaths:</td>
    <td> {deathdata}</td>
   </tr>  </table>
     

    </div>);
}
 
export default Daata;