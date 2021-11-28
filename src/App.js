import React, { useEffect, useState } from "react";

// propsは親から子にデータを渡す時に使用するもの
const App = props => {
  const [state, setState] = useState(props);
  // 分割代入でstateの中身を代入しておくことでname, priceだけで値を使用できる
  const {name, price} = state;

  // 第一引数に関数を受け取れる
  // componentDidMountのような挙動をする。なので、Domが描画された後に実行される。
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate.")
  })

  // 第２引数に空の配列を渡すと一度しか実行されないようになる
  useEffect(() => {
    console.log("This is like componentDidMount.")
  }, [])

  // 空の引数に反応したい値を入れると、その値が変更された時だけ実行されるようになる
  useEffect(() => {
    console.log("This callback is for name only.")
  }, [name])
  
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
