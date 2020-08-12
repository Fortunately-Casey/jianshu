import axios from "axios";
import * as constans from "./constans"
const setDetailInfo = (data) => {
  return {
    type: constans.GET_DETAIL,
    data: data
  }
}

export const getDetail = (id) => {
  console.log(id);
  return (dispatch) => {
    axios.post("/get/getDetail").then((resp) => {
      dispatch(setDetailInfo(resp.data))
    })
  }
}