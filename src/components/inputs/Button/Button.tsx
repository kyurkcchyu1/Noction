import { Favorite } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

import type { Props } from "./types";
import * as S from "./styled";

export const Button = ({
  children,
  color,
  disabled = false,
  size,
  type,
  variant,
  onClick,
  isLoading = false,
  hasIcon = false,
  iconSize = 20,
  iconImage = <Favorite />,
}: Props) => {
  return (
    <S.Button
      disabled={disabled}
      color={color}
      size={size}
      type={type}
      variant={variant}
      onClick={onClick}
      startIcon={
        isLoading ? (
          <CircularProgress size={iconSize} color="inherit" />
        ) : hasIcon ? (
          iconImage
        ) : null
      }
    >
      {children}
    </S.Button>
  );
};
