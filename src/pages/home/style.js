import styled from 'styled-components';

export const HomeWrapper = styled.div `
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div `
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div `
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div `
  cursor: pointer;
  box-sizing: content-box;
  height: 32px;
  line-height: 32px;
  float: left;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 15px;
  margin-bottom: 10px;
  .topic-pic {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 4px 0 0 4px;
  }
`
export const ListItem = styled.div `
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  cursor: pointer;
  .pic {
    float: right;
    display: block;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div `
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div `
  margin: 30px 0;
  width: 200px;
`
export const RecommendItem = styled.div `
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imageUrl}) no-repeat;
  background-size: contain;
  margin-bottom: 6px;
  border-radius: 4px;
  cursor: pointer;
`

export const WriterWrapper = styled.div `
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align:center;
  border-radius: 20px;
  color:#fff;
  cursor: pointer;
`
export const BackTop = styled.div `
  width: 100px;
  height: 80px;
  line-height: 80px;
  text-align:center;
  position: fixed;
  right: 10px;
  bottom: 20px;
  background: #eee;
  color:gray;
  cursor: pointer;
`