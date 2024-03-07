import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import {Button, Container, Stack, TextField} from "@mui/material";
import styled from "@emotion/styled";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import Typography from "@mui/material/Typography";
import {Inputs} from "@/components/form/types";


const schema = z.object({
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

export default function Form() {

    const form = useForm<Inputs>({
        defaultValues: {
            url: "https://localhost:3000",
            jwt_secret_ttl: 0,
            refresh_secret_ttl: 0,
            email_host: "",
            email_port: 0,
            enable_google_oauth: false,
            oauth_google_client_id: "",
            oauth_google_client_secret: "",
            enable_ldap: false,
            ldap_url: "",
            ldap_bind_dn: ""
        },
        resolver: zodResolver(schema)
    })

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = form

    const CustomForm = styled.form`
        padding: 20px 10px;
        border: 1px solid black;
        border-radius: 5px;
    `
    const enableGoogleOauth = watch("enable_google_oauth")
    const enableLdap = watch("enable_ldap")

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <Container>
            <h1>Some form</h1>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <Stack direction="row">
                        <TextField
                            {...register("url")}
                            label="Application URL:"
                        />
                    </Stack>
                    <Typography>
                        Authentication Security Settings:
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("jwt_secret_ttl")}
                            error={!!errors.jwt_secret_ttl}
                            helperText={errors.jwt_secret_ttl?.message}
                            label="JWT Secret TTL:"
                        />
                        <TextField
                            type="number"
                            {...register("refresh_secret_ttl", {
                                required: "Refresh Secret TTL is required"
                            })}
                            error={!!errors.refresh_secret_ttl}
                            helperText={errors.refresh_secret_ttl?.message}
                            label="Refresh Secret TTL:"
                        />
                    </Stack>

                    <Typography>
                        Email Settings:
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("email_host")}
                            error={!!errors.email_host}
                            helperText={errors.email_host?.message}
                            label="Email Host:"
                        />
                        <TextField
                            type="number"
                            {...register("email_port", {
                                required: "Refresh Secret TTL is required"
                            })}
                            error={!!errors.email_port}
                            helperText={errors.email_port?.message}
                            label="Email Port:"
                        />
                    </Stack>

                    <Typography>
                        Google Settings:
                    </Typography>

                    <Stack direction="row">
                        <input
                            type="checkbox"
                            {...register("enable_google_oauth")}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("oauth_google_client_id", {
                                disabled: !enableGoogleOauth
                            })}
                            label="OAUTH Google Client ID:"
                        />

                        <TextField
                            {...register("oauth_google_client_secret", {
                                disabled: !enableGoogleOauth
                            })}
                            label="OAUTH Google Client Secret:"
                        />
                    </Stack>

                    <Typography>
                        LDAP Settings:
                    </Typography>

                    <Stack direction="row">
                        <input
                            type="checkbox"
                            {...register("enable_ldap")}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("ldap_url", {
                                disabled: !enableLdap
                            })}
                            label="LDAP URL:"
                        />

                        <TextField
                            {...register("ldap_bind_dn", {
                                disabled: !enableLdap
                            })}
                            label="LDAP BIND DN:"
                        />
                    </Stack>

                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button type="reset" variant="outlined" onClick={() => reset()}>Reset</Button>
                    </Stack>
                </Stack>
            </CustomForm>
        </Container>
    )
}