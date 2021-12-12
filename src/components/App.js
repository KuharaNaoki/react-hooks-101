import React, { useReducer, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    // 「preventDefault」はイベントのデフォルトの動作を妨げている
    // フォームが持つデフォルトの動作とは、フォームの内容を指定したURLへ送信するという動作です。
    e.preventDefault()

    dispatch({
      // type属性が必ず必要
      type: 'CREATE_EVENT',
      title,
      body
    })
    // イベント一覧の状態を管理している
    // 0: {id: 1, title: 't', body: 'b'}
    // 1: {id: 2, title: '', body: ''}
    console.log({state})
    setTitle('');
    setBody('');
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          {/* 「e.target.value」は慣用句    setStateやsetTitleの関数を呼び出してtitleなどの状態を変更していく */}
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary mr-3" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </form>
    </div>
  )
};

export default App;
