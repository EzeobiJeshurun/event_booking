import styled from "styled-components";
import Grid from "@material-ui/core/Grid";


export const GridContainer = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.dark};
  width: 100%;
  height: 100%;
  margin-top:  ${(props) => props.theme.spacing(4)}px;
`;

export const GridItem = styled(Grid)`
  padding: ${(props) => props.theme.spacing(1)}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
