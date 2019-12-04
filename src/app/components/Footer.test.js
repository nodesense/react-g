
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Footer from "./Footer";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
      localStorage.setItem("HI", "welcome");
    render(<Footer />, container);
  });
  expect(container.textContent).toBe("Copyrights, Reactapp");

  expect(localStorage.getItem("HI")).toBe("welcome")
  act(() => {
    render(<Footer title="ProductApp" />, container);
  });
  expect(container.textContent).toBe("Copyrights, ProductApp");
 
});