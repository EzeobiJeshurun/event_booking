import { 
    SET_SCHEDULES,
    SET_SCHEDULE, 
    CLEAR_ERRORS, 
    SET_USERS, 
    ERRORS, 
    NETWORK_ERROR, 
    UPDATE_SCHEDULES,
    UPDATE_SCHEDULE, 
    UPDATE_USERS,
    LOADING,
    } from '../types';

const initialState = {
    error : false,
    currentUsers: [],
    schedules: [],
    networkError: false,
    schedule: {},
    loading: true,
    weekdays: [ "Sunday","Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
};


export default function (state= initialState, actions){
    switch(actions.type){
        case SET_USERS:
             return {
                 ...state,
                 currentUsers: actions.payload.data,
                 loading: false,
             };
         
        case UPDATE_USERS:
            const activeUsers = state.currentUsers
            return {
                ...state,
                currentUsers: [...activeUsers, ...actions.payload.data],
                loading: false,
            };

        case ERRORS:
            return {
                ...state,
                error: true,
                loading: false,
            }; 
            
        
        case UPDATE_SCHEDULES:    
                let index = state.schedules.findIndex(info=> info.id === actions.payload.id);
                state.schedules[index] = actions.payload;
                return {
                    ...state,
                    loading: false,
                };

       case SET_SCHEDULES:     
            return {
                ...state,
                schedules: actions.payload.data,
                loading: false,
              };

        case UPDATE_SCHEDULE:    
                
                return {
                    ...state,
                    schedule: actions.payload,
                    loading: false
                };

       case SET_SCHEDULE:     
            return {
                ...state,
                schedule: actions.payload.data,
                loading: false,
              };      

        case CLEAR_ERRORS:

            return {
                ...state,
                error: false,
                networkError: false,
                loading: false,
            };

        case NETWORK_ERROR:
            return {
                ...state,
                networkError: true,
                loading: false,
            };

        case LOADING: 
           return {
            ...state,
            loading: true,
          }    
        
        default:   
            return state;
    }
}