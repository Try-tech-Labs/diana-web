import styled from 'styled-components'
import background from '../../assets/images/background.jpg'

export const ContentWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

export const PageBackground = styled.div`
    background: url(${background}) rgba(15, 12, 10, 0.8);
    opacity: 0.9;
    background-blend-mode: multiply;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(15px);
    -webkit-filter: blur(15px);
    height: 100%;
    width: 100%;
    position: absolute;
`

export const PostsWrapper = styled.div`
    height: 100vh;
    width: 80vw;
    margin: 0 auto;
`