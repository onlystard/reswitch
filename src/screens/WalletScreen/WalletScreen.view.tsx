import { memo } from 'react'
import { View, Text } from 'react-native'
import { IWalletScreenProps } from './WalletScreen.type'

const WalletScreen = (props: IWalletScreenProps) => {
    return (
        <View>
            <Text>WalletScreen</Text>
        </View>
    )
}

export default memo(WalletScreen)