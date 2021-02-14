import React from 'react'

import CloseIcon from '../../assets/icons/close.svg'

import {Button, ButtonIcon} from './styles'

interface ButtonsProps {
    handleClick: () => void
}

export default function CloseButton(props:ButtonsProps){
    return <Button data-testid='close-button' onClick={props.handleClick}>
        <ButtonIcon src={CloseIcon} />
    </Button>
}