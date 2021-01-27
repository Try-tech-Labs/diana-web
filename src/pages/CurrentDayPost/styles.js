import styled from 'styled-components'

export const PostContent = styled.div`
    width: auto;
    height: 50vh;
    background: rgba(0,0,0,0.7);
    border-radius: 10px;
    position: relative;
    top: 6vh;
    display: grid;
    grid-template-columns: 8fr 14fr 14fr 14fr;
`

export const DateIndicator = styled.h1`
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    color: #ADACAC;
    font-family: Arapey;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    margin: 0;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export const TwitterData = styled.div`
    margin: 0 auto;
`

export const VideoData = styled.div`
    margin: 0 auto;
`

export const NewsData = styled.div`
    margin: 0 auto;
`