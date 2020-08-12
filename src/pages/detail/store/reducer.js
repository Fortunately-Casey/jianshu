import {
  fromJS
} from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  title: "",
  content: ""
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.GET_DETAIL:
      return state.merge({
        "title": fromJS(action.data.title),
        "content": fromJS(action.data.content)
      })
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}