import { payloadProperty, payload, TokenDecoder } from "../index";
describe("token decoders", () => {
  const testToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  const poorlyFormedToken = "abc.def.ghi";
  const onePartToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

  describe("function version", () => {
    describe("payload", () => {
      test("it should be able to return all of the properties", () => {
        expect(payload(testToken)).toEqual({
          iat: 1516239022,
          name: "John Doe",
          sub: "1234567890",
        });
      });

      test("it should return undefined for a poorly formed jwt", () => {
        expect(payload(poorlyFormedToken)).toBeUndefined();
      });
      test("it should return undefined a jwt with too few sections", () => {
        expect(payload(onePartToken)).toBeUndefined();
      });
    });

    describe("payload property", () => {
      test("it should be able to extract a property from the payload", () => {
        expect(payloadProperty(testToken, "sub")).toBe("1234567890");
      });

      test("it should be able to extract a different property from the payload", () => {
        expect(payloadProperty(testToken, "name")).toBe("John Doe");
      });

      test("it should return undefined for a property that doesn't exist", () => {
        expect(
          payloadProperty(testToken, "randomNonExistentProperty")
        ).toBeUndefined();
      });

      test("it should return undefined for a poorly formed jwt", () => {
        expect(payloadProperty(poorlyFormedToken, "sub")).toBeUndefined();
      });
      test("it should return undefined a jwt with too few sections", () => {
        expect(payloadProperty(onePartToken, "sub")).toBeUndefined();
      });
    });
  });

  describe("class version", () => {
    describe("payload", () => {
      test("it should be able to return all of the properties using the getPayload method", () => {
        const Extractor = new TokenDecoder(testToken);

        expect(Extractor.getPayload()).toEqual({
          iat: 1516239022,
          name: "John Doe",
          sub: "1234567890",
        });
      });

      test("it should return undefined for a poorly formed jwt", () => {
        const Extractor = new TokenDecoder(poorlyFormedToken);

        expect(Extractor.getPayload()).toBeUndefined();
      });
      test("it should return undefined a jwt with too few sections", () => {
        const Extractor = new TokenDecoder(onePartToken);

        expect(Extractor.getPayload()).toBeUndefined();
      });
    });
    describe("payload properties", () => {
      test("it should be able to extract a property from the payload", () => {
        const Extractor = new TokenDecoder(testToken);
        expect(Extractor.getProperty("sub")).toBe("1234567890");
      });

      test("it should be able to extract a different property from the payload", () => {
        const Extractor = new TokenDecoder(testToken);
        expect(Extractor.getProperty("name")).toBe("John Doe");
      });

      test("it should return undefined for a poorly formed jwt", () => {
        const Extractor = new TokenDecoder(poorlyFormedToken);
        expect(Extractor.getProperty("name")).toBeUndefined();
      });
      test("it should return undefined a jwt with too few sections", () => {
        const Extractor = new TokenDecoder(onePartToken);
        expect(Extractor.getProperty("name")).toBeUndefined();
      });

      test("it should return undefined for a property that doesn't exist", () => {
        const Extractor = new TokenDecoder(testToken);

        expect(
          Extractor.getProperty("randomNonExistentProperty")
        ).toBeUndefined();
      });

      test("should be able to change the token and get new properties", () => {
        const modifiedToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcmV2aW91c2x5Tm9uRXhpc3RlbnRQcm9wZXJ0eSI6InRlc3RWYWx1ZTEifQ.5l2Afrf7FD_l-E1vUb2GWgHbtv_O-iN0-7mrFrjUWGY";

        const propertyName = "previouslyNonExistentProperty";
        const Extractor = new TokenDecoder(testToken);

        expect(Extractor.getProperty(propertyName)).toBeUndefined();

        Extractor.setToken(modifiedToken);

        expect(Extractor.getProperty(propertyName)).toBe("testValue1");
      });
    });
  });
});
