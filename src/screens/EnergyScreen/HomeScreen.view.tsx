import { memo } from 'react'
import { View, Text } from 'react-native'
import { IEnergyScreenProps } from './EnergyScreen.type'

const EnergyScreen = (props: IEnergyScreenProps) => {
    return (
        <View>
            <Text>EnergyScreen</Text>
        </View>
    )
}

export default memo(EnergyScreen)