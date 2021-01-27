import React from 'react'

import { PostContent, DateIndicator, TwitterData, VideoData, NewsData } from './styles';


export default function CurrentDayPost(){
    return (
        <PostContent>
            <DateIndicator>NOW</DateIndicator>
            <TwitterData data-testid="twitter-data"></TwitterData>
            <VideoData data-testid="video-data"></VideoData>
            <NewsData data-testid="news-data"></NewsData>
        </PostContent>
    )
}