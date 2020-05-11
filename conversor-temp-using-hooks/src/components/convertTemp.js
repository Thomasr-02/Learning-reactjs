/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./convertTemp.css";

export default function ConvertTemp() {
  const [unitA, setUnitA] = useState("Celsius");
  const [unitB, setUnitB] = useState("Celsius");
  const [tempA, setTempA] = useState(0);
  const [tempB, setTempB] = useState(0);
  

  function convertTemperature() {
    if (unitA == "Celsius") {
      if (unitB == "Fahrenheit") {
        //converter de celsius para fahrenheit
        var auxTemp = celsiusToFahrenheit(tempA)
        console.log(auxTemp)
        setTempB(auxTemp);
      }
      if ("unitB" =="Kelvin") {
        //converter de celsius para kelvin
        console.log('teste')
        
      } else {
        setTempB( tempA);
        //conversao de celsius para celsius
      }
    }
  }
  
  function celsiusToFahrenheit(value) {
    return (value * 1.8 + 32) ;
  }
  useEffect(() => {
    convertTemperature();
  }, [unitA, unitB, tempA, tempB, convertTemperature]);
  


  console.log(tempB);
  return (
    <>
      <div id="container">
        <h1>Conversor de temperatura</h1>
        <h2>Using hooks</h2>
        <div id="blockA">
          <input
            type="number"
            onChange={(e) => {
              setTempA(e.target.value);
            }}
          ></input>
          <select
            id="uintA"
            onChange={(e) => {
              setUnitA(e.target.value);
            }}
          >
            <option value="Celsius"> Celsius</option>
            <option value="Fahrenheit"> Fahrenheit</option>
            <option value="Kelvin"> Kelvin</option>
          </select>
        </div>
        <span id="equal"> = </span>
        <div id="blockB">
          <h3>{tempB}</h3>
          <select
            id="uintB"
            onChange={(e) => {
              setUnitB(e.target.value);
            }}
          >
            <option value="Celsius"> Celsius</option>
            <option value="Fahrenheit"> Fahrenheit</option>
            <option value="Kelvin"> Kelvin</option>
          </select>
        </div>
      </div>
    </>
  );
}
