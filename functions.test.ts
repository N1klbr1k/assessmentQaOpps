const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("shuffleArray should return an array", () => {
    let testArray = shuffleArray([1, 2, 3, 4, 5, 6]);
    expect(typeof testArray).toBe([]);
  });
  test("ShuffleArray should have all elements of original array", () => {
    const expected = [1, 2, 3, 4, 5, 6];
    let testArray = shuffleArray(...expected);
    expect(testArray).toEqual(expect.arrayContaining(expected));
  });
});
