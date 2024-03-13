import {z} from "zod";


export type Inputs = {
    URL: string
    JWT_SECRET_TTL: string
    REFRESH_SECRET_TTL: number
    EMAIL_HOST: string
    EMAIL_PORT: number
    ENABLE_GOOGLE_OAUTH: boolean
    OAUTH_GOOGLE_CLIENT_ID: string
    OAUTH_GOOGLE_CLIENT_SECRET: string
    ENABLE_LDAP: boolean
    LDAP_URL: string
    LDAP_BIND_DN: string
}


export const schema = z.object({
    URL: z.string(),
    JWT_SECRET_TTL: z.string(),
    REFRESH_SECRET_TTL: z.number().min(0, "Min value is 0").max(10, "Max value is 10"),
    EMAIL_HOST: z.string(),
    EMAIL_PORT: z.number(),
    ENABLE_GOOGLE_OAUTH: z.boolean(),
    OAUTH_GOOGLE_CLIENT_ID: z.string(),
    OAUTH_GOOGLE_CLIENT_SECRET: z.string(),
    ENABLE_LDAP: z.boolean(),
    LDAP_URL: z.string(),
    LDAP_BIND_DN: z.string(),
})