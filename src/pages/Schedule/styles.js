import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';


export const GridContainer = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.dark};
  width: 100%;
  height: 100%;
`;

export const IconHome = styled(HomeIcon)`
 color: ${(props) => props.theme.palette.primary.dark};
 font-size: ${(props) => props.theme.spacing(4)}px;
 ${(props) => props.theme.breakpoints.down('550')} {
  font-size: ${(props) => props.theme.spacing(2)}px;
}
`;

export const GridItem = styled(Grid)`
  padding: ${(props) => props.theme.spacing(1)}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimePickerGrid = styled(Grid)`
  backgroud: ${(props) => props.theme.palette.color.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
  padding: ${(props) => props.theme.spacing(2)}px;
  box-sizing: border-box;
`;

export const PickerContainer = styled(Grid)`
  backgroud:  ${(props) => props.theme.palette.color.white};
  height: ${(props) => props.theme.spacing(20)}px;
  display: flex;
  flex-direction: row;
`;

export const ScheduleTitle = styled.div`
 background: ${(props) => props.theme.palette.primary.white};
 height: ${(props) => props.theme.spacing(2)}px;
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 color: ${(props) => props.theme.palette.primary.dark};
 font-size: ${(props) => props.theme.spacing(4)}px;
 margin-bottom: ${(props) => props.theme.spacing(2)}px;
 ${(props) => props.theme.breakpoints.down('550')} {
    font-size: ${(props) => props.theme.spacing(2)}px;
}
`;

