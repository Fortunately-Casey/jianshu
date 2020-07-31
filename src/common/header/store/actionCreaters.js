import * as constans from './constans';
import axios from 'axios';
import {
  fromJS
} from 'immutable'

const changeList = (data) => ({
  type: constans.CHANGE_LIST,
  data: fromJS(data),
  pageTotal: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constans.SEARCH_INPUT_FOCUS
})

export const searchBlur = () => ({
  type: constans.SEARCH_INPUT_BLUR
})

export const mouseEnter = () => ({
  type: constans.SEARCH_MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constans.SEARCH_MOUSE_LEAVE
})

export const pageChange = (page) => ({
  type: constans.PAGE_CHANGE,
  page: page
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