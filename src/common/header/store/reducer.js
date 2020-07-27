import * as constans from './constans'
import {
  fromJS
} from 'immutable';
const defaultState = fromJS({
  focused: false,
})

// 纯函数
export default (state = defaultState, action) => {
  if (action.type === constans.SEARCH_INPUT_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true);
  }
  if (action.type === constans.SEARCH_INPUT_BLUR) {
    return state.set('focused', false);
  }
  return state;
}