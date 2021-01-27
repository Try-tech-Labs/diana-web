import React from 'react'

import { PostContent, DateIndicator, TwitterData, VideoData, NewsData } from './styles';

import InformationButton from '../../components/InformationButton'

import twitterLogo from '../../assets/images/twitter.svg';

export default function CurrentDayPost(){
    const twitterProps = {
        logoImage: twitterLogo, 
        buttonText: 'Tweets'
    }
    return (
        <PostContent>
            <DateIndicator>NOW</DateIndicator>
            <TwitterData data-testid="twitter-data">
                <InformationButton {...twitterProps} />
            </TwitterData>
            <VideoData data-testid="video-data">
            </VideoData>
            <NewsData data-testid="news-data">
            </NewsData>
        </PostContent>
    )
}