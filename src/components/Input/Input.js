import React, { Fragment, memo } from 'react';
import { StyledInput, StyledSearchIcon } from './styles';
 
const Input = ({...props}) => {

   
    return (
        <Fragment>
            <StyledInput data-testid="input-search" placeholder="Search" {...props}  startAdornment={<StyledSearchIcon />} />
        </Fragment>
    );
}
 
export default memo(Input);