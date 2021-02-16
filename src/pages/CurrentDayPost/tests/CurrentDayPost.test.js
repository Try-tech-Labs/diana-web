import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, fireEvent, waitForElement } from "@testing-library/react";

import CurrentDayPost from '../CurrentDayPost';

const setup = () => {
    const wrapper = render(<CurrentDayPost />);
    return { wrapper };
};

describe("Current day post", () => {
    afterEach(() => {
      cleanup();
    });

    it("renders with correct information", () => {
        const { wrapper } = setup();
        const { getByText, getByTestId } = wrapper;
        getByText('NOW')
        getByTestId('twitter-data')
        getByTestId('video-data')
        getByTestId('news-data')
    })

    it('renders twitter button', () => {
        const { wrapper } = setup();
        const { getByText } = wrapper;
        getByText('Tweets')
    })

    it('renders videos button', () => {
        const { wrapper } = setup();
        const { getByText } = wrapper;
        getByText('Videos')
    })

    it('renders news button', () => {
        const { wrapper } = setup();
        const { getByText } = wrapper;
        getByText('News')
    })

    it('renders trending topics', () => {
        const { wrapper } = setup();
        const { getByText } = wrapper;
        getByText('Trending topic')
        getByText('Trending topic 2')
    })

    it('shows tweets data dialog on click twitter button', async () => {
        const { wrapper } = setup();
        const { getByText, getByTestId } = wrapper;
        const twitterButton = getByTestId('twitter-data')
        fireEvent.click(twitterButton)
        await waitForElement(() => getByText("Today's Tweets"))
    })

    it('shows videos data dialog on click videos button', async () => {
        const { wrapper } = setup();
        const { getByText, getByTestId } = wrapper;
        const twitterButton = getByTestId('video-data')
        fireEvent.click(twitterButton)
        await waitForElement(() => getByText("Today's Videos"))
    })

    it('shows news data dialog on click news button', async () => {
        const { wrapper } = setup();
        const { getByText, getByTestId } = wrapper;
        const twitterButton = getByTestId('news-data')
        fireEvent.click(twitterButton)
        await waitForElement(() => getByText("Today's News"))
    })
})
