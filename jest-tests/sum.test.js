const { extractExpectedAssertionsErrors } = require("expect");
const sum = require("./sum.js");

test("testing addition with numbers!", () => {
  expect(sum(1, 2)).toBe(3);
});

test("testing addition with variables!", () => {
  let a = 2;
  let b = 10;
  expect(sum(a, b)).toBe(12);
});

test("testing object assignment with toBe", () => {
  {
    const data = {
      one: 1,
      two: 2,
    };
    expect(sum(data.one, data.two)).toBe(3);
    expect(data).toEqual({ one: 1, two: 2 });
  }
});

test("testing object assignment with toEqual", () => {
  {
    const data = {
      one: 1,
      two: 2,
    };
    expect(data).toEqual({ one: 1, two: 2 });
  }
});

test("testing that the numbers are not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("testing the booleans and truthiness with null", () => {
  const n = null;
  expect(n).toEqual(null);
  expect(n).toBe(null);
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("test imprecise rounding up", () => {
  const value = 2 + 2;
  expect(value).toBe(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toEqual(4);
});

test("Hallo my name is Aleks", () => {
  expect("Hallo my name is Aleks").toMatch(/Aleks/);
});

test("Hallo my name is not Basti", () => {
  expect("Hallo my name is not Basti").not.toMatch(/Aleks/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("List should contain milk", () => {
  expect(shoppingList).toContain("milk");
});

compileAndroidCode = () => {
  throw new Error("You are using the wrong JDK");
};

test("compiling android goeas like expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
});
