import React, {Fragment, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { GridContainer, GridItem } from './styles';
import Card from '../../components/Card';
import {connect} from 'react-redux';
 
const Schedule = () => {

  useEffect(() => {

  }, []);

    return (
        <Fragment>
          <GridContainer container>
            <GridItem xs={12} sm={4} md={3} item></GridItem >
            <GridItem xs={12} sm={8} md={9} item></GridItem>
          </GridContainer>
        </Fragment>
    );
}
 
Schedule.propTypes = {};
 
export default memo(Schedule);