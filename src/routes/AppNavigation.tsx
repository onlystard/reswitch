import { memo } from 'react'
import { isReadyRef, navigationRef } from 'utils/rootNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { RootState } from 'redux/global-reducers';

import FlashMessage from 'react-native-flash-message';
import AuthNavigator from './AuthNavigator';
import RootNavigation from './RootNavigation';

type IAppNavigationProps = {}

const AppNavigation = (props: IAppNavigationProps) => {
  const authToken = useSelector((state: RootState) => state.uidToken);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => { isReadyRef.current = true }}
    >
      {authToken.accessToken !== '' ? <RootNavigation /> : <AuthNavigator />}
      <FlashMessage position="top" animationDuration={500} duration={2500} animated />
    </NavigationContainer>
  )
}

export default memo(AppNavigation)