// import * as constans from './constans'
import {
  fromJS
} from 'immutable';
import recommend1 from '../../../static/recommend1.png';
import recommend2 from '../../../static/recommend2.png';
import recommend3 from '../../../static/recommend3.png';
import recommend4 from '../../../static/recommend4.png';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [{
      id: 1,
      imgUrl: recommend1
    },
    {
      id: 2,
      imgUrl: recommend2
    },
    {
      id: 3,
      imgUrl: recommend3
    },
    {
      id: 4,
      imgUrl: recommend4
    },
  ]
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_list":
      return state.merge({
        "topicList": fromJS(action.data.topicList),
        "articleList": fromJS(action.data.articleList)
      })
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}