import React, { useState, useMemo, useCallback } from 'react'

import { 
    ModalWrapper, 
    ModalHeader, 
    ModalHeaderWrapper, 
    ModalContent, 
    InformationList, 
    TopicsList, 
    TrendingTopicWrapper, 
    TrendingTopicRankLabel, 
    TrendingTopicName, 
    TrendingTopicsTitle, 
    ItemRow, 
    ItemHeader, 
    ItemContent,
    ItemTitle,
    ItemSpecialLabel,
    ItemCreatedAt,
    ItemText,
    ItemContentWrapper,
    ItemThumb,
    ItemVideo,
    ItemActionButton,
} from './styles'

import CloseButton from '../../components/CloseButton'

interface TrendingTopic {
    trends_position: number,
    title: string
}

interface ContentItem {
    id: number,
    itemTitle: string,
    itemLabel: string,
    itemCreatedAt: string,
    itemVideo: string,
    itemImage: string,
    itemText: string,
    itemExternalURL: string
}

interface InformationDialogProps {
    closeModal: () => void,
    trendingTopics: TrendingTopic[],
    dataType: string,
}

export default function InformationDialog (props:InformationDialogProps){

    const [items, setItems] = useState<ContentItem[]>([{
        id: 1,
        itemTitle: 'Item title',
        itemLabel: 'Item label',
        itemCreatedAt: 'Item created at',
        itemVideo: '',
        itemImage: '',
        itemText: 'Item text',
        itemExternalURL: 'Item external URL',
    },
    {
        id: 2,
        itemTitle: 'Item title',
        itemLabel: 'Item label',
        itemCreatedAt: 'Item created at',
        itemVideo: '',
        itemImage: '',
        itemText: 'Item text',
        itemExternalURL: 'Item external URL',
    }])

    const getButtonColor = useMemo(() => {
        if(props.dataType){
            const colorsMap = [
                {label: 'tweet', color: '#3498DB'},
                {label:'video', color: '#CD201F'},
                {label:'news', color: '#505D61'}
            ]
            const option = colorsMap.find(option => option.label === props.dataType )
            return option?.color
        }
        return
    }, [props.dataType])

    const getButtonText = useMemo(() => {
        if(props.dataType){
            const labelsMap = [
                {label: 'tweet', text: 'on Twitter'},
                {label:'video', text: 'on Youtube'},
                {label:'news', text: 'more'}
            ]
            const option = labelsMap.find(option => option.label === props.dataType)
            return option?.text
        }
        return 'original'
    }, [props.dataType])

    
    const getDialogTitle = useMemo(() => {
        if(props.dataType){
            const labelsMap = [
                {label: 'tweet', text: 'Tweets'},
                {label:'video', text: 'Videos'},
                {label:'news', text: 'News'}
            ]
            const option = labelsMap.find(option => option.label === props.dataType)
            return option?.text
        }
        return 'original'
    }, [props.dataType])

    const videoDataType = useMemo(() => {
        return props.dataType === 'video'
    }, [props.dataType])

    const newsDataType = useMemo(() => {
        return props.dataType === 'news'
    }, [props.dataType])

    const getDataURL = useCallback((item:ContentItem) => {
        if (videoDataType && item.itemVideo){
            return item.itemVideo
        }
        if (newsDataType && item.itemImage){
            return item.itemImage
        }
        return
    }, [videoDataType, newsDataType])

    return (
        <ModalWrapper isOpen onRequestClose={props.closeModal} ariaHideApp={false}>
            <ModalHeaderWrapper>
                <ModalHeader>Today's {getDialogTitle}</ModalHeader>
                <CloseButton handleClick={props.closeModal}/>
            </ModalHeaderWrapper>
            <ModalContent>
                <InformationList>
                    {
                        items.map((item, index) => {
                            const props = { 
                                odd: (index % 2 !== 0),
                                visualContent: (item.itemImage !== null || item.itemVideo !== null),
                                buttonColor: getButtonColor,
                                dataURL: getDataURL(item)
                            }
                            return (
                                <ItemRow key={item.id} {...props}>
                                    <ItemHeader>
                                        <ItemTitle>Item Title</ItemTitle>
                                        <ItemSpecialLabel>Item Special Label</ItemSpecialLabel>
                                        <ItemCreatedAt>Item Created at</ItemCreatedAt>
                                    </ItemHeader>
                                    <ItemContent>
                                        <ItemContentWrapper {...props}>
                                            {videoDataType && (
                                                <ItemVideo data-testid="video-player" src={item.itemVideo}></ItemVideo>
                                            )}
                                            {newsDataType && (
                                                <ItemThumb data-testid="thumb-image" dataURL={getDataURL(item)}></ItemThumb>
                                            )}                                        
                                            <ItemText>Item text</ItemText>
                                        </ItemContentWrapper>
                                        <ItemActionButton {...props}>Show {getButtonText}</ItemActionButton>
                                    </ItemContent>
                                </ItemRow>
                            )
                        })
                    }
                </InformationList>
                <TopicsList>
                    <TrendingTopicsTitle>Select a topic</TrendingTopicsTitle>
                    {
                        props.trendingTopics.map((item, index) => {
                            const props = {
                                isFirst: (index === 0 ? true : null),
                                active: (index === 0 ? true : null)
                            }
                            return (
                                <TrendingTopicWrapper key={item.trends_position} active={props.active}>
                                    <TrendingTopicRankLabel>{item.trends_position}º</TrendingTopicRankLabel>
                                    <TrendingTopicName> - {item.title}</TrendingTopicName>
                                </TrendingTopicWrapper>
                            )
                        })
                    }
                </TopicsList>
            </ModalContent>
        </ModalWrapper>
    )
}