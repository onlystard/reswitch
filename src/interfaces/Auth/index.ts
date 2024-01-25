import { IAction, IActionCallBack, INavigationAction, INotifyMessage } from "interfaces/sagas/common"

export interface IResendOtpParams {
  readonly phoneNumber: string
  readonly password: string
}

export interface IUidTokenReducer {
  readonly success?: boolean
  readonly message?: string
  readonly data: {
    readonly id: number
    readonly name: string
    readonly email: string
    readonly accessToken: string
  }
}

export interface IRegisterRequestParams {
  readonly password: string
  readonly phoneNumber: string
}

export interface ICheckExistingPhoneNumberRequestParams {
  readonly uuid: string
  readonly phoneNumber: string
  readonly exist?: boolean;
  readonly verified?: boolean;
}

export interface IStatusReduxParams {
  readonly data: any
  readonly success: boolean | undefined
  readonly error: boolean | undefined
  readonly message: string
}

export interface ITokenResponse {
  readonly data: {
    readonly id?: number
    readonly name?: string
    readonly email?: string
    readonly accessToken?: string
  }
}


export interface ILogOutParams { }

