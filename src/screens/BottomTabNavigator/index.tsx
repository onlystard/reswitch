import React from 'react';
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen';
import CustomBottomTab from './components/CustomBottomTab';
import WalletScreen from 'screens/WalletScreen';
import SettingScreen from 'screens/SettingScreen';
import EnergyScreen from 'screens/EnergyScreen';

type BottomTabParamList = {
    Home: undefined;
    Wallet: undefined;
    Setting: undefined;
    Energy: undefined;
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
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Energy" component={EnergyScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator