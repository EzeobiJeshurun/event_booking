import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const StyledGridContainer = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.dark};
  width: 100%;
  height: 100%;
  margin-top:  ${(props) => props.theme.spacing(4)}px;
`;

export const StyledGridItem = styled(Grid)`
 padding: ${(props) => props.theme.spacing(2)}px;
 box-sizing: border-box;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`;

export const NothingFound = styled.div`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing(3)}px;
  display: flex;
  flex-direction: row;
  justify-content:center;
  margin-right: auto;
  margin-left: auto;
`;