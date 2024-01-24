import React from 'react'
import { createNavigationContainerRef, StackActions } from '@react-navigation/native'
import { IStackRouteProps } from 'routes/StackRouteProps'
import { IAuthNavigatorProps } from 'routes/AuthNavigator'

export const navigationRef = createNavigationContainerRef<IStackRouteProps>()
export const isReadyRef: any = React.createRef()
export const handleNotificationRef: any = React.createRef()
// export const navigationRef: any = React.createRef()
export interface INavigationProps {
    readonly key: keyof IAuthNavigatorProps | IStackRouteProps | any
    readonly params?: any
}
export interface INavigationGoBackProps extends INavigationProps {
    readonly backScreenPosition: number
}

export function navigate(params: INavigationProps) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(params.key, params.params)
    }
}

// export const navigate = (name: string, params?: any) => {
//     if (isReadyRef.current && navigationRef.current) {
//       navigationRef.current.navigate(name, params)
//     } else {
//       // You can decide what to do if the app hasn't mounted
//       // You can ignore this, or add these actions to a queue you can call later
//     }
//   }

export const replace = (name: string, params?: any) => {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(StackActions.replace(name, params))
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}

export const push = (name: string, params?: any) => {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(StackActions.push(name, params))
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}
export const pop = () => {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(StackActions.pop())
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}
