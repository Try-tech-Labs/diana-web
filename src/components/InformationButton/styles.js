import styled from 'styled-components'

import defaultLogo from '../../assets/images/default.svg';


export const Link = styled.a`
    background: #000000;
    border-radius: 10px;
    display: block;
    width: fit-content;
    padding: 1vw 2vw 1vw 2vw;
    margin-top: 4vh;
    &:hover{
        text-decoration: underline  ;
        color: white;
        box-shadow: 0px 1px 4px #FFFFFF;
        div{
            opacity: 1;
        }
    }
`

export const LinkContent = styled.div`
    
`

export const ButtonImage = styled.div`
    background: url(${props => (props.backgroundImage || defaultLogo)});
    display: block;
    width: 4vw;
    height: 4vw;
    margin: 0 auto;
    opacity: 0.6;
`

export const LinkText = styled.p`
    color: white;
    margin: 0;
    font-size: 2vh;
    padding-top: 12px;
`

