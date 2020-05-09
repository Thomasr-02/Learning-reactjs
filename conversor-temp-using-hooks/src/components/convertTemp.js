/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./convertTemp.css";

export default function ConvertTemp() {
  const [unitA, setUnitA] = useState("Celsius");
  const [unitB, setUnitB] = useState("Celsius");
  const [tempA, setTempA] = useState(0);

  function convertTemperature() {
    var tempB = document.getElementById("tempB");
    console.log('undi A:'+unitA+' unit b:'+unitB)
    if (unitA == "Celsius") {
      if (unitB == "Fahrenheit") {
        //conversao de celsius para celsius
        console.log(celsiusToFahrenheit(tempA))
        tempB.value = celsiusToFahrenheit(tempA);
        console.log(tempB.value);
      }
      if ("unitB" =="Kelvin") {
        console.log('ete')
        
        //converter de celsius para fahrenheit
      } else {
        tempB.value = tempA;
        //converter de celsius para kelvin
      }
    }
  }

  function celsiusToFahrenheit(value) {
    return (value * 1.8 + 32) ;
}
  useEffect(() => {
    convertTemperature();
  }, [unitA, unitB, tempA]);
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
          <input type="number" id="tempB" disabled="disabled" name="tempB" />

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
