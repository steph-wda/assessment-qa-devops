const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("return an array", () => {
    const testArray = [1, 2, 3, 4, 5];
    const results = shuffleArray(testArray);
    expect(results.constructor.name).toBe("Array"); //tried with toBeInstance but the test failed
  });

  test("returned array is the same legth as the argument sent in", () => {
    const testArray = [1, 2, 3, 4, 5];
    const results = shuffleArray(testArray);
    expect(results.length).toBe(testArray.length);
  });
});
