import React, {Fragment, useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
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
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { 
  updateSchedule, 
  getSchedule, 
  getUsers, 
  updateUsers,
  snackbarClose, 
  } from '../../redux/actions/dataActions';
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday);

const Schedule = (props) => {
  const {
    data: { schedule, loading, currentUsers, weekdays, snackbar }, 
    updateSchedule, 
    getSchedule, 
    getUsers,
    snackbarClose,
     } = props;
  const match = props.match;
  const fetchUsers = getUsers;
  const addUsers = updateUsers;
  const now = dayjs();
  const [userSchedule, setUserSchedule] = useState({});
  const [newProfile, setNewProfile] = useState([]);
  const update = useCallback(updateSchedule,[schedule]);
  const profileId = match.params.id;
  const handleCloseSnackbar = snackbarClose;
  const [open, setOpen] = useState(false);
  
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
  
    },[currentUsers, addUsers, profileId]);

  useEffect(() => {

      if (profile) {
        setNewProfile(profile);
      }
      
      if(profileId) {
       fetchProfileSchedule(profileId);
      }
    
  }, [ profileId, profile, fetchProfileSchedule]);
  
  useEffect(() => {
    if(currentUsers.length < 1 && currentUsers.length < 12) {
       fetchUsers();
    }

    setOpen(snackbar);
  
  }, [fetchUsers, currentUsers.length, snackbar]);

  useEffect(() => {
      if (schedule) {
        setUserSchedule(schedule);
      }
  }, [schedule, ]);
  
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
            <div>Meet us today {weekdays[now.weekday()]}, pick a time</div>
            <IconButton component={Link} to={'/'}><IconHome/></IconButton>
          </ScheduleTitle>
          <GridContainer data-testid="schedule-page-container" container>
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
            <PickerContainer data-testid="schedule-page-picker-container" container>
              {loading ? pickerLoading : displayPicker}
            </PickerContainer>
            </GridItem>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert 
               onClose={handleCloseSnackbar} 
               severity="success"
               elevation={7}
               variant="filled"
               >
                We have received your schedule and hope to speak with you today
              </Alert>
            </Snackbar>
            </Fragment>)}
          </GridContainer>
        </Fragment>
    );
}

const mapStateToProps = (state)=>({
    data: state.data,
});

const MapActionsToProp={
    updateSchedule,
    getSchedule,
    getUsers,
    updateUsers,
    snackbarClose,
}

export default connect(mapStateToProps, MapActionsToProp)(Schedule);
