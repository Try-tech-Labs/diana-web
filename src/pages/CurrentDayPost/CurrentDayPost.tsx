import React, { useCallback, useState, useEffect } from 'react'

import twitterLogo from '../../assets/images/twitter.svg';
import youtubeLogo from '../../assets/images/youtube.svg';
import newspaperLogo from '../../assets/images/newspaper.svg';

import { PostContent, DateIndicator, TwitterData, VideoData, NewsData, InformationWrapper, ButtonList, TrendingTopicsWrapper, TrendingTopicTitle, TrendingTopicsList, TopicRank, TopicName, TrendingTopic } from './styles';

import InformationButton from '../../components/InformationButton'
import InformationDialog from '../../components/InformationDialog'

import { getPostList } from '../../services/services'

interface TrendingTopic {
    trends_position: number,
    title: string
}

export default function CurrentDayPost(){

    const [showInformationDialog, setShowInformationDialog] = useState(false)
    const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([])
    const [dialogDataType, setDialogDataType] = useState('')

    useEffect(() => {
        const retrivePosts = async () => {
            const response = await getPostList()
            if (response){
                const topics = response[0].trending_topics
                setTrendingTopics(topics.sort((itemA:TrendingTopic, itemB:TrendingTopic) => itemA.trends_position - itemB.trends_position))
            }
        }
        retrivePosts()
    }, [setTrendingTopics])

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
                                <TrendingTopic key={topic.trends_position}>
                                    <TopicRank>{topic.trends_position}º</TopicRank>
                                    <TopicName>{topic.title}</TopicName>
                                </TrendingTopic>
                            )
                        })}
                    </TrendingTopicsList>
                </TrendingTopicsWrapper>
            </InformationWrapper>
        </PostContent>
    )
}