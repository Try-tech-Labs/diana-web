import React from 'react'

import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, fireEvent } from "@testing-library/react";

import CloseButton from '../CloseButton'


const setup = (customProps = {}) => {
    const props = {
        handleClick: jest.fn(),
        ...customProps
    }
    const wrapper = render(<CloseButton {...props} />);
    return { wrapper, props };
  };
  
describe("CloseButton", () => {
    afterEach(() => {
        cleanup();
    });

    it("displays", () => {
        const { wrapper } = setup()
        const { getByTestId } = wrapper
        getByTestId('close-button')
    })

    it('it calls callback function on click', () => {
        const { wrapper, props } = setup()
        const { getByTestId } = wrapper
        const button = getByTestId('close-button')
        fireEvent.click(button)
        expect(props.handleClick).toBeCalled()
    })
})