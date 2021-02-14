import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import InformationButton from '../InformationButton';

import defaultImage from '../../../assets/images/default.svg'

const setup = (customProps = {}) => {
    const props = {
        logoImage: defaultImage,
        buttonText: "Default Text",
        ...customProps
    }
    const wrapper = render(<InformationButton {...props} />);
    return { wrapper };
  };
  
describe("InformationButton", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders with correct information", () => {
        const { wrapper } = setup()
        const { getByText, getByTestId } = wrapper
        getByText('Default Text')
        expect(getByTestId('information-button-logo')).toBeVisible()
    })
})