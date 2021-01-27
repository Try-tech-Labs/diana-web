import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import CurrentDayPost from '../CurrentDayPost'

import { ContentWrapper, PageBackground, PostsWrapper } from './styles'

export default function PostsPage(){
    return (
        <ContentWrapper data-testid='posts-page' id='posts'>
            <PageBackground />
            <NavigationBar />
            <PostsWrapper>
                <CurrentDayPost />
            </PostsWrapper>
        </ContentWrapper>
    )
}