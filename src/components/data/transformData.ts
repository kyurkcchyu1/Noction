import { TBackendData } from "./types";

export const transformData = (data: TBackendData) => {
  return {
    ...data,
    EMAIL_PORT: +data?.EMAIL_PORT,
    REFRESH_SECRET_TTL: Number(data?.JWT_SECRET_TTL?.match(/\d+(?=d)/)),
    LDAP_ENABLED: data?.LDAP_ENABLED === "true",
    OAUTH_GOOGLE_ENABLED: data?.OAUTH_GOOGLE_ENABLED === "true",
  };
};
