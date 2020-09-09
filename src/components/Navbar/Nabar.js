import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { StyledAppBar, StyledToolbar } from './styles';
 
const Navbar = () => {
    return (
        <Fragment>
            <StyledAppBar>
              <StyledToolbar></StyledToolbar>
            </StyledAppBar>
        </Fragment>
    );
}
 
Navbar.propTypes = {};
 
export default Navbar;