import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    height: 56px;
    width: 100px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPic});
    background-size: contain
`
export const Nav = styled.div`
    height: 58px;
    width: 960px;
    margin: 0 auto;
    position: relative;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left
    }
    &.right {
        float: right
        color: #969696
    }
    &.active {
        color: #ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    height: 36px;
    width: 160px;
    padding: 0 30px 0 20px;
    color: #666;
    border: none;
    outline: none;
    border: 1px solid #eee;
    background: #eee;
    border-radius: 19px;
    margin-top: 11px;
    box-sizing: border-box;
    font-size: 14px;
    marging-left: 20px;
    &::placeholder{
        color: #999
    }
    &.slide-enter{
        transition: all .5s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
         transition: all .5s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`

export const Addition = styled.div`
    height: 56px;
    position: absolute;
    top: 0;
    right: -200px;
`
export const Btn = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 15px;
    padding: 0 20px;
    margin-top: 9px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`

export const SearchWrapper = styled.div`
    float:left;
    height: 56px;
    position: relative;
    .iconfont {
        position: absolute;
        top: 14px;
        right: 4px;
        width:28px;
        line-height:28px;
        text-align: center;
        height: 28px;
        border-radius: 50%;
       
    }
    &.focused{
        .searchInput{
            width: 240px;
        }
        .iconfont {
            background: #bbb;
            color: #fff;
            cursor: pointer;
        }
    }
`
