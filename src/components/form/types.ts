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
