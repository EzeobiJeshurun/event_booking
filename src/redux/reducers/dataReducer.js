import { SET_SCHEDULES, CLEAR_ERRORS, SET_USERS, ERRORS, NETWORK_ERROR, UPDATE_SCHEDULES, UPDATE_USERS } from '../types';

const initialState = {
    error : false,
    currentUsers: [],
    schedule: [],
    networkError: false,
};


export default function (state= initialState, actions){
    switch(actions.type){
        case SET_USERS:
             return {
                 ...state,
                 currentUsers: actions.payload.data,
             };
         
        case UPDATE_USERS:
            const activeUsers = state.currentUsers
            return {
                ...state,
                currentUsers: [...activeUsers, ...actions.payload.data],
            };

        case ERRORS:
            return {
                ...state,
                error: true,
            }; 
            
        
        case UPDATE_SCHEDULES:    
                let index = state.schedule.findIndex(info=> info.id === actions.payload.id);
                state.schedule[index] = actions.payload;
                return {
                    ...state,
                };

       case SET_SCHEDULES:     
            return {
                ...state,
                schedule: actions.payload.data,
              };

        case CLEAR_ERRORS:

            return {
                ...state,
                error: false,
                networkError: false,
            };

        case NETWORK_ERROR:
            return {
                ...state,
                networkError: true,
            };
        
        default:   
            return state;
    }
}