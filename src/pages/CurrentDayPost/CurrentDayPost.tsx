import React, {useCallback, useState} from 'react'

import twitterLogo from '../../assets/images/twitter.svg';
import youtubeLogo from '../../assets/images/youtube.svg';
import newspaperLogo from '../../assets/images/newspaper.svg';

import { PostContent, DateIndicator, TwitterData, VideoData, NewsData, InformationWrapper, ButtonList, TrendingTopicsWrapper, TrendingTopicTitle, TrendingTopicsList, TopicRank, TopicName, TrendingTopic } from './styles';

import InformationButton from '../../components/InformationButton'
import InformationDialog from '../../components/InformationDialog'

interface TrendingTopic {
    topic_position: number,
    topic_name: string
}

export default function CurrentDayPost(){

    const [showInformationDialog, setShowInformationDialog] = useState(false)
    
    const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([
        {
            topic_position: 1,
            topic_name: 'Trending topic'
        }, 
        {
            topic_position: 2,
            topic_name: 'Trending topic 2'
        }, 
    ])
    const [dialogDataType, setDialogDataType] = useState('')

    const openInformationDialog = useCallback((dataType:string) => {
        setDialogDataType(dataType)
        setShowInformationDialog(true)
    }, [setShowInformationDialog])

    const closeInformationDialog = useCallback(() => {
        setShowInformationDialog(false)
    }, [setShowInformationDialog])
    
    return (
        <PostContent>
            {showInformationDialog && (
                <InformationDialog dataType={dialogDataType} trendingTopics={trendingTopics} closeModal={closeInformationDialog} />
            )}
            <DateIndicator>NOW</DateIndicator>
            <InformationWrapper>
                <ButtonList>
                    <TwitterData onClick={() => openInformationDialog('tweet')} data-testid="twitter-data">
                        <InformationButton logoImage={twitterLogo}  buttonText={'Tweets'} />
                    </TwitterData>
                    <VideoData onClick={() => openInformationDialog('video')} data-testid="video-data">
                        <InformationButton logoImage={youtubeLogo} buttonText={'Videos'} />
                    </VideoData>
                    <NewsData onClick={() => openInformationDialog('news')} data-testid="news-data">
                        <InformationButton logoImage={newspaperLogo} buttonText={'News'} />
                    </NewsData>
                </ButtonList>
                <TrendingTopicsWrapper>
                    <TrendingTopicTitle>Top 5 trending topics</TrendingTopicTitle>
                    <TrendingTopicsList>
                        {trendingTopics.map(topic => {
                            return (
                                <TrendingTopic key={topic.topic_position}>
                                    <TopicRank>{topic.topic_position}º</TopicRank>
                                    <TopicName>{topic.topic_name}</TopicName>
                                </TrendingTopic>
                            )
                        })}
                    </TrendingTopicsList>
                </TrendingTopicsWrapper>
            </InformationWrapper>
        </PostContent>
    )
}