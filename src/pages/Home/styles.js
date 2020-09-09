import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const StyledGridContainer = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.dark};
  width: 100%;
  height: 100%;
`;

export const StyledGridItem = styled(Grid)`
 padding: ${(props) => props.theme.spacing(2)}px;
 box-sizing: border-box;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`;