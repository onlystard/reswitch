import { memo, useState } from 'react'
import { View, Text } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import globalStyles, { getPercentHeight, getPercentWidth } from 'styles'
import styles from '../styles'

import CustomButton from 'components/CustomButton'
import CustomOTP from 'components/CustomOTP'

import IconLockOTP from '../../../../assets/icon/Icon-LockOTP.svg'

type IModulesOTPViewProps = {
    onPressButtonOTP: () => void
}

const ModulesOTPView = ({ onPressButtonOTP }: IModulesOTPViewProps) => {
    const [getOtp, setGetOtp] = useState<string>('')
    const [getPhoneNumber, setGetPhoneNumber] = useState<string>('')

    return (
        <View style={[globalStyles.fillWidth]}>
            <View style={[globalStyles.centered]}>
                <IconLockOTP
                    key='logoReswitch'
                    width={wp(`${getPercentWidth(128)}%`)}
                    height={hp(`${getPercentHeight(128)}%`)}
                />
                <Text style={[globalStyles.textStandardFont16, styles.textOTP]}>{"OTP Authentication"}</Text>
                <View style={[styles.textInfoHeader]}>
                    <Text style={[globalStyles.textStandardFont12, styles.textInfo]}>{"We have sent you an authentication code to you mobile number sarah@mail.com"}</Text>
                </View>
            </View>
            <View style={[styles.viewTerms, globalStyles.alignCenter]}>
                <CustomOTP setPhoneNumber={getPhoneNumber} OTPValue={(values: string) => setGetOtp(values)} />
            </View>
            <View style={[styles.containerViewForgot]}>
                <CustomButton
                    title='Confirm Number'
                    onPressButton={onPressButtonOTP}
                    isDisabled={false}
                />
            </View>
        </View>
    )
}

export default memo(ModulesOTPView)