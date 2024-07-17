import React, { useState } from 'react'
import './CounterProg.css'

const CounterProg = () => {

    let [counter, setCounter] = useState(0);
    let [valueBy, setValueBy] = useState(1);
    const increment = () =>{
        const value = valueBy === '' ? 1 : parseInt(valueBy)
        setCounter(counter + value)
    }
    const decrement = () =>{
        const value = valueBy === '' ? 1 : parseInt(valueBy)
        setCounter(counter-value)
    }
    const resetValue = () =>{
        setCounter(0)
        setValueBy('')
    }
  return (
    <div>
        <div className='container'>
            <h1>Counter app</h1>
            <div>
                <h3>{counter}</h3>
            </div>
            <div>
                <input 
                    type='text' 
                    onChange={(e) => setValueBy(e.target.value)}
                    value={valueBy}
                />
            </div>
            <div>
            <button onClick={decrement}>Dec</button> <button onClick={increment}>Inc</button>
            </div>
                <div>
                    <input type='reset' value="Reset" onClick={resetValue}/>
                </div>

        </div>
      
    </div>
  )
}

export default CounterProg
