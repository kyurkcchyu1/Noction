import {z} from "zod";


export type Inputs = {
    url: string
    jwt_secret_ttl: number
    refresh_secret_ttl: number
    email_host: string
    email_port: number
    enable_google_oauth: boolean
    oauth_google_client_id: string
    oauth_google_client_secret: string
    enable_ldap: boolean
    ldap_url: string
    ldap_bind_dn: string
}


export const schema = z.object({
    url: z.string(),
    jwt_secret_ttl: z.number(),
    refresh_secret_ttl: z.number().min(0, "Min value is 0").max(10, "Max value is 10"),
    email_host: z.string(),
    email_port: z.number(),
    enable_google_oauth: z.boolean(),
    oauth_google_client_id: z.string(),
    oauth_google_client_secret: z.string(),
    enable_ldap: z.boolean(),
    ldap_url: z.string(),
    ldap_bind_dn: z.string(),
})