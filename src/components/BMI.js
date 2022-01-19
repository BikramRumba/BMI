import React, { useState } from 'react';

export default function BMI() {
    const [bmi, setBmi] = useState();
    const weight = 55;
    const height = 1.5
// creating function to calculate Bmi
    function bmiCalc () {
        setBmi(weight/(height * height))
    }
    // creating function to clear calculation 
    function reset() {
        setBmi();

    }
  return <div>
    <h1>BMI Calculator</h1>
       <h2>
         Person's weight in kilogram  {weight} kg
       </h2>
           
       
       <h2>
       Person's height in meter {height} m^2
       </h2>

       <h3>{bmi} kg/m^2</h3>
       <button className='btn' onClick={bmiCalc}> Calculate</button>
       <button className='btn'onClick={reset}>Clear</button>
      
  </div>;
}
