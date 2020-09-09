import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

export const StyledCard = styled(Card)`
  width: 95%;
  position: relative;
  display: flex;
  background: white;
  text-decoration: none;
  marginBottom: ${(props) => props.theme.spacing(3)}px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.down('770')}) {
       flex-direction: column;
   }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  width: 100%;
`;

export const StyledCardMedia = styled(CardMedia)`
  min-height: ${(props) => props.theme.spacing(31.25)}px;;
  object-fit: cover;
  border-radius: 50%;
  margin: ${(props) => props.theme.spacing(2)}px;
  box-sizing: border-box;
  @media (min-width:${(props) => props.theme.breakpoints.between('770','900')}) {
    min-height: ${(props) => props.theme.spacing(22.5)}px;
  } 
`;

export const StyledContent = styled(CardContent)`
padding: ${(props) => props.theme.spacing(3)}px;
@media (min-width: ${(props) => props.theme.breakpoints.between('770','1000')}) {
    min-width: ${(props) => props.theme.spacing(3)}px;
}
`;

export const StyledTypography = styled(Typography)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
  font-size: ${(props) => props.theme.spacing(2)}px;
  text-align: start;
  height: ${(props) => props.theme.spacing(7)}px;
`;

export const Email = styled.span`
color: ${(props) => props.theme.palette.primary.dark};
font-size: ${(props) => props.theme.spacing(1.5)}px;
overflow-wrap: break-word;
@media (min-width: ${(props) => props.theme.breakpoints.down('770')}) {
    font-size: ${(props) => props.theme.spacing(1.2)}px;
}
`;