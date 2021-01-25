import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import NavigationBar from "../../components/NavigationBar";

const setup = () => {
  const wrapper = render(<NavigationBar />);
  return { wrapper };
};

describe("NavigationBar", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", () => {
    const { wrapper } = setup();
    const { getByText } = wrapper;
    getByText("DIANA")
    getByText("Home");
    getByText("News letter");
    getByText("About");
  });
});