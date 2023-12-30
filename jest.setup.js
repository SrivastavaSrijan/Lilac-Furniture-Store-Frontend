jest.mock("next/router", () => require("next-router-mock"));

import "@testing-library/jest-dom";
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  takeRecords() {}

  unobserve() {}
};
