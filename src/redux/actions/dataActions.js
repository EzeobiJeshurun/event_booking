import { SET_SCHEDULES, SET_USERS, ERRORS, NETWORK_ERROR, UPDATE_SCHEDULES, UPDATE_USERS } from '../types';
import axios from 'axios';

//remember to change all routes
export const getUsers = ()=>(dispatch)=>{
    axios.get('/weshout')
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

export const updateUsers = ()=>(dispatch)=>{
    axios.get('/weshout')
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

export const getSchedules = ()=>(dispatch)=>{
    axios.get('/weshout')
    .then((res)=>{
        dispatch({
            type: SET_SCHEDULES,
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

export const updateSchedules = (scheduleUpdate)=>(dispatch)=>{
    axios.post('/weshout', scheduleUpdate)
    .then((res)=>{
        dispatch({
            type: UPDATE_SCHEDULES,
            payload: scheduleUpdate,
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