import { memo } from 'react'
import { View, Text } from 'react-native'
import { IHomeScreenProps } from './HomeScreen.type'

const HomeScreen = (props: IHomeScreenProps) => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default memo(HomeScreen)