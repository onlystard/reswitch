import { combineReducers } from 'redux';
import * as authenticationReducers from './Authentication';

const appReducer = combineReducers({
    // Authentication
    uidToken: authenticationReducers.uidToken,
    checkExistUserPhoneNumber: authenticationReducers.CheckExistUserPhoneNumber

});

export type RootState = ReturnType<typeof appReducer>;
export const rootReducer = appReducer;
