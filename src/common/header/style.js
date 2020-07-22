import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div `
    position:relative;
    height:58px;
    border-bottom:1px solid #eee;
`
export const Logo = styled.a.attrs({
    href: '/'
})
`
    height:58px;
    position:absolute;
    left:0;
    top:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div `
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing: border-box;
    margin:0 auto;
`
export const NavItem = styled.div `
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    cursor: pointer;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`

export const SearchWrapper = styled.div `
    float: left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})
`   &.slide-enter {
        width:160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width:220px;
    }
    &.slide-exit  {
        width:220px;
    }
    &.slide-exit-active {
        width:160px;
        transition: all .2s ease-out;
    }
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background-color: #eee;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    color: #666;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width: 220px;
    }
`
export const Addition = styled.div `
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div `
    float: right;
    line-height:38px;
    border-radius:19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right:20px;
    padding: 0 15px;
    &.reg {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background: #ec6149;
    }
`