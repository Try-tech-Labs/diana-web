import React from 'react'

import { Link, ButtonImage, LinkContent, LinkText} from './styles'

interface InformationButton {
    logoImage: string,
    buttonText: string
}

const InformationButton: React.FunctionComponent<InformationButton>= ({ logoImage, buttonText }) => {
    const buttonProps = {
        backgroundImage: logoImage
    }
    return(
        <Link href="/">
            <LinkContent>
                <ButtonImage data-testid="information-button-logo" {...buttonProps} />
                <LinkText>{buttonText}</LinkText>
            </LinkContent>
        </Link>
    )
}

export default InformationButton;