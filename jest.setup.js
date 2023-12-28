jest.mock("next/router", () => require("next-router-mock"));

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  takeRecords() {}

  unobserve() {}
};
