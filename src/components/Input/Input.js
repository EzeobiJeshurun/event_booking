import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { StyledInput, StyledSearchIcon } from './styles';
 
const Input = ({...props}) => {

   
    return (
        <Fragment>
            <StyledInput placeholder="Search" {...props}  startAdornment={<StyledSearchIcon />} />
        </Fragment>
    );
}
 
Input.propTypes = {};
 
export default memo(Input);