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
import {NumberInput} from "@/components/inputs/NumberInput";

export default function Form() {

    const defaultValues = {
        URL: "https://localhost:3000",
        JWT_SECRET_TTL: "",
        REFRESH_SECRET_TTL: 2,
        EMAIL_HOST: "",
        EMAIL_PORT: 0,
        ENABLE_GOOGLE_OAUTH: false,
        OAUTH_GOOGLE_CLIENT_ID: "",
        OAUTH_GOOGLE_CLIENT_SECRET: "",
        ENABLE_LDAP: false,
        LDAP_URL: "",
        LDAP_BIND_DN: ""
    }

    const form = useForm<Inputs>({
        defaultValues,
        resolver: zodResolver(schema)
    })

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = form

    const enableGoogleOauth = watch("ENABLE_GOOGLE_OAUTH")
    const enableLdap = watch("ENABLE_LDAP")
    const inputRefs = useRef<HTMLInputElement>(null);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <h1>Some form</h1>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <Stack direction="row">
                        <TextField
                            {...register("URL")}
                            label="Application URL:"
                            placeholder="Application URL.."
                        />
                    </Stack>
                    <Typography>
                        Authentication Security Settings:
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("JWT_SECRET_TTL")}
                            error={!!errors.JWT_SECRET_TTL}
                            helperText={errors.JWT_SECRET_TTL?.message}
                            label="JWT Secret TTL:"
                            placeholder="JWT Secret TTL.."
                        />
                        <TextField
                            {...register("REFRESH_SECRET_TTL",{
                                valueAsNumber: true
                            })}
                            error={!!errors.REFRESH_SECRET_TTL}
                            helperText={errors.REFRESH_SECRET_TTL?.message}
                            label="Refresh Secret TTL:"
                            placeholder="Refresh Secret TTL.."
                            type="number"
                        />
                    </Stack>
                    <Typography>
                        Email Settings:
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("EMAIL_HOST")}
                            error={!!errors.EMAIL_HOST}
                            helperText={errors.EMAIL_HOST?.message}
                            label="Email Host:"
                            placeholder="Email Host.."
                        />
                        <TextField
                            type="number"
                            {...register("EMAIL_PORT", {
                                valueAsNumber: true
                            })}
                            error={!!errors.EMAIL_PORT}
                            helperText={errors.EMAIL_PORT?.message}
                            label="Email Port:"
                            placeholder="Email Port.."
                            errorMessage={errors.EMAIL_PORT?.message}
                        />
                    </Stack>
                    <Typography>
                        Google Settings:
                    </Typography>

                    <Stack direction="row">
                        <input
                            type="checkbox"
                            {...register("ENABLE_GOOGLE_OAUTH")}
                        />
                        Enable Google OAUTH
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("OAUTH_GOOGLE_CLIENT_ID", {
                                disabled: !enableGoogleOauth
                            })}
                            label="OAUTH Google Client ID:"
                            placeholder="AUTH Google Client ID.."
                        />

                        <TextField
                            {...register("OAUTH_GOOGLE_CLIENT_SECRET", {
                                disabled: !enableGoogleOauth
                            })}
                            label="OAUTH Google Client Secret:"
                            placeholder="OAUTH Google Client Secret.."
                        />
                    </Stack>
                    <Typography>
                        LDAP Settings:
                    </Typography>
                    <Stack direction="row">
                        <input
                            type='checkbox'
                            {...register("ENABLE_LDAP")}
                        />Enable LDAP
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            {...register("LDAP_URL", {
                                disabled: !enableLdap
                            })}
                            label="LDAP URL:"
                            placeholder="LDAP URL.."
                        />
                        <TextField
                            {...register("LDAP_BIND_DN", {
                                disabled: !enableLdap
                            })}
                            label="LDAP BIND DN:"
                            placeholder="LDAP BIND DN.."
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button
                                type="reset"
                                variant="outlined"
                                disabled={false}
                                onClick={() => reset()}
                        >RESET</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={false}
                        >SAVE CHANGES</Button>
                    </Stack>
                </Stack>
            </CustomForm>
        </Container>
    )
}