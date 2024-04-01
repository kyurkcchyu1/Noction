import {
  InputBase as MuiInputBase,
  InputLabel as MuiInputLabel,
  FormHelperText,
} from "@mui/material";
import styled from "@emotion/styled";
import { grey, orange } from "@mui/material/colors";

export const InputLabel = styled(MuiInputLabel)`
  &.Mui-focused {
    color: ${orange[600]};
  }
  ,
  &.Mui-error {
    color: red;
  }
`;

export const HelperText = styled(FormHelperText)`
  color: red;
`;

export const InputBase = styled(MuiInputBase)(() => ({
  "label + &": {
    marginTop: 20,
  },
  "& .MuiInputBase-input": {
    borderRadius: 30,
    position: "relative",
    // border: "1px solid orange",
    fontSize: 16,
    width: "90%",
    padding: "10px 12px",
    backgroundColor: grey[800],
    color: grey[100],
  },

  "& .Mui-disabled": {
    backgroundColor: "#aaa7a7",
  },
}));
