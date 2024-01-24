import { AnyAction } from 'redux'
import { INavigationGoBackProps, INavigationProps } from 'utils/rootNavigation'

export interface IParams {
    readonly [s: string]: any;
    readonly offset?: number;
    readonly fetchCount?: number;
    readonly loadMore?: boolean;
    readonly navigation?: INavigationProps;
    readonly showMessage?: INotifyMessage;
}

export interface IActionCallBack {
    readonly handleSuccess?: () => void
    readonly handleFail?: () => void
}

export interface IResponse<T> {
    [x: string]: any
    readonly error: boolean | any
    readonly success: boolean | any
    readonly data: T
}

export interface IRequest<T> extends AnyAction {
    readonly response: IResponseType
    readonly payload: T
}

export interface IObject {
    readonly data?: IObject | IObject[]
    readonly nextData?: IObject | IObject[]
    readonly next?: boolean
    readonly fetchMore?: boolean
}

export interface INotifyMessage {
    readonly message: string
    readonly description?: string
}

export interface INavigationAction extends INavigationProps {
    readonly clean?: boolean
    readonly goBackScreen?: INavigationProps | INavigationGoBackProps[]
}

export interface IParams {
    readonly loadMore?: boolean
    readonly navigation?: INavigationProps
    readonly showMessage?: INotifyMessage
}

export interface IAction<T> {
    readonly type: string
    readonly payload: T
    readonly showLoading?: boolean
    readonly hideLoading?: boolean
    readonly loadMore?: boolean
    readonly response?: { readonly success: string; readonly fail: string }
    readonly navigation?: INavigationAction
    readonly showMessage?: INotifyMessage
    readonly callBack?: IActionCallBack
}

export interface IResponseType {
    readonly success: string
    readonly failure: string
}

export interface IActionLoading<T> {
    readonly showLoading?: boolean
    readonly hideLoading?: boolean
}

export interface ISelf {
    lang: string
}
