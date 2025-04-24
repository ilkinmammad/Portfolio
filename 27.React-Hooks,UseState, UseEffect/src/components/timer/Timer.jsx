import React from 'react'
import style from './timer.module.css'
import { useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  const inputChange = (e) =>{
    setInputValue(Number(e.target.value))
  }


  return (
    <div className={style.container}>
      <div className={style["counter-box"]}>
        <p className={style.number}>{count}</p>
        <div className={style.buttons}>
          <button onClick={() => setCount(number => number + 1)}>+</button>
          <button onClick={() => {
            if (count > 0)
              setCount(number => number - 1)
          }
          }>-</button>

        </div>
      </div>

      <div className={style["input-box"]}>
        <input value={inputValue}
          onChange={inputChange} type="number" className={style.number} />
         <div className={style.buttons}>
          <button onClick={() => setCount(prev => prev + inputValue)}>+</button>
          <button onClick={() => {
            if (count - inputValue >= 0) {
              setCount(prev => prev - inputValue)
            }
            else{
              alert('Count menfi ola bilmez')
            }
          }}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Timer
