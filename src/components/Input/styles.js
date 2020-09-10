import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';

export const StyledInput = styled(OutlinedInput)`
  border-raduis: ${(props) => props.theme.spacing(1)}px;
  height:  ${(props) => props.theme.spacing(4)}px;
  background: white;
  @media (min-width: ${(props) => props.theme.breakpoints.down('770')}) {
    
}
`;

export const StyledSearchIcon = styled(SearchIcon)`
 color: ${(props) => props.theme.palette.primary.dark};
`;