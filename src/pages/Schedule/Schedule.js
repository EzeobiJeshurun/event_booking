import React, {Fragment, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { 
  GridContainer, 
  GridItem, 
  TimePickerGrid, 
  PickerContainer, 
  ScheduleTitle, 
  IconHome 
} from './styles';
import Card from '../../components/Card';
import TimePickerTab from '../../components/TimePickerTab';
import {connect} from 'react-redux';
import axios from 'axios';
import dayjs from 'dayjs';
 
const Schedule = () => {

  useEffect(() => {
      
     
    
     /*async function fetchData() {
        // You can await here
        const  result = await axios.get(
          "http://localhost:5000/schedule/time/12"
        );
        // ...
        console.log(result);
      }
      fetchData();*/

  }, []);

  const dates = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]

  const user = {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
};

const displayPicker = dates.map((hour) => (
   <TimePickerGrid key={hour} xs={4} sm={3} md={2} item>
     <TimePickerTab text={hour} availability={true} />
   </TimePickerGrid>
  ));

    return (
        <Fragment>
          <ScheduleTitle>
            <div>Meet us today, pick a time</div>
            <IconButton component={Link} to={'/'}><IconHome/></IconButton>
          </ScheduleTitle>
          <GridContainer container>
            <GridItem xs={12} sm={4} md={3} item>
            <Card 
              userImage={user.avatar}  
              email={user.email} 
              firstName={user.first_name} 
              lastName={user.last_name} 
              id={user.id} 
            />
            </GridItem >
            <GridItem xs={12} sm={8} md={9} item>
            <PickerContainer container>
              {displayPicker}
            </PickerContainer>
            </GridItem>
          </GridContainer>
        </Fragment>
    );
}
 
Schedule.propTypes = {};
 
export default memo(Schedule);