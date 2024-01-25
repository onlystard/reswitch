import { memo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import globalStyles from 'styles'
import styles from '../styles'

import CustomButton from 'components/CustomButton'
import CustomInputField from 'components/CustomInputField'

type IModulesForgetPasswordViewProps = {
    onPressRegisterOTP: () => void
}

const ModulesForgetPasswordView = ({ onPressRegisterOTP }: IModulesForgetPasswordViewProps) => {
    const [email, setEmail] = useState<string>('');
    const [getOtp, setGetOtp] = useState<string>('')
    const [getPhoneNumber, setGetPhoneNumber] = useState<string>('')

    return (
        <View style={[globalStyles.fillWidth]}>
            <CustomInputField
                containerStyle={styles.viewInput}
                placeholder={'Email'}
                onChangeText={setEmail}
            />
            <View style={[styles.containerViewForgot]}>
                <CustomButton
                    title='Reset Password'
                    onPressButton={onPressRegisterOTP}
                    isDisabled={false}
                />
            </View>
            <TouchableOpacity
                style={[globalStyles.centered, styles.containerCreateAccount, globalStyles.flexDirectionRow]}
                onPress={onPressRegisterOTP}
            >
                <Text style={[globalStyles.textStandardFont12, styles.textForgot]}>{"A password reset link will be sent to your email?"}</Text>
                <Text style={[globalStyles.textStandardFont12, styles.textResend]}>{" Resend"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(ModulesForgetPasswordView)