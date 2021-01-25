import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import PostsPage from "../../pages/PostsPage";

const setup = () => {
  const wrapper = render(<PostsPage />);
  return { wrapper };
};

describe("Landing page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", () => {
    const { wrapper } = setup();
    const { getByTestId } = wrapper;
    getByTestId("posts-page");
  });
});
