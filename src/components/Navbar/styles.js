import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledAppBar = styled(AppBar)`
 backgroud: ${(props) => props.theme.palette.primary.dark};
`;

export const StyledToolbar = styled(Toolbar)`
 background: ${(props) => props.theme.palette.primary.dark};
 margin: auto;
 box-sizing: border-box;
 width: 100%;
 display: flex;
 justify-content: flex-end;
`;