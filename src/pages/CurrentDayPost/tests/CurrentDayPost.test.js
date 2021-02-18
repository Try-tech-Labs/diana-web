import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, fireEvent, waitForElement } from "@testing-library/react";

import CurrentDayPost from '../CurrentDayPost';

import { getPostList } from '../../../services/services'

import { posts } from '../../../utils/tests/__mocks__/posts'


jest.mock('../../../services/services', () => ({
    getPostList: jest.fn(),
}))

const setup = () => {
    const wrapper = render(<CurrentDayPost />);
    return { wrapper };
};

describe("Current day post", () => {
    afterEach(() => {
      cleanup();
    });

    beforeEach(() => {
        getPostList.mockImplementation(() => Promise.resolve(posts))
    })

    it("renders with correct information", async () => {
        const { wrapper } = setup();
        const { getByText, getByTestId } = wrapper;
        getByText('NOW')
        getByTestId('twitter-data')
        getByTestId('video-data')
        getByTestId('news-data')
        getByText('Tweets')
        getByText('Videos')
        getByText('News')
        await waitForElement(() => getByText('#VeggieFood'))
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
