import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div `
    position:relative;
    height:58px;
    border-bottom:1px solid #eee;
`
export const Logo = styled.a.attrs({
    href:'/'
})`
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
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    background:red;
`
