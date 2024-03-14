import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

export const Button = styled(MuiButton)``;

// export const Button = styled(MuiButton, {
//     shouldForwardProp: prop =>  isPropValid(prop) && prop !== 'backgroundColor'
// })((props) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 600;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   background-color: ${props.bgColor};
//   padding: 5px 20px;
//   border-radius: 20px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: 1px solid ${props.bgColor};
//   opacity: 0.9;
//
//   &.${buttonClasses.active} {
//     background-color: ${props.bgColor};
//     box-shadow: none;
//     transform: scale(0.99);
//     opacity: 1;
//   }
//
//   &.${buttonClasses.disabled} {
//     background-color: ${props.bgColor};
//     border: 0;
//     cursor: default;
//     box-shadow: none;
//     transform: scale(1);
//     opacity: 0.3;
//   }
//   `,
// );
