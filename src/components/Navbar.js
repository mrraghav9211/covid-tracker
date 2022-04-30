import React, { useState,useEffect} from "react";
import axios from "axios";
import "./Navbar.css";
import Showdata from "./Showdata";
import Graph from "./Graph";

const Navbar = () => {
  const getInitialState = () => {
      const value = "Myanmar";
      return value;
    };
  let x = parseInt("2020-03-01");
  let y = parseInt("2022-04-01");
  const [value, setValue] = useState(getInitialState);
  const [from, setFrom] = useState((x));
  const [to, setTo] = useState((y));
  const [covid, setCovid] = useState([]);
  const [country,setCountry] = useState([]);
  const [user,setUser] = useState([]);

  const handleCountry = (e) => {
    setValue(e.target.value);
  };
  const handleFrom = (e) => {
    setFrom(e.target.value);
  };

  const handleTo = (e) => {
    setTo(e.target.value);
  };
  const countryData= async()=>{
     let  response= await axios.get("https://api.covid19api.com/countries")
     setCountry(response.data);
     
  }
useEffect(() => {
  countryData();
  fetchData();
}, [])
var cases=[];
    var date=[];
  const fetchData = async () => {
    

    let res = await axios.get(
      `https://api.covid19api.com/country/${value}?from=${from}&to=${to}`
    );

    setUser(res.data);
    for(const dataObj of res.data){
    cases.push(parseInt(dataObj.Active));
    date.push(parseInt(dataObj.Date))
    }
    let len = res.data.length - 1;
    setCovid(res.data[len]);
    

  };
  console.log(cases,date);

 

  const [userData, setUserData] = useState({
    labels: cases,
    datasets: [
      {
       
        label: "Users Gained",
        data: date,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <nav>
        <div className="logo">
          <h2>
            Covid<span>Tracker</span>
          </h2>
        </div>
        <div className="select-container">
          <label htmlFor="">Country </label>
          
          <select value={value} onChange={handleCountry}>
          {
            country.map((value)=>{
              return(
                <option key={value.ISO2} value={value.Country}>{value.Country}</option>
              )
            })
          }
         
            
          </select>
          <label htmlFor="">From </label>
          <select value={from} onChange={handleFrom}>
            <option value="2020-03-01">2020-03-01</option>
            <option value="2020-04-01">2020-04-01</option>
            <option value="2020-05-01">2020-05-01</option>
            <option value="2020-06-01">2020-06-01</option>
            <option value="2020-07-01">2020-07-01</option>
            <option value="2020-08-01">2020-08-01</option>
            <option value="2020-09-01">2020-09-01</option>
            <option value="2020-10-01">2020-10-01</option>
            <option value="2020-11-01">2020-11-01</option>
            <option value="2020-12-01">2020-12-01</option>
            <option value="2021-01-01">2021-01-01</option>
            <option value="2021-02-01">2021-02-01</option>
            <option value="2021-03-01">2021-03-01</option>
            <option value="2021-04-01">2021-04-01</option>
            <option value="2021-05-01">2021-05-01</option>
            <option value="2021-06-01">2021-06-01</option>
            <option value="2021-07-01">2021-07-01</option>
            <option value="2021-08-01">2021-08-01</option>
            <option value="2021-09-01">2021-09-01</option>
            <option value="2021-10-01">2021-10-01</option>
            <option value="2021-11-01">2021-11-01</option>
            <option value="2021-12-01">2021-12-01</option>
            <option value="2022-01-01">2022-01-01</option>
            <option value="2022-02-01">2022-02-01</option>
            <option value="2022-03-01">2022-03-01</option>
            <option value="2022-04-01">2022-04-01</option>
          </select>
          <label htmlFor="">To </label>
          <select value={to} onChange={handleTo}>
            <option value="2020-04-01">2020-04-01</option>
            <option value="2020-05-01">2020-05-01</option>
            <option value="2020-06-01">2020-06-01</option>
            <option value="2020-07-01">2020-07-01</option>
            <option value="2020-08-01">2020-08-01</option>
            <option value="2020-09-01">2020-09-01</option>
            <option value="2020-10-01">2020-10-01</option>
            <option value="2020-11-01">2020-11-01</option>
            <option value="2020-12-01">2020-12-01</option>
            <option value="2021-01-01">2021-01-01</option>
            <option value="2021-02-01">2021-02-01</option>
            <option value="2021-03-01">2021-03-01</option>
            <option value="2021-04-01">2021-04-01</option>
            <option value="2021-05-01">2021-05-01</option>
            <option value="2021-06-01">2021-06-01</option>
            <option value="2021-07-01">2021-07-01</option>
            <option value="2021-08-01">2021-08-01</option>
            <option value="2021-09-01">2021-09-01</option>
            <option value="2021-10-01">2021-10-01</option>
            <option value="2021-11-01">2021-11-01</option>
            <option value="2021-12-01">2021-12-01</option>
            <option value="2022-01-01">2022-01-01</option>
            <option value="2022-02-01">2022-02-01</option>
            <option value="2022-03-01">2022-03-01</option>
            <option value="2022-04-01">2022-04-01</option>
          </select>
          <button onClick={fetchData}>Submit</button>
        </div>
      </nav>
      <Showdata
        Country={covid.Country}
        Confirmed={covid.Confirmed}
        Recovered={covid.Recovered}
        Deaths={covid.Deaths}
      />

<Graph chartData={userData}/>
    </>
  );
};

export default Navbar;
