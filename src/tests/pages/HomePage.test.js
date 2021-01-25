import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import HomePage from "../../pages/HomePage";

const setup = () => {
  const wrapper = render(<HomePage />);
  return { wrapper };
};

describe("Home page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", () => {
    const { wrapper } = setup();
    const { getByText, getByTestId } = wrapper;
    getByText("DIANA");
    getByText("YOUR NEW WAY TO CONSUME CONTENT");
    getByTestId("arrow")
  });
});
