import React from "react";
import { useState } from "react";
import "./App.css";





export default function App() {
  const [reverseStr, setReverseStr] = useState("");
  const [error, setError] = useState("");
  let value = "";








  const handleChange = (e) => {
    value = e.target.value ; 
    if (value.length <= 9 )
    {
      let valueReversed = value.split("").reverse().join("");
      setReverseStr(valueReversed );
    }
    else 
    {
      setError("desole on accepte pas plus que 9 caracteres.")
    }
    
    
  };



  

  return (
    <div className="App">
      <h1> Inverseur de string </h1>
      <div className="reverse">
        <label className="reservedString">{reverseStr}</label>
      </div>
      <br />
      <form className="String">
        <input className="input" onChange={handleChange} />
      </form>
      <br />
      <div className="error">{error}</div>
      
    </div>
  );
}