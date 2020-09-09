import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import { StyledCard, StyledCardActionArea, StyledContent, StyledCardMedia, StyledTypography, Email} from './styles';
import { Link } from 'react-router-dom';
 
const Card = ({ userImage, email, firstName, lastName, id}) => {
    return (
        <Fragment>
         <StyledCard component={Link} to={`/shedule/${id}`} elevation={3} >
           <StyledCardActionArea>
             <StyledCardMedia image={userImage} title="user profile image" />
             <StyledContent>
              <StyledTypography>
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
 
Card.propTypes = {};
 
export default memo(Card);