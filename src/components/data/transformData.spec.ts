import { transformData } from "./index";
import { data } from "./index";

describe("transforming values", () => {
  test("transformingValues", () => {
    const result = {
      ...data,
      EMAIL_PORT: 1025,
      REFRESH_SECRET_TTL: 7,
      OAUTH_GOOGLE_ENABLED: true,
      LDAP_ENABLED: false,
    };
    expect(transformData(data)).toEqual(result);
  });
});
