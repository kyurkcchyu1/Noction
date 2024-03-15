import { z } from "zod";

export type Inputs = {
  APP_URL: string;
  OAUTH_GOOGLE_ENABLED: boolean;
  OAUTH_GOOGLE_CLIENT_ID: string;
  OAUTH_GOOGLE_CLIENT_SECRET: string;
  JWT_SECRET: string;
  JWT_SECRET_TTL: string;
  REFRESH_SECRET: string;
  REFRESH_SECRET_TTL: number;
  HASH_SECRET: string;
  LDAP_ENABLED: boolean;
  LDAP_URL: string;
  LDAP_BIND_DN: string;
  EMAIL_HOST: string;
  EMAIL_PORT: number;
};

export const schema = z.object({
  APP_URL: z.string(),
  OAUTH_GOOGLE_ENABLED: z.boolean(),
  OAUTH_GOOGLE_CLIENT_ID: z.string(),
  OAUTH_GOOGLE_CLIENT_SECRET: z.string(),
  JWT_SECRET: z.string(),
  JWT_SECRET_TTL: z.string(),
  REFRESH_SECRET: z.string(),
  REFRESH_SECRET_TTL: z
    .number()
    .min(0, "Min value is 0")
    .max(365, "Max value is 365"),
  HASH_SECRET: z.string(),
  LDAP_ENABLED: z.boolean(),
  LDAP_URL: z.string(),
  LDAP_BIND_DN: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.number(),
});
