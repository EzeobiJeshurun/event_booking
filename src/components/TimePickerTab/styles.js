import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';

export const PickerTab = styled(Paper)`
  border-raduis: ${(props) => props.theme.spacing(1)}px;
  background: ${(props) => props.theme.palette.grey.special};
  margin: ${(props) => props.theme.spacing(0.5)}px;
  box-sizing: border-box;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background:  ${(props) => props.theme.palette.primary.light};
  };
`;

export const TextContainer = styled(Typography)`
  background: transparent;
  font-size: ${(props) => props.theme.spacing(3)}px;
  color: ${(props) => props.theme.palette.color.white};
  
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  color:  ${(props) => props.theme.palette.grey.special};
  ${(props) => props.theme.breakpoints.down('550')} {
    font-size: ${(props) => props.theme.spacing(1.5)}px;
}
`;

export const ConfirmButton = styled(Button)`
  color: ${(props) => props.theme.palette.color.green};
  border-color: ${(props) => props.theme.palette.color.green};
  ${(props) => props.theme.breakpoints.down('550')} {
    font-size: ${(props) => props.theme.spacing(1.2)}px;
}
`;

export const CancelButton = styled(Button)`
${(props) => props.theme.breakpoints.down('550')} {
    font-size: ${(props) => props.theme.spacing(1.2)}px;
}
`;

export const ContentDialog = styled(DialogContent)`
  padding-left: ${(props) => props.theme.spacing(1)}px;
  padding-right: ${(props) => props.theme.spacing(1)}px;
`;