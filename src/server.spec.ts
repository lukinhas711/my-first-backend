import sayHelloWorld from "./server";

describe("Testing my hallo word", () => {
  it("Should call sayHelloWorld and return my msg", () => {
    const msg = sayHelloWorld("Hello World");

    expect(msg).toBe("Hello World");
  });
});
