import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
//helps in handling dispatch
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';


const initialState ={};
const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
});

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware)
        ));

export default store;        

