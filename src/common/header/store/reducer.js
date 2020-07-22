import * as constans from './constans'
const defaultState = {
  focused: false,
}

// 纯函数
export default (state = defaultState, action) => {
  if (action.type === constans.SEARCH_INPUT_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === constans.SEARCH_INPUT_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}