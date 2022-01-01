// CREATE_EVENTの場合の挙動を整理する
// action = {
//   type: "CREATE_EVENT"
//   title: "2020東京オリンピックのお知らせ"
//   body: "2020年に東京でオリンピックを開催します！つきましては、、、、"
// }

// actionには常にタイプという属性が渡ってくる
const events = (state = [] , action) => {
  // 作成、削除、それ以外というふうに分ける
  // https://ja.reactjs.org/docs/hooks-reference.html#usereducer
  switch(action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, {id, ...event}]
    case "DELETE_EVENT":
      return state.filter(event => action.id !== event.id)
    case "DELETE_ALL_EVENTS":
      return []
    default: 
      return state 
  }
}

export default events