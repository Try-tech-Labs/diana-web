import React from 'react';

import { HeaderContainer, MenuOptionsWrapper, MenuOption, HeaderTitle } from './styles'

export default function NavigationBar(){
    return (
        <HeaderContainer>
            <HeaderTitle>DIANA</HeaderTitle>
            <MenuOptionsWrapper>
                <MenuOption href="/">Home</MenuOption>
                <MenuOption href="/">News letter</MenuOption>
                <MenuOption href="/">About</MenuOption>
            </MenuOptionsWrapper>
        </HeaderContainer>
    )
}