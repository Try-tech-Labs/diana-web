import styled from 'styled-components'

export const Button = styled.button`
    color: unset;
    background: unset;
    margin: unset;
    border: unset;
`

export const ButtonIcon = styled.img`
    background: white;
    border-radius: 50px;
    height: ${props => props.height || '24px'};
    width: ${props => props.width || '24px'};
`