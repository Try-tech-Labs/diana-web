import React from 'react'

import { PostContent, DateIndicator, TwitterData, VideoData, NewsData, InformationWrapper, ButtonList, TrendingTopicsWrapper, TrendingTopicTitle, TrendingTopicsList, TopicRank, TopicName, TrendingTopic } from './styles';

import InformationButton from '../../components/InformationButton'

import twitterLogo from '../../assets/images/twitter.svg';
import youtubeLogo from '../../assets/images/youtube.svg';
import newspaperLogo from '../../assets/images/newspaper.svg';

export default function CurrentDayPost(){
    const twitterProps = {
        logoImage: twitterLogo, 
        buttonText: 'Tweets',
    }

    const youtubeProps = {
        logoImage: youtubeLogo,
        buttonText: 'Videos',
    }

    const newsProps = {
        logoImage: newspaperLogo,
        buttonText: 'News',
    }

    const trendingTopics =[
        {
            topic_position: 1,
            topic_name: 'Dinis'
        },
        {
            topic_position: 2,
            topic_name: 'Yuri Alberto'
        },
        {
            topic_position: 3,
            topic_name: 'Claudinho'
        },
        {
            topic_position: 4,
            topic_name: 'Morumbi'
        },
        {
            topic_position: 5,
            topic_name: 'Daniel Alves'
        },
    ]
    
    return (
        <PostContent>
            <DateIndicator>NOW</DateIndicator>
            <InformationWrapper>
                <ButtonList>
                    <TwitterData data-testid="twitter-data">
                        <InformationButton {...twitterProps} />
                    </TwitterData>
                    <VideoData data-testid="video-data">
                        <InformationButton {...youtubeProps} />
                    </VideoData>
                    <NewsData data-testid="news-data">
                        <InformationButton {...newsProps} />
                    </NewsData>
                </ButtonList>
                <TrendingTopicsWrapper>
                    <TrendingTopicTitle>Top 5 trending topics</TrendingTopicTitle>
                    <TrendingTopicsList>
                        {trendingTopics.map(topic => {
                            return (
                                <TrendingTopic>
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