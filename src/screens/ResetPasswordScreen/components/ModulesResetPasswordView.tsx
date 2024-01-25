import { memo, useState } from 'react'
import { View } from 'react-native'

import globalStyles from 'styles'
import styles from '../styles'
import CustomButton from 'components/CustomButton'
import CustomInputField from 'components/CustomInputField'

type IModulesResetPasswordViewProps = {
    onPressButton: () => void
}

const ModulesResetPasswordView = ({ onPressButton }: IModulesResetPasswordViewProps) => {
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    return (
        <View style={[globalStyles.fillWidth]}>
            <CustomInputField
                containerStyle={styles.viewInputPass}
                placeholder={'Password'}
                onChangeText={setPassword}
                error={passwordError}
                secureTextEntry
            />
            <CustomInputField
                containerStyle={styles.viewInputPass}
                placeholder={'Confirm Password'}
                onChangeText={setPassword}
                error={passwordError}
                secureTextEntry
            />
            <View style={[styles.containerViewForgot]}>
                <CustomButton
                    title='Sign Up Now'
                    onPressButton={onPressButton}
                    isDisabled={false}
                />
            </View>
        </View>
    )
}

export default memo(ModulesResetPasswordView)