import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { useSubmitHandler } from "./useSubmitHandler";
import { data } from "../staticData";

describe("useSubmitHandler", () => {
  it("should return update values", () => {
    const { result } = renderHook(() => useSubmitHandler(data));
    const { onSubmitHandler } = result.current;

    const payload = {
      ...data,
      JWT_SECRET_TTL: 8000,
      REFRESH_SECRET_TTL: 8,
      EMAIL_PORT: 1026,
      OAUTH_GOOGLE_ENABLED: false,
      LDAP_ENABLED: true,
    };

    const resultBody = onSubmitHandler(payload);

    expect(resultBody).toEqual({
      JWT_SECRET_TTL: "8000",
      REFRESH_SECRET_TTL: "8d",
      EMAIL_PORT: "1026",
      OAUTH_GOOGLE_ENABLED: "false",
      LDAP_ENABLED: "true",
    });
  });
});
