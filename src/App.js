import React, { useState } from "react";

// propsは親から子にデータを渡す時に使用するもの
const App = props => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }
  
  return (
    <>
      <div>現在の{name}は、{price}円です</div>
      {/* アロー関数にしないと無限ループになる  setPriceをそのまま呼び出すとrender => setState => render => setStateとなるから */}
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <br/>
      <br/>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}

// 外部からデータを読み込む場合
// デフォルトのデータを定義
App.defaultProps = {
  name: "",
  price: 1000
}

export default App;
