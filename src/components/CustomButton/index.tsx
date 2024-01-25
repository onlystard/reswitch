import { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import globalStyles, { Colors } from 'styles'
import styles from './styles'

type ICustomButtonProps = {
    title: string
    isDisabled: boolean
    onPressButton: () => void
}

const CustomButton = ({ title, isDisabled, onPressButton }: ICustomButtonProps) => {
    return (
        <TouchableOpacity
            style={[globalStyles.centered, styles.customButton]}
            onPress={onPressButton}
            disabled={isDisabled}
        >
            <Text style={[globalStyles.textStandardFont16, { color: Colors.WHITE, fontWeight: 'bold' }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default memo(CustomButton)