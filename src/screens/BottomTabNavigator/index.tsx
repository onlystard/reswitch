import React from 'react';
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen';
import LoungeScreen from 'screens/LoungeScreen';
import ProfileScreen from 'screens/ProfileScreen';
import CustomBottomTab from './components/CustomBottomTab';

type BottomTabParamList = {
    Home: undefined;
    Lounge: undefined;
    Profile: undefined;
}

type IBottomTabNavigatorProps = {}

const CustomBottomTabs = (props: BottomTabBarProps) => {
    return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = (props: IBottomTabNavigatorProps) => {
    const Tab = createBottomTabNavigator<BottomTabParamList>();

    return (
        <Tab.Navigator
            tabBar={CustomBottomTabs}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Lounge" component={LoungeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator