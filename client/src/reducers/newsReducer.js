/*
Redux integration and state management
Before integrating React-redux it is worthwhile quickly explaining Flux.

Flux is an architecture used by Facebook when they are working with React. The components of this architecture are:

  Actions - These are methods which send data to the dispatcher

  Dispatcher - This receives the actions and then sends the payloads of the actions to all the registered callback functions

  Stores - These contain the application state, usually separated into the different domains of your application

  Views - The views listen for the state changes and pass it on to their child components

Together they work as follows:

The user interacts with the view. This triggers an action. The action goes to the dispatcher which then invokes a corresponding function. 
This function changes the data in the store. Upon the store altering, the views are notified, these then update themselves and their childs. 
This is called a unidirectional data flow.

Redux is an evolution of this architecture.

It follows three principles:

Single source of truth - The state for the entire application is in a single store.
State is read only - The only way to change state is to dispatch an action which will result in the state changing.
Changes are made with pure functions - These pure functions transform the state and are called reducers.

In summary - actions are dispatched, reducers take the actions and based on them modify the application state. 
Views listen to this state change and alter accordingly.
*/
import constants from '../constants/actionTypes'

var initialState = {
  news: [],
  newsItem: {},
  newsItemLoading: true
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state);

  switch (action.type) {

    case constants.NEWS_RECEIVED:
      updated['news'] = action.news;
      return updated;

    case constants.NEWSITEM_RECEIVED:
      updated['newsItem'] = action.newsItem;
      updated['newsItemLoading'] = false;
      return updated;

    case constants.NEWSITEM_LOADING:
      updated['newsItemLoading'] = true;
      return updated

    default:
      return state;
  }
}