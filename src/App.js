import React, { useState } from "react";

// propsは親から子にデータを渡す時に使用するもの
const App = props => {
  const [state, setState] = useState(props);
  // 分割代入でstateの中身を代入しておくことでname, priceだけで値を使用できる
  const {name, price} = state;

  // Resetのボタンの中身を外に出すと以下の記述になる
  // const reset = () => setState(props)
  
  return (
    <>
      <div>現在の{name}は、{price}円です</div>
      {/* スプレット構文  ...stateで一度展開してから変更したい値を指定する */}
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <br/>
      <br/>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} /> {/* 変更されるものを後に書く */}
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
