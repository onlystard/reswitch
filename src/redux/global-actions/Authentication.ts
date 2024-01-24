import {
  IRegisterRequestParams,
  IUidTokenReducer,
} from 'interfaces/Auth'
import {
  AUTHENTICATION_REMOVE_TOKEN,
  AUTHENTICATION_UID_TOKEN,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
} from '../actions'
import { IAction } from 'interfaces/sagas/common'
import { SagaAction, generateAction } from 'utils/common'

export const RegisterRequest = generateAction<IRegisterRequestParams>(REGISTER_REQUEST)

export const logOutParams: SagaAction<any> = generateAction(LOGOUT_REQUEST)

export const setUidToken = (payload: IUidTokenReducer): IAction<IUidTokenReducer> => {
  return {
    type: AUTHENTICATION_UID_TOKEN,
    payload,
  }
}

export const removeAuthToken = () => {
  return {
    type: AUTHENTICATION_REMOVE_TOKEN,
  }
}
