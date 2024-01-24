import { memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IStackRouteProps } from './StackRouteProps';
import { ScreenNames } from './screenName';

import BottomTabNavigator from 'screens/BottomTabNavigator';

type INavigationProps = {}

export const Tab = createBottomTabNavigator<IStackRouteProps>();
export const Stack = createNativeStackNavigator<IStackRouteProps>();

const RootNavigation = (props: INavigationProps) => {

    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.screenNames.BottomTabNavigator}
        >
            <Stack.Screen
                name={ScreenNames.screenNames.BottomTabNavigator}
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name={ScreenNames.screenNames.HomeScreen}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.LoungeScreen}
                component={LoungeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.ProfileScreen}
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.CardTableDetailScreen}
                component={CardTableDetailScreen}
                options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.SecurityScreen}
                component={SecurityScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.SettingScreen}
                component={SettingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.PaymentsScreen}
                component={PaymentsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.NotificationScreen}
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.RewardPointScreen}
                component={RewardPointScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.ManagedTableScreen}
                component={ManagedTableScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.StatisticalScreen}
                component={StatisticalScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.HelpAndSupportScreen}
                component={HelpAndSupportScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.screenNames.CreateTableScreen}
                component={CreateTableScreen}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    )
}

export default memo(RootNavigation)
