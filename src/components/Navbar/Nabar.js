import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Input from '../Input';
import { StyledToolbar } from './styles';
 
const Navbar = ({ valueSearch, onChangeSearch }) => {
    return (
        <Fragment>
            <AppBar>
              <StyledToolbar><Input value={valueSearch} onChange={onChangeSearch}/></StyledToolbar>
            </AppBar>
        </Fragment>
    );
}
 
Navbar.propTypes = {
    valueSearch : PropTypes.string,
    onChangeSearch: PropTypes.func,
};
 
export default memo(Navbar);