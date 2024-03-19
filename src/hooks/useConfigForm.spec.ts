import { data } from "../data";
import { convertingValues } from "./convertingValues";
import { updateValues } from "./updateValues";

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

describe("updating values", () => {
  test("updateValues", () => {
    const initialValues = {
      ...data,
      EMAIL_PORT: 1025,
      REFRESH_SECRET_TTL: 7,
      OAUTH_GOOGLE_ENABLED: true,
      LDAP_ENABLED: false,
    };
    const updatedValues = {
      ...data,
      EMAIL_PORT: 1026,
      REFRESH_SECRET_TTL: 8,
      OAUTH_GOOGLE_ENABLED: false,
      LDAP_ENABLED: true,
    };
    const result = {
      EMAIL_PORT: 1026,
      REFRESH_SECRET_TTL: 8,
      OAUTH_GOOGLE_ENABLED: false,
      LDAP_ENABLED: true,
    };
    expect(updateValues(initialValues, updatedValues)).toEqual(result);
  });
});
