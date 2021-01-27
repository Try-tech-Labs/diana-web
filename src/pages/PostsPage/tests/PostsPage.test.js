import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import PostsPage from "../PostsPage";

const setup = () => {
  const wrapper = render(<PostsPage />);
  return { wrapper };
};

describe("Posts page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", () => {
    const { wrapper } = setup();
    const { getByTestId } = wrapper;
    getByTestId("posts-page");
  });

  it("renders the navigationbar", () => {
    const { wrapper } = setup();
    const { getByText } = wrapper;
    getByText("DIANA");
    getByText("Home");
    getByText("News letter");
    getByText("About");
  });

  it('renders the current day post section', () =>{
    const { wrapper } = setup();
    const { getByText } = wrapper;
    getByText("NOW")
  })
});