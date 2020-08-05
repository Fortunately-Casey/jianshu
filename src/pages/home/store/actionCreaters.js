import axios from 'axios';
import * as constans from './contans';
import { fromJS } from "immutable"
const changeHomeData = (result) => ({
  type: constans.CHANGE_HOME_DATA,
  data: result,
})

const addMoreList = (result,nextPage) => ({
  type: constans.ADD_MORE_LIST,
  moreList: fromJS(result),
  nextPage
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
      dispatch(addMoreList(resp.data,page));
    });
  }
}