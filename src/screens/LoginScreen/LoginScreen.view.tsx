import { memo } from 'react'
import { View } from 'react-native'
import { ILoginScreenProps } from './LoginScreen.type'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScreenNames } from 'routes/screenName'

import globalStyles, { getPercentHeight, getPercentWidth } from 'styles'
import ModulesLoginView from './components/ModulesLoginView'

import IconLogo from '../../../assets/icon/logo-reswitch.svg'

const LoginScreen = (props: ILoginScreenProps) => {
    const handleNavigationRegister = () => {
        props.navigation.navigate(ScreenNames.screenNames.RegisterScreen);
    }
    const handleNavigationForgetPassword = () => {
        props.navigation.navigate(ScreenNames.screenNames.ForgetPasswordScreen);
    }

    return (
        <View style={[globalStyles.container, globalStyles.containerBackgroundWhite, globalStyles.justifySpaceEvenly, globalStyles.alignCenter]}>
            <View>
                <IconLogo
                    key='logoReswitch'
                    width={wp(`${getPercentWidth(140)}%`)}
                    height={hp(`${getPercentHeight(30)}%`)}
                />
            </View>
            <ModulesLoginView
                onPressRegister={handleNavigationRegister}
                onPressForgot={handleNavigationForgetPassword}
            />
        </View>
    );
};

export default memo(LoginScreen)