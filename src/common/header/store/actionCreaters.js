import * as constans from './constans';
import axios from 'axios';
import {
  fromJS
} from 'immutable'

export const searchFocus = () => ({
  type: constans.SEARCH_INPUT_FOCUS
})

export const searchBlur = () => ({
  type: constans.SEARCH_INPUT_BLUR
})

const changeList = (data) => ({
  type: constans.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    axios.get("/api/headerList.json").then((res) => {
      if (res.data.success) {
        dispatch(changeList(res.data.data))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}