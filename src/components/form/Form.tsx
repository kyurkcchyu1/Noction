"use client";
import React from "react";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";

import { TBackendData } from "../../data/index";
import { Checkbox, TextField, CustomForm, Button, NumberInput } from "../index";
import { useConfigForm } from "../../hooks/index";

export const Form = ({ data }: { data: TBackendData }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useConfigForm(data);

  const { JWT_SECRET_TTL, REFRESH_SECRET_TTL, EMAIL_HOST, EMAIL_PORT } = errors;

  const enableGoogleOauth = watch("OAUTH_GOOGLE_ENABLED");
  const enableLdap = watch("LDAP_ENABLED");

  return (
    <>
      <Container>
        <CustomForm onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Stack direction="row">
              <TextField
                {...register("APP_URL")}
                label="Application URL:"
                placeholder="Application URL.."
              />
            </Stack>
            <Typography>Authentication Security Settings:</Typography>
            <Stack direction="row" justifyContent="space-around">
              <TextField
                {...register("JWT_SECRET_TTL")}
                placeholder="JWT Secret TTL.."
                error={!!JWT_SECRET_TTL}
                errorMessage={JWT_SECRET_TTL?.message}
                label="JWT Secret TTL:"
              />
              <TextField
                {...register("REFRESH_SECRET_TTL", {
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Refresh Secret TTL.."
                error={!!REFRESH_SECRET_TTL}
                errorMessage={REFRESH_SECRET_TTL?.message}
                label="Refresh Secret TTL:"
              />
            </Stack>
            <Typography>Email Settings:</Typography>
            <Stack direction="row" justifyContent="space-around">
              <TextField
                {...register("EMAIL_HOST")}
                error={!!EMAIL_HOST}
                errorMessage={EMAIL_HOST?.message}
                label="Email Host:"
                placeholder="Email Host.."
              />
              <TextField
                type="number"
                {...register("EMAIL_PORT", {
                  valueAsNumber: true,
                })}
                error={!!EMAIL_PORT}
                errorMessage={EMAIL_PORT?.message}
                label="Email Port:"
                placeholder="Email Port.."
              />
            </Stack>
            <Typography>Google Settings:</Typography>
            <Stack direction="row">
              <Checkbox
                {...register("OAUTH_GOOGLE_ENABLED")}
                label="Enable Google OAUTH"
                checked={enableGoogleOauth}
              />
            </Stack>
            <Stack direction="row" justifyContent="space-around">
              <TextField
                {...register("OAUTH_GOOGLE_CLIENT_ID")}
                disabled={!enableGoogleOauth}
                label="OAUTH Google Client ID:"
                placeholder="AUTH Google Client ID.."
              />
              <TextField
                {...register("OAUTH_GOOGLE_CLIENT_SECRET")}
                disabled={!enableGoogleOauth}
                label="OAUTH Google Client Secret:"
                placeholder="OAUTH Google Client Secret.."
              />
            </Stack>
            <Typography>LDAP Settings:</Typography>
            <Stack direction="row">
              <Checkbox
                {...register("LDAP_ENABLED")}
                label="Enable LDAP"
                checked={enableLdap}
              />
            </Stack>
            <Stack direction="row" justifyContent="space-around">
              <TextField
                {...register("LDAP_URL")}
                disabled={!enableLdap}
                label="LDAP URL:"
                placeholder="LDAP URL.."
              />
              <TextField
                {...register("LDAP_BIND_DN")}
                disabled={!enableLdap}
                label="LDAP BIND DN:"
                placeholder="LDAP BIND DN.."
              />
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button type="reset" variant="outlined" onClick={() => reset()}>
                RESET
              </Button>
              <Button type="submit" variant="contained" disabled={!isDirty}>
                SAVE CHANGES
              </Button>
            </Stack>
          </Stack>
        </CustomForm>
      </Container>
    </>
  );
};
