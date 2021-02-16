import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalWrapper = styled(Modal)`
    background: black;
    width: 90%;
    height: 80%;
    margin: 0 auto;
    margin-top: 10vh;
    border-radius: 10px;
    &:focus{
        outline: unset;
    }
`

export const ModalHeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 14fr 1fr;    
    border: 2px solid;
    border-radius: 10px 10px 0 0;
`

export const ModalHeader = styled.h1`
    text-align: center;
    line-height: 77px;
    margin-left: 4rem;
    color: white;   
`

export const ModalContent = styled.div`
    height: 85%;
    display: grid;
    grid-template-columns: 4fr 2fr;
`

export const InformationList = styled.div`
    overflow: auto;
    margin: 2vh 2vw 0 2vw;
`

export const TopicsList  = styled.div`
    background-color: #0F0C0A;
    margin: 2vh 2vh 0;
`
export const TrendingTopicsTitle = styled.h1`
    color: white;
    text-align: center;
    padding: 14px 14px 7px 14px;
    font-weight: bold;
    border-bottom: 1px solid white;
    width: 98%;
    margin: 0 auto;
    margin-bottom: 20px;
`

interface TrendingTopicWrapperProps {
    active: boolean | null
}

export const TrendingTopicWrapper = styled.div<TrendingTopicWrapperProps>`
    margin: 0 auto;
    width: 98%;
    height: 16%;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 1vw 1vw 1vw 1vw;
    background-color: ${({active}) => active ? '#0F0C0A' : '#fff'};
    color: ${({active}) => active ? '#fff' : '#000'};
    border: ${({active}) => active ? '1px solid #fff': '#000'};
    ${({active}) => active ? '' : 'border-bottom: 1px solid #000'};
    cursor: pointer;
    &:hover{
        background-color: #0F0C0A;
        color: #fff;
        border: 1px solid #fff;
    }
` 
export const TrendingTopicRankLabel = styled.h2``

export const TrendingTopicName = styled.h2``

interface ItemRowProps {
    odd: boolean | undefined
}

export const ItemRow = styled.div<ItemRowProps>`
    display: grid;
    grid-template-rows: 1fr 4fr;
    height: fit-content;
    padding: 1rem;
    background: white;
    color: black;
    ${({odd}) => odd && (`
        background: #0F0C0A;
        color: white;
    `)}
`

export const ItemHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
`

export const ItemContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`

export const ItemTitle = styled.h3`
    font-size: 2rem;
    font-weight: 400;
`

export const ItemSpecialLabel = styled.span``

export const ItemCreatedAt = styled.span``

interface ItemContentWrapper{
    visualContent: boolean | undefined
}

export const ItemContentWrapper = styled.div<ItemContentWrapper>`
    display: ${({visualContent}) => visualContent ? 'grid' : 'block'};
    ${({visualContent}) => visualContent ? 'grid-template-columns: 1fr 1fr' : ''};
`

interface ItemThumbProps {
    dataURL: string | undefined
}

export const ItemThumb = styled.div<ItemThumbProps>`
    background: URL(${({dataURL})=> dataURL ? dataURL : ''});
    ${({dataURL})=> dataURL ? ('background-position: center; background-repeat: no-repeat; background-size: contain;') : ''}
`

export const ItemVideo = styled.iframe`
    height: 100%;
    align-self: center;
`

export const ItemText = styled.p``

interface ItemActionButtonProps{
    buttonColor: string | undefined,
    odd: boolean | undefined
}

export const ItemActionButton = styled.button<ItemActionButtonProps>`
    height: fit-content;
    padding: 16px;
    margin: 0 auto;
    align-self: center;
    background: ${({buttonColor}) => buttonColor ? buttonColor : '#ADACAC'};
    color: white;
    box-shadow: 4px 4px 2px ${({odd}) => odd ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)'};
    border: unset;
    border-radius: 10px;
    font-size: 1.5rem;
    line-height: 20px;
    font-weight: bold;
    &:active{
        box-shadow: 2px 2px 4px ${({odd}) => odd ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)'};
    }
    &:focus{
        outline: unset;
    }
`