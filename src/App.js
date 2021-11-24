import React, { useState } from "react";

const App = () => {
  // 状態countと状態を変える関数setCount
  const [count, setCount] = useState(0) //初期値 戻り値もある //配列を返しているしかも２つ

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(prevCount => prevCount + 1)
  const decrement2 = () => setCount(prevCount => prevCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const divide = () => setCount(prevCount => {
    if(prevCount % 3 == 0){
      return prevCount / 3
    } else {
      return prevCount
    }
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide}>３の倍数の時だけ3で割る</button>
      </div>
    </>
  )
};

export default App;
