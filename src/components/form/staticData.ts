export const data = {
    "APP_URL": "http://localhost:8000",
    "OAUTH_GOOGLE_ENABLED": "true",
    "OAUTH_GOOGLE_CLIENT_ID": "686714273180-sjimuaitj74j7mnuc26igr5rq31nm0rl.apps.googleusercontent.com",
    "OAUTH_GOOGLE_CLIENT_SECRET": "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",
    "JWT_SECRET": "JwtSecret",
    "JWT_SECRET_TTL": "86400",
    "REFRESH_SECRET": "refreshSecret",
    "REFRESH_SECRET_TTL": "7d",
    "HASH_SECRET": "hashSecret",
    "LDAP_ENABLED": "false",
    "LDAP_URL": "",
    "LDAP_BIND_DN": "",
    "EMAIL_HOST": "mailserver",
    "EMAIL_PORT": "1025"
}

export type TData = {
    APP_URL: string,
    OAUTH_GOOGLE_ENABLED: string,
    OAUTH_GOOGLE_CLIENT_ID: string,
    OAUTH_GOOGLE_CLIENT_SECRET: string,
    JWT_SECRET: string,
    JWT_SECRET_TTL: string,
    REFRESH_SECRET: string,
    REFRESH_SECRET_TTL: string,
    HASH_SECRET: string,
    LDAP_ENABLED: string,
    LDAP_URL: string,
    LDAP_BIND_DN: string,
    EMAIL_HOST: string,
    EMAIL_PORT: string
}