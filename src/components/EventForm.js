import React, { useContext, useState } from "react";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    // 「preventDefault」はイベントのデフォルトの動作を妨げている
    // フォームが持つデフォルトの動作とは、フォームの内容を指定したURLへ送信するという動作です。
    e.preventDefault();

    dispatch({
      // type属性が必ず必要
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operationAt: timeCurrentIso8601(),
    });

    // stateはイベント一覧の状態を管理している
    // 0: {id: 1, title: 't', body: 'b'}
    // 1: {id: 2, title: '', body: ''}
    console.log({ state });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("Do you want to delete all data?");
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました",
        operationAt: timeCurrentIso8601(),
      });
    }
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          {/* 「e.target.value」は慣用句    setStateやsetTitleの関数を呼び出してtitleなどの状態を変更していく */}
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary mr-3"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger mr-3"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </button>
        <button className="btn btn-danger mr-3">
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
