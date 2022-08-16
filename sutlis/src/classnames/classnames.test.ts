import { classnames } from "./index";

test("classnames should return string without false and passed", () => {
  expect(classnames("test", false, "", 1, "test1")).toBe("test 1 test1");
});

test("classnames should return string without false and null and passed", () => {
  expect(classnames("test", false, "", null, 1, "test1")).toBe("test 1 test1");
});

test("classnames should return string without false and null and undefined and passed", () => {
  expect(classnames("test", false, "", null, 1, "test1")).toBe("test 1 test1");
});
