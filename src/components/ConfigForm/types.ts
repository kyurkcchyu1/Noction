import { z } from "zod";
import { configSchema } from "./validation";

export type GetConfigProps = {
  APP_URL: string;
  OAUTH_GOOGLE_ENABLED: string;
  OAUTH_GOOGLE_CLIENT_ID: string;
  OAUTH_GOOGLE_CLIENT_SECRET: string;
  JWT_SECRET: string;
  JWT_SECRET_TTL: string;
  REFRESH_SECRET: string;
  REFRESH_SECRET_TTL: string;
  HASH_SECRET: string;
  LDAP_ENABLED: string;
  LDAP_URL: string;
  LDAP_BIND_DN: string;
  EMAIL_HOST: string;
  EMAIL_PORT: string;
};

export type ConfigSerializerProps = z.infer<typeof configSchema>;
