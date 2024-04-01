import { z } from "zod";
import { TBackendData } from "@components";

export type Inputs = {
  JWT_SECRET_TTL: number;
  REFRESH_SECRET_TTL: number;
  EMAIL_PORT: number;
  OAUTH_GOOGLE_ENABLED: boolean;
  LDAP_ENABLED: boolean;
} & Pick<
  TBackendData,
  | "OAUTH_GOOGLE_CLIENT_SECRET"
  | "OAUTH_GOOGLE_CLIENT_ID"
  | "LDAP_URL"
  | "LDAP_BIND_DN"
>;

export const schema = z.object({
  APP_URL: z.string().url(),
  OAUTH_GOOGLE_ENABLED: z.boolean(),
  OAUTH_GOOGLE_CLIENT_ID: z.string(),
  OAUTH_GOOGLE_CLIENT_SECRET: z.string(),
  JWT_SECRET: z.string(),
  JWT_SECRET_TTL: z.number(),
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
