import { jwtExtractor } from "../index";

describe("the extractor", () => {
  const testToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  test("it should be able to extract a property from the payload", () => {
    expect(jwtExtractor(testToken, "sub")).toBe("1234567890");
  });

  test("it should be able to extract a different property from the payload", () => {
    expect(jwtExtractor(testToken, "name")).toBe("John Doe");
  });

  test("it should return undefined for a property that doesn't exist", () => {
    expect(
      jwtExtractor(testToken, "randomNonExistentProperty")
    ).toBeUndefined();
  });
});
