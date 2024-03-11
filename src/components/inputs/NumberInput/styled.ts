import styled from "@emotion/styled";
import {grey} from "@mui/material/colors";
import {numberInputClasses} from "@mui/base/Unstable_NumberInput";


export const StyledInputRoot = styled('div')(() => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      border-radius: 30px;
      color: ${'#fff'};
      background: ${grey[800]};
      border: 1px solid ${grey[700]};
      box-shadow: 0px 2px 4px ${'rgba(0,0,0, 0.5)'};
      display: grid;
      grid-template-columns: 1fr 19px;
      grid-template-rows: 1fr 1fr;
      overflow: hidden;
      column-gap: 8px;
      padding: 4px 16px 4px 4px;
      width: 50%;
    
      &.${numberInputClasses.focused} {
        border-color: ${grey[900]};
        box-shadow: 0 0 0 3px ${grey[700]};
      }
    
      &:hover {
        border-color: ${grey[900]};
      }
    
      &:focus-visible {
        outline: 0;
      }
`,
);

export const StyledInputElement = styled('input')(() => `
      font-size: 0.875rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.5;
      grid-column: 1/2;
      grid-row: 1/3;
      color: ${'#fff'};
      background: inherit;
      border: none;
      border-radius: 30px;
      padding: 8px 12px;
      outline: 0;
`,
);

export const StyledButton = styled('button')(() => `
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      appearance: none;
      padding: 0;
      width: 19px;
      height: 18px;
      font-family: system-ui, sans-serif;
      font-size: 0.875rem;
      line-height: 1;
      box-sizing: border-box;
      background: ${grey[800]};
      border: 0;
      color: ${grey[300]};
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
      
    
      &:hover {
        background: ${grey[800]};
        cursor: pointer;
      }
    
      &.${numberInputClasses.incrementButton} {
        grid-column: 2/3;
        grid-row: 1/2;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    
        &:hover {
          cursor: pointer;
          color: #FFF;
          background: ${grey[700]};
        }
      }
    
      &.${numberInputClasses.decrementButton} {
        grid-column: 2/3;
        grid-row: 2/3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    
      &:hover {
        cursor: pointer;
        color: #FFF;
        background: ${grey[700]};
      }
    
      & .arrow {
        transform: translateY(-1px);
      }
    
      & .arrow {
        transform: translateY(-1px);
      }
`,
);