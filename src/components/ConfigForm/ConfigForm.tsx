"use client";
import { Typography } from "@mui/material";
import { DevTool } from "@hookform/devtools";

import { Button, Checkbox, TextField } from "@components";
import { useConfigForm } from "./hooks";
import type { GetConfigProps } from "./types";
import * as S from "./styled";

export const ConfigForm = ({ data }: { data: GetConfigProps }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useConfigForm(data);

  const {
    JWT_SECRET_TTL,
    REFRESH_SECRET_TTL,
    EMAIL_HOST,
    EMAIL_PORT,
    APP_URL,
    OAUTH_GOOGLE_CLIENT_ID,
    OAUTH_GOOGLE_CLIENT_SECRET,
    LDAP_URL,
    LDAP_BIND_DN,
  } = errors;

  const enableGoogleOauth = watch("OAUTH_GOOGLE_ENABLED");
  const enableLdap = watch("LDAP_ENABLED");

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <TextField
          {...register("APP_URL")}
          label="Application URL:"
          placeholder="Application URL.."
          error={!!APP_URL}
          errorMessage={APP_URL?.message}
        />
        <S.Row>
          <Typography>Authentication Security Settings:</Typography>
        </S.Row>
        <TextField
          {...register("JWT_SECRET_TTL", {
            valueAsNumber: true,
          })}
          type="number"
          label="JWT Secret TTL:"
          placeholder="JWT Secret TTL.."
          error={!!JWT_SECRET_TTL}
          errorMessage={JWT_SECRET_TTL?.message}
        />
        <TextField
          {...register("REFRESH_SECRET_TTL", {
            valueAsNumber: true,
          })}
          type="number"
          label="Refresh Secret TTL:"
          placeholder="Refresh Secret TTL.."
          error={!!REFRESH_SECRET_TTL}
          errorMessage={REFRESH_SECRET_TTL?.message}
        />
        <S.Row>
          <Typography>Email Settings:</Typography>
        </S.Row>
        <TextField
          {...register("EMAIL_HOST")}
          label="Email Host:"
          placeholder="Email Host.."
          error={!!EMAIL_HOST}
          errorMessage={EMAIL_HOST?.message}
        />
        <TextField
          type="number"
          {...register("EMAIL_PORT", {
            valueAsNumber: true,
          })}
          label="Email Port:"
          placeholder="Email Port.."
          error={!!EMAIL_PORT}
          errorMessage={EMAIL_PORT?.message}
        />
        <S.Row>
          <Typography>Google Settings:</Typography>
        </S.Row>
        <S.Row>
          <Checkbox
            {...register("OAUTH_GOOGLE_ENABLED")}
            label="Enable Google OAUTH"
            checked={enableGoogleOauth}
          />
        </S.Row>
        <TextField
          {...register("OAUTH_GOOGLE_CLIENT_ID")}
          label="OAUTH Google Client ID:"
          placeholder="AUTH Google Client ID.."
          disabled={!enableGoogleOauth}
          error={!!OAUTH_GOOGLE_CLIENT_ID}
          errorMessage={OAUTH_GOOGLE_CLIENT_ID?.message}
        />
        <TextField
          {...register("OAUTH_GOOGLE_CLIENT_SECRET")}
          label="OAUTH Google Client Secret:"
          placeholder="OAUTH Google Client Secret.."
          disabled={!enableGoogleOauth}
          error={!!OAUTH_GOOGLE_CLIENT_SECRET}
          errorMessage={OAUTH_GOOGLE_CLIENT_SECRET?.message}
        />
        <Typography>LDAP Settings:</Typography>
        <S.Row>
          <Checkbox
            {...register("LDAP_ENABLED")}
            label="Enable LDAP"
            checked={enableLdap}
          />
        </S.Row>
        <TextField
          {...register("LDAP_URL")}
          label="LDAP URL:"
          placeholder="LDAP URL.."
          disabled={!enableLdap}
          error={!!LDAP_URL}
          errorMessage={LDAP_URL?.message}
        />
        <TextField
          {...register("LDAP_BIND_DN")}
          label="LDAP BIND DN:"
          placeholder="LDAP BIND DN.."
          disabled={!enableLdap}
          error={!!LDAP_BIND_DN}
          errorMessage={LDAP_BIND_DN?.message}
        />
        <S.Row
          direction="row"
          spacing={2}
          justifyContent="end"
          alignItems="center"
        >
          <Button variant="outlined" onClick={() => reset()}>
            RESET
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={!isDirty || !isValid || isSubmitting}
          >
            SAVE CHANGES
          </Button>
        </S.Row>
      </S.Form>
      {process.env.NODE_ENV && <DevTool control={control} />}
    </>
  );
};
