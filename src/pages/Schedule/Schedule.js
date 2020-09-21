import React, {Fragment, useEffect, useState, useMemo, useCallback } from 'react';
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
import axios from 'axios';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { updateSchedule, getSchedule, getUsers, updateUsers } from '../../redux/actions/dataActions';
 
const Schedule = (props) => {
  const {data: { schedule, loading, currentUsers }, updateSchedule, getSchedule, getUsers } = props;
  const match = props.match;
  const fetchUsers = getUsers;
  const addUsers = updateUsers;
  const [userSchedule, setUserSchedule] = useState({});
  const [newProfile, setNewProfile] = useState([]);
  const update = useCallback(updateSchedule,[schedule]);
  const profileId = match.params.id;
  
  const fetchProfileSchedule = getSchedule;

  const profile = useMemo(() => {
    if (currentUsers.length > 0 && currentUsers.length < 10) {
           addUsers(2);
        }
    if(currentUsers.length > 0) {
       const idStringToNumber = Number(profileId);
       const userIndex = currentUsers.findIndex(userDetails => userDetails.id === idStringToNumber);
       const user = currentUsers[userIndex];

       return user;
    }
  
    },[currentUsers, fetchUsers]);

  useEffect(() => {

      if (profile) {
        setNewProfile(profile);
      }
      
      if(profileId) {
       fetchProfileSchedule(profileId);
      }
    
  }, [ profileId, profile, fetchProfileSchedule]);
  
  useEffect(() => { 
   fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
      if (schedule) {
        setUserSchedule(schedule);
      }
  }, [schedule]);
  
   const pickerLoading = (
     <TimePickerGrid xs={12} item>
       <CircularProgress thickness={2} size={50}/>
     </TimePickerGrid>
   );

   const displayPicker = userSchedule.id ?  userSchedule.dates.map((event) => (
   <TimePickerGrid key={event.time} xs={4} sm={3} md={2} item>
     <TimePickerTab 
      text={event.time} 
      availability={event.availability} 
      userId={userSchedule.id} 
      time={event.time} 
      schedule={userSchedule}
      handleUpdate ={update}
    />
   </TimePickerGrid>
  )) : pickerLoading;


    return (
        <Fragment>
          <ScheduleTitle>
            <div>Meet us today, pick a time</div>
            <IconButton component={Link} to={'/'}><IconHome/></IconButton>
          </ScheduleTitle>
          <GridContainer container>
          { newProfile.length < 1? pickerLoading :
            (<Fragment><GridItem xs={12} sm={4} md={3} item>
            <Card 
              userImage={newProfile.avatar}  
              email={newProfile.email} 
              firstName={newProfile.first_name} 
              lastName={newProfile.last_name} 
              id={newProfile.id} 
            />
            </GridItem >
            <GridItem xs={12} sm={8} md={9} item>
            <PickerContainer container>
              {loading ? pickerLoading : displayPicker}
            </PickerContainer>
            </GridItem>
            </Fragment>)}
          </GridContainer>
        </Fragment>
    );
}
 
Schedule.propTypes = {};
 

const mapStateToProps = (state)=>({
    data: state.data,
});

const MapActionsToProp={
    updateSchedule,
    getSchedule,
    getUsers,
    updateUsers,
}

export default connect(mapStateToProps, MapActionsToProp)(Schedule);
