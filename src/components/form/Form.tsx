'use client'
import React, {useRef} from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import {Container, Stack} from "@mui/material";
import { TextField } from "@/components/inputs/TextField/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { Inputs } from "@/components/form/types";
import { CustomForm } from "@/components/form/styled";
import { schema } from "./types"
import { Button } from '@/components/buttons/Button';
import { grey, orange } from "@mui/material/colors";

export default function Form() {

    const form = useForm<Inputs>({
        defaultValues: {
            url: "https://localhost:3000",
            jwt_secret_ttl: "",
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

    const enableGoogleOauth = watch("enable_google_oauth")
    const enableLdap = watch("enable_ldap")
    const inputRefs = useRef<HTMLInputElement>(null);

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
                            {...register("refresh_secret_ttl",{
                                valueAsNumber: true
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
                                required: "Refresh Secret TTL is required",
                                valueAsNumber: true
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
                        Enable Google OAUTH
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
                            type='checkbox'
                            {...register("enable_ldap")}
                        />Enable LDAP
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
                        <Button label={"RESET"}
                                type={"reset"}
                                disabled={false}
                                backgroundColor={grey[500]}
                                onClick={() => reset()}
                        ></Button>
                        <Button
                            label={"SAVE CHANGES"}
                            type={"submit"}
                            disabled={false}
                            backgroundColor={orange[500]}
                        ></Button>
                        {/*<S.Button type="submit" variant="contained">Submit</S.Button>*/}
                        {/*<S.Button type="reset" variant="outlined" onClick={() => reset()}>Reset</S.Button>*/}
                    </Stack>
                </Stack>
            </CustomForm>
        </Container>
    )
}