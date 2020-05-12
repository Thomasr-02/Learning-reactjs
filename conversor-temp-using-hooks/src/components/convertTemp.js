/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./convertTemp.css";

export default function ConvertTemp() {
  const [unitA, setUnitA] = useState("Celsius");
  const [unitB, setUnitB] = useState("Celsius");
  const [tempA, setTempA] = useState(0);
  const [tempB, setTempB] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function convertTemperature() {
//convertendo de celsius para algo
    if (unitA === "Celsius") {
      if (unitB === "Fahrenheit") {
        //converter de celsius para fahrenheit
        setTempB(celsiusToFahrenheit(tempA));
      } else if (unitB === "Kelvin") {
        //converter de celsius para kelvin
        setTempB(celsiusToKelvin(tempA));
        console.log('celsius to kelvin')
      } else if (unitB === "Celsius") {
        setTempB(tempA);
        //conversao de celsius para celsius
      }
    }
    else if (unitA === "Kelvin") {
      if (unitB === "Fahrenheit") {
        //converter de celsius para fahrenheit
        setTempB(kelvinToFahrenheit(tempA));
      } else if (unitB === "Celsius") {
        //converter de celsius para kelvin
        let varAux =kelvinToCelsius(tempA);
        setTempB(varAux);
      } else if (unitB === "Kelvin") {
        setTempB(tempA);
        //conversao de celsius para celsius
      }
    }
    else if (unitA === "Fahrenheit") {
      if (unitB === "Fahrenheit") {
        //converter de celsius para fahrenheit
        setTempB(tempA);
      } else if (unitB === "Celsius") {
        //converter de celsius para kelvin
        setTempB(fahrenheitToCelsius(tempA));
      } else if (unitB === "Kelvin") {
        setTempB(fahrenheitToKelvin(tempA));
        //conversao de celsius para celsius
      }
    } 
    
  }

  function celsiusToFahrenheit(value) {
    return value * 1.8 + 32;
  }
  function celsiusToKelvin(value) {
  
    return (value*1 + 273.15);
  }
  function fahrenheitToCelsius(value) {
    return ((value - 32) * 5) / 9;
  }
  function fahrenheitToKelvin(value) {
    return ((value*1 + 459.67) *( 5 / 9));
  }
  function kelvinToCelsius(value) {
    return value - 273.15;
  }
  function kelvinToFahrenheit(value) {
    return value * 1.8 - 459.67;
  }

  useEffect(() => {
    convertTemperature();
  }, [unitA, unitB, tempA, tempB, convertTemperature]);

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
          <input type="number" value={tempB} disabled />

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
