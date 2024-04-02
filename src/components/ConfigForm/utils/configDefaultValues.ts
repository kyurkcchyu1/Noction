import { GetConfigProps } from "../types";

export const configDefaultValues = (data: GetConfigProps) => {
  return {
    ...data,
    EMAIL_PORT: +data?.EMAIL_PORT,
    JWT_SECRET_TTL: +data?.JWT_SECRET_TTL,
    REFRESH_SECRET_TTL: Number(data?.REFRESH_SECRET_TTL?.match(/\d+(?=d)/)),
    LDAP_ENABLED: data?.LDAP_ENABLED === "true",
    OAUTH_GOOGLE_ENABLED: data?.OAUTH_GOOGLE_ENABLED === "true",
  };
};
