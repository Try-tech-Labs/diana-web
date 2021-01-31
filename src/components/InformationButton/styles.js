import styled from 'styled-components'

export const Link = styled.a`
    background: #000000;
    border-radius: 10px;
    display: block;
    width: fit-content;
    padding: 1vw 2vw 1vw 2vw;
    &:hover{
        text-decoration: underline  ;
        color: white;
        box-shadow: 0px 1px 4px #FFFFFF;
        img{
            opacity: 1;
        }
    }
`

export const LinkContent = styled.div`
    
`

export const ButtonImage = styled.img`
    width: 4vw;
    height: 4vw;
    display: block;
    margin: 0 auto;
    opacity: 0.6;
    background-size: cover;
    background-position: center;
`

export const LinkText = styled.p`
    color: white;
    margin: 0;
    font-size: 2vh;
    padding-top: 12px;
    text-align: center;
`

