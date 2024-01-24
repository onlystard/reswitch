import { memo } from 'react'
import { View, Text } from 'react-native'
import { ILoginScreenProps } from './LoginScreen.type'

const LoginScreen = (props: ILoginScreenProps) => {
    return (
        <View>
            <Text>LoginScreen</Text>
        </View>
    )
}

export default memo(LoginScreen)