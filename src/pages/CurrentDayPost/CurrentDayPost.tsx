import React from 'react'

import { PostContent, DateIndicator, TwitterData, VideoData, NewsData } from './styles';

import InformationButton from '../../components/InformationButton'

import twitterLogo from '../../assets/images/twitter.svg';
import youtubeLogo from '../../assets/images/youtube.svg';

export default function CurrentDayPost(){
    const twitterProps = {
        logoImage: twitterLogo, 
        buttonText: 'Tweets',
    }

    const youtubeProps = {
        logoImage: youtubeLogo,
        buttonText: 'Videos',
    }
    
    return (
        <PostContent>
            <DateIndicator>NOW</DateIndicator>
            <TwitterData data-testid="twitter-data">
                <InformationButton {...twitterProps} />
            </TwitterData>
            <VideoData data-testid="video-data">
                <InformationButton {...youtubeProps} />
            </VideoData>
            <NewsData data-testid="news-data">
            </NewsData>
        </PostContent>
    )
}