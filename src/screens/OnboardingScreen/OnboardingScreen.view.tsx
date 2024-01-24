import { memo } from 'react'
import { View, Text } from 'react-native'
import { IOnboardingScreenProps } from './OnboardingScreen.type'

const OnboardingScreen = (props: IOnboardingScreenProps) => {
    return (
        <View>
            <Text>OnboardingScreen</Text>
        </View>
    )
}

export default memo(OnboardingScreen)