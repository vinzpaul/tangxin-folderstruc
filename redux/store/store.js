import { createStore, combineReducers } from 'redux';
import FriendsReducer from "../reducers/FriendsReducer";
import friendsReducer from "../reducers/FriendsReducer";

const rootReducer = combineReducers({
    friends: friendsReducer
})

export const store = createStore(rootReducer);
