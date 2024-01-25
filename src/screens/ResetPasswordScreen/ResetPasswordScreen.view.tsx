import { memo } from 'react'
import { View } from 'react-native'
import { ScreenNames } from 'routes/screenName'
import { IResetPasswordScreenProps } from './ResetPasswordScreen.type'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import globalStyles, { getPercentHeight, getPercentWidth } from 'styles'

import IconLogo from '../../../assets/icon/logo-reswitch.svg'
import ModulesResetPasswordView from './components/ModulesResetPasswordView'

const ResetPasswordScreen = (props: IResetPasswordScreenProps) => {

    const handleNavigationSignIn = () => {
        props.navigation.navigate(ScreenNames.screenNames.LoginScreen);
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
            <ModulesResetPasswordView
                onPressButton={handleNavigationSignIn}
            />
        </View>
    )
}

export default memo(ResetPasswordScreen)