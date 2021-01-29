import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react';

import InformationButton from '../../components/InformationButton';

import twitterLogo from '../../assets/images/twitter.svg';
import youtubeLogo from '../../assets/images/youtube.svg';


const twitterProps = {
    logoImage: twitterLogo, 
    buttonText: 'Tweets',
}

const youtubeProps = {
    logoImage: youtubeLogo,
    buttonText: 'Videos',
}

storiesOf('InformationButton', module)
.add('Twitter Button', () => <InformationButton {...twitterProps} />)
.add('Youtube Button', () => <InformationButton {...youtubeProps} />)