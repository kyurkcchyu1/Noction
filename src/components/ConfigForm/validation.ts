import { z } from "zod";
import { ConfigSerializerProps } from "@components/ConfigForm/types";

const varcharSchema = z
  .string()
  .min(1, "Filed is required")
  .max(255, "String should be less than 255 characters");

export const configSchema = z
  .object({
    APP_URL: varcharSchema.url(),
    JWT_SECRET_TTL: z.number(),
    REFRESH_SECRET_TTL: z
      .number()
      .min(0, "Min value is 0")
      .max(365, "Max value is 365"),
    EMAIL_HOST: varcharSchema,
    EMAIL_PORT: z.number(),
    OAUTH_GOOGLE_ENABLED: z.boolean(),
    OAUTH_GOOGLE_CLIENT_ID: varcharSchema.optional().or(z.literal("")),
    OAUTH_GOOGLE_CLIENT_SECRET: varcharSchema.optional().or(z.literal("")),
    LDAP_ENABLED: z.boolean(),
    LDAP_URL: varcharSchema.optional().or(z.literal("")),
    LDAP_BIND_DN: varcharSchema.optional().or(z.literal("")),
  })
  .superRefine(
    (
      {
        OAUTH_GOOGLE_ENABLED,
        OAUTH_GOOGLE_CLIENT_ID,
        OAUTH_GOOGLE_CLIENT_SECRET,
        LDAP_ENABLED,
        LDAP_URL,
        LDAP_BIND_DN,
      },
      context,
    ) => {
      const zodIssue = (key: keyof ConfigSerializerProps) => {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: [key],
        });
      };

      switch (true) {
        case OAUTH_GOOGLE_ENABLED && !OAUTH_GOOGLE_CLIENT_ID:
          zodIssue("OAUTH_GOOGLE_CLIENT_ID");
          break;
        case OAUTH_GOOGLE_ENABLED && !OAUTH_GOOGLE_CLIENT_SECRET:
          zodIssue("OAUTH_GOOGLE_CLIENT_SECRET");
          break;
        case LDAP_ENABLED && !LDAP_URL:
          zodIssue("LDAP_URL");
          break;
        case LDAP_ENABLED && !LDAP_BIND_DN:
          zodIssue("LDAP_BIND_DN");
          break;
        default:
          break;
      }
    },
  );
