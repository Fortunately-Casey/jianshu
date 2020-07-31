import * as constans from './constans'
import {
  fromJS
} from 'immutable';
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  pageTotal: 1
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.SEARCH_INPUT_FOCUS:
      return state.set('focused', true);
    case constans.SEARCH_INPUT_BLUR:
      return state.set('focused', false);
    case constans.CHANGE_LIST:
      return state.merge({
        'list': action.data,
        'pageTotal': action.pageTotal
      })
      // return state.set('list', action.data)
      //   .set('pageTotal', action.pageTotal);
    case constans.SEARCH_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constans.SEARCH_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constans.PAGE_CHANGE:
      return state.set('page', action.page);
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}