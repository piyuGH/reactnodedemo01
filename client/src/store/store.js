import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer';
import authReducer from '../reducers/authReducer';
import userDetailsReducer from '../reducers/userDetailsReducer';

//auth - User Register and login
//userInfo - user details

const store = createStore(
  combineReducers({
    news: newsReducer,
    auth: authReducer,
    userInfo: userDetailsReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;