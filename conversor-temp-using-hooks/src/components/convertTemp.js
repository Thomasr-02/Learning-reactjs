/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./convertTemp.css";

export default function ConvertTemp() {
  const [unitA, setUnitA] = useState(["Celsius"]);
  const [unitB, setUnitB] = useState(["Celsius"]);
  const [tempA, setTempA] = useState([]);
  const [tempB, setTempB] = useState([]);

  function converterTemperature() {
    if (unitA == "Celsius") {
      if (unitB == "Fahrenheit") {
        let aux = celsiusToFahrenheit(tempA);
        setTempB(aux);
        console.log(tempB);
      }
      if (unitB == "Kelvin") {
        setTempB(celsiusToKelvin(tempA));
      } else {
        console.log("celsiu to celsiu");
        setTempB(tempA);
        console.log("temp a :" + tempA + "temp b " + tempB);
      }
    }
    if (unitB == "Kelvin") {
    }
  }

  function celsiusToFahrenheit(value) {
    console.log(value * 1.8 + 32);

    return value * 1.8 + 32;
  }
  function celsiusToKelvin(value) {
    setTempB(0);
    console.log(value + 273.15);
    return value + 273.15;
  }
  /*   function fahrenheitToCelsius(value) {
    return ((value - 32) * 5) / 9;
  }
  function fahrenheitToKelvin(value) {
    return ((value + 459.67) * 5) / 9;
  }
  function kelvinToCelsius(value) {
    return value - 273.15;
  }
  function kelvinToFahrenheit(value) {
    return value * 1.8 - 459.67;
  } */

  useEffect(() => {
    converterTemperature();
  }, [tempA, tempB, unitA, unitB]);

  return (
    <>
      <h1>Conversor de temperatura</h1>
      <div id="container">
        <div id="blockA">
          <input
            type="number"
            id="tempA"
            name="tempA"
            onChange={(e) => {
              setTempA(e.target.value);
            }}
          />
          <select
            id="unitA"
            name="unitA"
            onChange={(e) => setUnitA(e.target.value)}
          >
            <option value="Celsius">Grau Celsius</option>
            <option value="Fahrenheit">Grau Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
        <span name="unit2" id="equal">
          =
        </span>

        <div id="blockB">
          <input type="number" id="tempB" onChange={(e)=>{setUnitB(e.target.value)}} value={tempB} />
          <select
            id="unitB"
            name="unitB"
            onChange={(e) => setUnitB(e.target.value)}
          >
            <option value="Celsius">Grau Celsius</option>
            <option value="Fahrenheit">Grau Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
      </div>
    </>
  );
}
