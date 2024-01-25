import { memo, useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

import CheckBox from 'react-native-check-box';
import CustomInputField from 'components/CustomInputField'
import globalStyles from 'styles'
import styles from '../styles'

import IconUnCheck from '../../../../assets/icon/Icon-unchecked.svg'
import CustomButton from 'components/CustomButton';

type IModulesLoginViewProps = {
    onPressRegister: () => void
}

const ModulesLoginView = ({ onPressRegister }: IModulesLoginViewProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAgree, setIsAgree] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>('');

    return (
        <View style={[globalStyles.fillWidth]}>
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
            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, styles.containerViewForgot]}>
                <View style={[globalStyles.flexDirectionRow]}>
                    <CheckBox
                        style={styles.CheckBox}
                        isChecked={isAgree}
                        onClick={() => setIsAgree(!isAgree)}
                        unCheckedImage={<IconUnCheck width={16} height={16} />}
                        checkedImage={<IconUnCheck width={16} height={16} />}
                    />
                    <Text style={[globalStyles.textStandardFont12, styles.textRemember]}>
                        {"Remember Me"}
                    </Text>
                </View>
                <Text style={[globalStyles.textStandardFont12, styles.textForgot]}>{"Forgot password ?"}</Text>
            </View>
            <View style={[styles.containerViewForgot]}>
                <CustomButton
                    title='Login'
                    onPressButton={() => console.log('Login')}
                    isDisabled={!isAgree}
                />
            </View>
            <TouchableOpacity
                style={[globalStyles.centered, styles.containerCreateAccount]}
                onPress={onPressRegister}
            >
                <Text style={[globalStyles.textStandardFont12, styles.textForgot]}>{"Create an account"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(ModulesLoginView)