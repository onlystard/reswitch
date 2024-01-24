import { ICheckExistingPhoneNumberRequestParams } from 'interfaces/Auth'
import { IUidTokenReducer } from 'interfaces/reducers/IAuthTokenReducer'
import { ILogOutParams } from 'interfaces/sagas/authentication'
import { IAction } from 'interfaces/sagas/common'
import { ILoadingReducer, ReducerStatus } from 'interfaces/sagas/reducer'
import { FAILURE, SUCCESS } from 'redux/action-type-utils'
import { AUTHENTICATION_CHECK_EXISTING_PHONE_NUMBER_REQUEST, AUTHENTICATION_REMOVE_TOKEN, AUTHENTICATION_UID_TOKEN, LOGOUT_REQUEST } from 'redux/actions'

const defaultAuthTokenState: IUidTokenReducer = {
    accessToken: '',
    uid: '',
    refreshToken: '',
    lastLoggedInAt: 0
}

export function uidToken(
    state: IUidTokenReducer = defaultAuthTokenState,
    action: IAction<IUidTokenReducer>,
): IUidTokenReducer {
    switch (action.type) {
        case AUTHENTICATION_UID_TOKEN:
            const newData = action.payload
            if (newData && newData.accessToken !== '') {
                newData.lastLoggedInAt = new Date().getTime();
            }
            return { ...state, ...newData }
        case AUTHENTICATION_REMOVE_TOKEN:
            return { ...state, ...defaultAuthTokenState }
        default:
            return state
    }
}

export function logOutParams(state: ILogOutParams = {}, action: IAction<ILogOutParams>): ILogOutParams {
    switch (action.type) {
        case LOGOUT_REQUEST:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export function CheckExistUserPhoneNumber(
    state: ILoadingReducer<ICheckExistingPhoneNumberRequestParams | null> = {
        data: null,
        status: ReducerStatus.LOADING,
    },
    action: IAction<ICheckExistingPhoneNumberRequestParams>
): ILoadingReducer<ICheckExistingPhoneNumberRequestParams | null> {
    switch (action.type) {
        case AUTHENTICATION_CHECK_EXISTING_PHONE_NUMBER_REQUEST:
            return { data: null, status: ReducerStatus.LOADING };
        case SUCCESS(AUTHENTICATION_CHECK_EXISTING_PHONE_NUMBER_REQUEST):
            return { data: action.payload != null ? { ...action.payload } : null, status: ReducerStatus.SUCCESS };
        case FAILURE(AUTHENTICATION_CHECK_EXISTING_PHONE_NUMBER_REQUEST):
            return { data: null, status: ReducerStatus.FAILED };
        default:
            return state;
    }
}