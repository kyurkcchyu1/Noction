"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@components";
import { Inputs } from "@components";
import { CustomForm } from "@components";
import { Button } from "@components";
import { schema } from "./types";
import { data } from "@hooks/staticData";
import { transformData } from "@hooks/transformData";

export default function Form() {
  const defaultValues = transformData(data);
  const form = useForm<Inputs>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = form;

  const enableGoogleOauth = watch("OAUTH_GOOGLE_ENABLED");
  const enableLdap = watch("LDAP_ENABLED");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <h1>Some form</h1>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Stack direction="row">
              <TextField
                {...register("APP_URL")}
                label="Application URL:"
                placeholder="Application URL.."
              />
            </Stack>
            <Typography>Authentication Security Settings:</Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                {...register("JWT_SECRET_TTL", {
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="JWT Secret TTL.."
                error={!!errors.JWT_SECRET_TTL}
                errorMessage={errors.JWT_SECRET_TTL?.message}
                label="JWT Secret TTL:"
              />
              <TextField
                {...register("REFRESH_SECRET_TTL", {
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Refresh Secret TTL.."
                error={!!errors.REFRESH_SECRET_TTL}
                errorMessage={errors.REFRESH_SECRET_TTL?.message}
                label="Refresh Secret TTL:"
              />
            </Stack>
            <Typography>Email Settings:</Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                {...register("EMAIL_HOST")}
                error={!!errors.EMAIL_HOST}
                errorMessage={errors.EMAIL_HOST?.message}
                label="Email Host:"
                placeholder="Email Host.."
              />
              <TextField
                type="number"
                {...register("EMAIL_PORT", {
                  valueAsNumber: true,
                })}
                error={!!errors.EMAIL_PORT}
                errorMessage={errors.EMAIL_PORT?.message}
                label="Email Port:"
                placeholder="Email Port.."
              />
            </Stack>
            <Typography>Google Settings:</Typography>

            <Stack direction="row">
              <input type="checkbox" {...register("OAUTH_GOOGLE_ENABLED")} />
              Enable Google OAUTH
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                {...register("OAUTH_GOOGLE_CLIENT_ID", {
                  disabled: !enableGoogleOauth,
                })}
                label="OAUTH Google Client ID:"
                placeholder="AUTH Google Client ID.."
              />

              <TextField
                {...register("OAUTH_GOOGLE_CLIENT_SECRET", {
                  disabled: !enableGoogleOauth,
                })}
                label="OAUTH Google Client Secret:"
                placeholder="OAUTH Google Client Secret.."
              />
            </Stack>
            <Typography>LDAP Settings:</Typography>
            <Stack direction="row">
              <input type="checkbox" {...register("LDAP_ENABLED")} />
              Enable LDAP
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                {...register("LDAP_URL", {
                  disabled: !enableLdap,
                })}
                label="LDAP URL:"
                placeholder="LDAP URL.."
              />
              <TextField
                {...register("LDAP_BIND_DN", {
                  disabled: !enableLdap,
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
              >
                RESET
              </Button>
              <Button type="submit" variant="contained" disabled={false}>
                SAVE CHANGES
              </Button>
            </Stack>
          </Stack>
        </CustomForm>
      </Container>
      {/*<DevTool control={control} />*/}
    </>
  );
}
