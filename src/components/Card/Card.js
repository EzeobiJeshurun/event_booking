import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import { StyledCard, StyledCardActionArea, StyledContent, StyledCardMedia, StyledTypography, Email} from './styles';
import { Link } from 'react-router-dom';
 
const Card = ({ userImage, email, firstName, lastName, id}) => {
    return (
        <Fragment>
         <StyledCard data-testid="card-container" component={Link} to={`/schedule/${id}`} elevation={3} >
           <StyledCardActionArea>
             <StyledCardMedia image={userImage} title="user profile image" />
             <StyledContent>
              <StyledTypography data-testid="card-email">
              {`${firstName} ${lastName}`}<br/>
                <Hidden xsDown><Email>{`Email: ${email}`}</Email></Hidden>
                <Hidden smUp><Email>{`${email}`}</Email></Hidden>
              </StyledTypography>
             </StyledContent>
           </StyledCardActionArea>
         </StyledCard>
        </Fragment>
    );
}
 
Card.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  userImage: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};
 
export default memo(Card);