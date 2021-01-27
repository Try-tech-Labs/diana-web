import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

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
})
