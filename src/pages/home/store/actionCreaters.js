import axios from 'axios';
import * as constans from './contans';
import {
  fromJS
} from "immutable"
const changeHomeData = (result) => ({
  type: constans.CHANGE_HOME_DATA,
  data: result,
})

const addMoreList = (result, nextPage) => ({
  type: constans.ADD_MORE_LIST,
  moreList: fromJS(result),
  nextPage
})

const toogleScrollTop = (isShow) => ({
  type: constans.TOGGLE_SCROLL_TOP,
  isShowToggle: isShow
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.post("/get/getHomeList").then((resp) => {
      dispatch(changeHomeData(resp.data));
    });
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.post("/get/getMoreList").then((resp) => {
      dispatch(addMoreList(resp.data, page));
    });
  }
}

export const toggleBackTop = (isShow) => {
  console.log(isShow)
  return (dispatch) => {
    dispatch(toogleScrollTop(isShow))
  }
}