import styled from 'styled-components'

export const PostContent = styled.div`
    width: auto;
    height: 50vh;
    background: rgba(0,0,0,0.7);
    border-radius: 10px;
    position: relative;
    top: 6vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
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

export const InformationWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: auto;
`

export const ButtonList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    align-items: center;
`

export const TrendingTopicsWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    align-items: flex-end;
`

export const TrendingTopicTitle = styled.h3`
    font-size: 24px;
    font-weight: bold;

`

export const TrendingTopicsList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    font-size:20px;
    padding: 20px;
`

export const TrendingTopic = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
`

export const TopicRank = styled.span`
    font-weight: 700;
`

export const TopicName = styled.p`
    font-weight: 400;
`

