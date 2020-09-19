import React, {Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { 
  GridContainer, 
  GridItem, 
  TimePickerGrid, 
  PickerContainer, 
  ScheduleTitle, 
  IconHome,
} from './styles';
import Card from '../../components/Card';
import TimePickerTab from '../../components/TimePickerTab';
import {connect} from 'react-redux';
import axios from 'axios';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { updateSchedule, getSchedule } from '../redux/actions/dataActions';
 
const Schedule = (props) => {
  const {data: { schedule, loading, currentUsers }, updateSchedule, getSchedule } = props;
  const [userSchedule, setUserSchedule] = useState({});
  const [newProfile, setNewProfile] = useState([]);
  const update = useCallback(updateSchedule,[schedule]);
  const profileId = match.params.id;
  useEffect(() => {
      const fetchProfileSchedule = getSchedule;
      const profile = currentUsers.find((userDetails) => userDetails.id === profileId);
      setNewProfile(profile);
      
      fetchProfileSchedule(profileId);
    
     /*async function fetchData() {
        // You can await here
        const  result = await axios.get(
          "http://localhost:5000/schedule/time/12"
        );
        // ...
        console.log(result);
      }
      fetchData();*/

  }, [getSchedule, profileId, currentUsers]);

  useEffect(() => {
      
     setUserSchedule(schedule)

  }, [schedule]);

  const dates = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]

  const user = {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
};

   const displayPicker = userSchedule.length > 0 ?  userSchedule.dates.map((event) => (
   <TimePickerGrid key={hour} xs={4} sm={3} md={2} item>
     <TimePickerTab 
      text={event.time} 
      availability={event.availability} 
      userId={userSchedule.id} 
      time={event.time} 
      schedule={userSchedule}
      handleUpdate ={update}
    />
   </TimePickerGrid>
  )) : null;

   const pickerLoading = (
     <TimePickerGrid xs={12} item>
       <CircularProgress thickness={2} size={50}/>
     </TimePickerGrid>
   );

    return (
        <Fragment>
          <ScheduleTitle>
            <div>Meet us today, pick a time</div>
            <IconButton component={Link} to={'/'}><IconHome/></IconButton>
          </ScheduleTitle>
          <GridContainer container>
          { userSchedule.length < 1? pickerLoading :
            (<GridItem xs={12} sm={4} md={3} item>
            <Card 
              userImage={newProfile[0].avatar}  
              email={newProfile[0].email} 
              firstName={newProfile[0].first_name} 
              lastName={newProfile[0].last_name} 
              id={newProfile[0].id} 
            />
            </GridItem >
            <GridItem xs={12} sm={8} md={9} item>
            <PickerContainer container>
              {loading ? pickerLoading : displayPicker}
            </PickerContainer>
            </GridItem>)
            }
          </GridContainer>
        </Fragment>
    );
}
 
Schedule.propTypes = {};
 

const mapStateToProps = (state)=>({
    data: state.data,
});

const MapActionsToProp={
    updateSchedules,
}

export default connect(mapStateToProps, MapActionsToProp)(Schedule);
