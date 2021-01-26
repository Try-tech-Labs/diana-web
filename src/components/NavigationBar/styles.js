import styled from 'styled-components'


export const HeaderContainer = styled.div`
    height: 80px;
    background-color: black;
    display: grid;
    grid-template-columns: initial;
    width: 100vw;
    position: relative;
`

export const MenuOptionsWrapper = styled.div`
    position: relative;
    float: right;
    grid-column-start: none;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: 60px;
    margin: 8px 0 0 0;
    display: grid;
    grid-template-columns: repeat(3,3fr);
    text-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid white;
    margin-left: auto;
    margin-right: 25vh;
`

export const MenuOption = styled.a`
    text-decoration: none;
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 60px;
    color: white;
    padding: 0 10px 0 10px;
    &:hover{
        text-decoration: overline;
        color:white;
    }
`

export const HeaderTitle = styled.h1`
    position: relative;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: 60px;
    margin: 8px 0 0 12vw;
    font-size: 60px;
    line-height: 66px;
    color: #ffffff;
    font-family: Arapey;
    font-style: normal;
    font-weight: normal;
`