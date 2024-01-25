import { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import globalStyles, { getPercentHeight, getPercentWidth } from 'styles'
import styles from '../styles'

import CustomButton from 'components/CustomButton'
import IconLockOTP from '../../../../assets/icon/Icon-LockOTP.svg'

type IModulesOTPViewProps = {
    onPressSignIn: () => void
}

const ModulesOTPView = ({ onPressSignIn }: IModulesOTPViewProps) => {


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




            <View style={[styles.viewTerms, globalStyles.flexDirectionRow, globalStyles.alignCenter]}>
                <Text style={[globalStyles.textStandardFont12, styles.textRemember]}>{"Did not receive OTP ? "}</Text>
                <TouchableOpacity onPress={onPressSignIn} >
                    <Text style={[globalStyles.textStandardFont12, styles.textForgot]}>{"Resend"}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.containerViewForgot]}>
                <CustomButton
                    title='Confirm Number'
                    onPressButton={() => console.log('Login')}
                    isDisabled={false}
                />
            </View>
        </View>
    )
}

export default memo(ModulesOTPView)