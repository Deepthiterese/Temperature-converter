import React, { useState } from 'react';
import background from '../components/images/temp.jpg'




export const CelciusFarenheit = () => {
  
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    setFahrenheit(fahrenheit);
  }
  
  
  return (
    <div style={{ backgroundImage: `url(${background})`,height: "540px",
    
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",paddingTop: '100px',paddingLeft:'600px',
    boxSizing: 'content-box'}}>
    <h3>Temperature Converter</h3>
      <label>Celsius:<input type="number" value={celsius} onChange={(e) => {
            setCelsius(e.target.value);
            convertToFahrenheit(e.target.value);
          }}/></label><br />
      <label>Fahrenheit:<input type="number" value={fahrenheit} onChange={(e) => {
            setFahrenheit(e.target.value);
            const celsius = (e.target.value - 32) * 5/9;
            setCelsius(celsius);
          }}/></label>
    </div>
  );
}
   
 


