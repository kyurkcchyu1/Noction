import { data } from "../data";
import { convertingValues } from "../utils/convertingValues";

describe("converting values to backend format", () => {
  test("convertingValues", () => {
    const inputs = {
      ...data,
      EMAIL_PORT: 1025,
      REFRESH_SECRET_TTL: 7,
      OAUTH_GOOGLE_ENABLED: true,
      LDAP_ENABLED: false,
    };
    const result = {
      ...data,
      EMAIL_PORT: "1025",
      REFRESH_SECRET_TTL: "7d",
      OAUTH_GOOGLE_ENABLED: "true",
      LDAP_ENABLED: "false",
    };
    expect(convertingValues(inputs)).toEqual(result);
  });
});
