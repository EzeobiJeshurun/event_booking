import { 
    SET_SCHEDULE, 
    SET_USERS, 
    ERRORS, 
    NETWORK_ERROR, 
    UPDATE_SCHEDULE, 
    UPDATE_USERS,
    LOADING,
    SNACKBAR_OPEN,
    SNACKBAR_CLOSE,
    } from '../types';

import axios from 'axios';

export const snackbarOpen = () => (dispatch) => {
    dispatch({type: SNACKBAR_OPEN});
}

//remember to change all routes
export const getUsers = ()=>(dispatch)=>{
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
        dispatch({
            type: SET_USERS,
            payload: res.data
        });
    })
    .catch((err)=>{
        const checkNetwork = String(err.response);
            
        if(checkNetwork !== 'undefined'){
            dispatch({
                type: ERRORS,
            });
  
        }else{

         dispatch({ type: NETWORK_ERROR });

         }
       
    });

};

export const updateUsers = (number)=>(dispatch)=>{
    axios.get(`https://reqres.in/api/users?page=${number}`)
    .then((res)=>{
        dispatch({
            type: UPDATE_USERS,
            payload: res.data
        });
    })
    .catch((err)=>{
        const checkNetwork = String(err.response);
            
        if(checkNetwork !== 'undefined'){
            dispatch({
                type: ERRORS,
            });
  
        }else{

         dispatch({ type: NETWORK_ERROR });
         
         }
       
    });

};

export const getSchedule = (id)=>(dispatch)=>{
    axios.get(`https://hourly-schedule.herokuapp.com/schedule/time/${id}`)
    .then((res)=>{
        dispatch({
            type: SET_SCHEDULE,
            payload: res.data
        });
    })
    .catch((err)=>{
        const checkNetwork = String(err.response);
            
        if(checkNetwork !== 'undefined'){
            dispatch({
                type: ERRORS,
            });
  
        }else{

         dispatch({ type: NETWORK_ERROR });
         
         }
       
    });

};

export const updateSchedule = (id,scheduleUpdate)=>(dispatch)=>{
    dispatch({type: LOADING});
    axios.put(`https://hourly-schedule.herokuapp.com/schedule/${id}`, scheduleUpdate)
    .then((res)=>{
        dispatch({
            type: UPDATE_SCHEDULE,
            payload: scheduleUpdate,
        });
        dispatch({type: SNACKBAR_OPEN});
    })
    .catch((err)=>{
        const checkNetwork = String(err.response);
            
        if(checkNetwork !== 'undefined'){
            dispatch({
                type: ERRORS,
            });
  
        }else{

         dispatch({ type: NETWORK_ERROR });
         
         }
       
    });

};

export const snackbarClose = () => (dispatch) => {
    dispatch({type: SNACKBAR_CLOSE});
}