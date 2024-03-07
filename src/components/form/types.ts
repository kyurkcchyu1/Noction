

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