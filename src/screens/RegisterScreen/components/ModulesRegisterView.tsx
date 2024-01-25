import { memo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import globalStyles from 'styles'
import styles from '../styles'
import CustomButton from 'components/CustomButton'
import CustomInputField from 'components/CustomInputField'

type IModulesRegisterViewProps = {
    onPressButton: () => void
    onPressSignIn: () => void
}

const ModulesRegisterView = ({ onPressSignIn, onPressButton }: IModulesRegisterViewProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAgree, setIsAgree] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>('');

    return (
        <View style={[globalStyles.fillWidth]}>
            <View style={[styles.textInfoHeader]}>
                <Text style={[globalStyles.textStandardFont12, styles.textInfo]}>{"To provide you with the best energy billing and consumption management please register  with the same email you register with your Electricity Retailer."}</Text>
            </View>
            <CustomInputField
                containerStyle={styles.viewInput}
                placeholder={'Email'}
                onChangeText={setEmail}
            />
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
            <View style={[styles.viewTerms]}>
                <Text style={[globalStyles.textStandardFont12, styles.textForgot]}>{"By creating account you agree to our Terms and Conditions"}</Text>
            </View>
            <TouchableOpacity
                style={[styles.containerCreateAccount]}
                onPress={onPressSignIn}
            >
                <Text style={[globalStyles.textStandardFont12, styles.textForgot]}>{"Already have an account? Sign In Here"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(ModulesRegisterView)