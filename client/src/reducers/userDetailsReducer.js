import constants from '../constants/actionTypes';

var initialState = {
    users: [],
    userDetail: {},
    userDetailLoading: true
};

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch (action.type) {

        case constants.USERS_RECEIVED:
            updated["users"] = action.users;
            return updated;

        case constants.USER_DETAILS_RECEIVED:
            updated["userDetails"] = action.userDetaills;
            updated["userDetailsLoading"] = false;
            return updated;

        case constants.USER_DETAILS_LOADING:
            updated["userDetailLoading"] = true;
            return updated;

        default:
            return state;
    }
}