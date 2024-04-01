import { transformData } from "./transformData";
import { data } from "../data";

describe("transforming values", () => {
  it("should", () => {
    const result = {
      ...data,
      JWT_SECRET_TTL: 86400,
      EMAIL_PORT: 1025,
      REFRESH_SECRET_TTL: 7,
      OAUTH_GOOGLE_ENABLED: true,
      LDAP_ENABLED: false,
    };
    expect(transformData(data)).toEqual(result);
  });
});
