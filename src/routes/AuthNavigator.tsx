import { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenNames } from './screenName';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/global-reducers';

import OnboardingScreen from 'screens/OnboardingScreen';
import LoginScreen from 'screens/LoginScreen';

export type IAuthNavigatorProps = {
  readonly OnboardingScreen: undefined;
  readonly LoginScreen: undefined;
}

type INavigationProps = {}

const Stack = createStackNavigator<IAuthNavigatorProps>()

const AuthNavigator = (props: INavigationProps) => {
  const authToken = useSelector((state: RootState) => state.uidToken);

  return (
    <Stack.Navigator
      initialRouteName={
        authToken?.lastLoggedInAt ?
          ScreenNames.screenNames.LoginScreen :
          ScreenNames.screenNames.OnboardingScreen
      }
    >
      <Stack.Screen
        name={ScreenNames.screenNames.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.screenNames.OnboardingScreen}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator >
  )
}

export default memo(AuthNavigator)