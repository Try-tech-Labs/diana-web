import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, fireEvent } from "@testing-library/react";

import InformationDialog from '../InformationDialog'

const setup = (customProps = {}) => {
    const props = {
        closeModal: jest.fn(),
        trendingTopics: [{
            trends_position: 1,
            title: 'Newest topic'
        }],
        dataType: '',
        ...customProps,
    }
    const wrapper = render(<InformationDialog {...props} />);
    return { wrapper, props };
}

describe("InformationButton", () => {
    afterEach(() => {
        cleanup();
    });

    it('renders with correct information for news', () => {
        const { wrapper } = setup({dataType: 'news'})
        const { getByText, queryByTestId, queryAllByTestId, queryAllByText, getByTestId } = wrapper
        getByText("Today's News")
        expect(getByTestId('close-button')).toBeVisible()
        expect(queryAllByText('Item Title').length).toBe(2)
        expect(queryAllByText('Item Special Label').length).toBe(2)
        expect(queryAllByText('Item Created at').length).toBe(2)
        expect(queryByTestId('video-player')).toBeNull()
        expect(queryAllByTestId('thumb-image').length).toBe(2)
        expect(queryAllByText("Show more").length).toBe(2)
        getByText('1º')
        getByText('- Newest topic')
    })

    it('renders with correct information for videos', () => {
        const { wrapper } = setup({dataType: 'video'})
        const { getByText, queryByTestId, queryAllByTestId, queryAllByText, getByTestId } = wrapper
        getByText("Today's Videos")
        expect(getByTestId('close-button')).toBeVisible()
        expect(queryAllByText('Item Title').length).toBe(2)
        expect(queryAllByText('Item Special Label').length).toBe(2)
        expect(queryByTestId('Item Created at')).toBeNull()
        expect(queryAllByTestId('video-player').length).toBe(2)
        expect(queryByTestId('thumb-image')).toBeNull()
        expect(queryAllByText("Show on Youtube").length).toBe(2)
        getByText('1º')
        getByText('- Newest topic')
    })

    it('renders with correct information for tweets', () => {
        const { wrapper } = setup({dataType: 'tweet'})
        const { getByText, queryByTestId, queryAllByText, getByTestId } = wrapper
        getByText("Today's Tweets")
        expect(getByTestId('close-button')).toBeVisible()
        expect(queryAllByText('Item Title').length).toBe(2)
        expect(queryAllByText('Item Special Label').length).toBe(2)
        expect(queryByTestId('Item Created at')).toBeNull()
        expect(queryByTestId('video-player')).toBeNull()
        expect(queryByTestId('thumb-image')).toBeNull()
        expect(queryAllByText("Show on Twitter").length).toBe(2)
        getByText('1º')
        getByText('- Newest topic')
    })

    it('calls close callback on click close button', () => {
        const { wrapper, props } = setup({dataType: 'tweet'})
        const { getByTestId } = wrapper
        const closeButton = getByTestId('close-button')
        fireEvent.click(closeButton)

        expect(props.closeModal).toBeCalled()
    })
});