import { payloadExtractor, PayloadExtractor } from "../index";
describe("payload extractor", () => {
  const testToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  describe("function version", () => {
    test("it should be able to extract a property from the payload", () => {
      expect(payloadExtractor(testToken, "sub")).toBe("1234567890");
    });

    test("it should be able to extract a different property from the payload", () => {
      expect(payloadExtractor(testToken, "name")).toBe("John Doe");
    });

    test("it should return undefined for a property that doesn't exist", () => {
      expect(
        payloadExtractor(testToken, "randomNonExistentProperty")
      ).toBeUndefined();
    });
  });

  describe("class version", () => {
    test("it should be able to extract a property from the payload", () => {
      const Extractor = new PayloadExtractor(testToken);
      expect(Extractor.getProperty("sub")).toBe("1234567890");
    });

    test("it should be able to extract a different property from the payload", () => {
      const Extractor = new PayloadExtractor(testToken);
      expect(Extractor.getProperty("name")).toBe("John Doe");
    });

    test("it should return undefined for a property that doesn't exist", () => {
      const Extractor = new PayloadExtractor(testToken);

      expect(
        Extractor.getProperty("randomNonExistentProperty")
      ).toBeUndefined();
    });

    test("should be able to change the token and get new properties", () => {
      const modifiedToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcmV2aW91c2x5Tm9uRXhpc3RlbnRQcm9wZXJ0eSI6InRlc3RWYWx1ZTEifQ.5l2Afrf7FD_l-E1vUb2GWgHbtv_O-iN0-7mrFrjUWGY";

      const Extractor = new PayloadExtractor(testToken);

      expect(
        Extractor.getProperty("previouslyNonExistenProperty")
      ).toBeUndefined();

      Extractor.changeToken(modifiedToken);

      expect(Extractor.getProperty("previouslyNonExistenProperty")).toBe(
        "testValue1"
      );
    });
  });
});
