import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IParams } from './common'
import { IStackRouteProps } from 'routes/StackRouteProps'
import { EScreenName } from 'routes/screenName'
export interface ILoginParams extends IParams {
    readonly rememberMe?: boolean
    readonly phoneNumber?: number | string
    readonly password?: string
}
export interface ILogOutParams { }