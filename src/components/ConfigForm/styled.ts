import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 10px;
  row-gap: 10px;
  column-gap: 10px;
`;

export const Row = styled(Stack)`
  display: flex;
  grid-column: 1 / 3;
`;
