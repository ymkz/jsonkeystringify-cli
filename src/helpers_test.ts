import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { jsonkeystringify } from "./helpers.ts";

Deno.test("jsonkeystringify()", () => {
  const obj = { hello: "hello", world: "world" };
  const actual = jsonkeystringify(obj);
  const expected = "hello world";
  assertEquals(actual, expected);
});
