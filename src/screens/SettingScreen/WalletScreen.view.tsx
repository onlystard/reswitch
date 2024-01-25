import { memo } from 'react'
import { View, Text } from 'react-native'
import { ISettingScreenProps } from './SettingScreen.type'

const SettingScreen = (props: ISettingScreenProps) => {
    return (
        <View>
            <Text>SettingScreen</Text>
        </View>
    )
}

export default memo(SettingScreen)