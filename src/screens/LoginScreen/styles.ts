import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, getPercentHeight, getPercentWidth } from 'styles'

export default StyleSheet.create({
    viewInput: {
        marginHorizontal: wp(`${getPercentWidth(16)}%`),
    },
    viewInputPass: {
        marginHorizontal: wp(`${getPercentWidth(16)}%`),
        marginTop: hp(`${getPercentHeight(18)}%`),
    },
    containerViewForgot: {
        marginTop: hp(`${getPercentHeight(20)}%`),
        marginHorizontal: wp(`${getPercentWidth(16)}%`),
    },
    containerCreateAccount: {
        marginTop: hp(`${getPercentHeight(50)}%`),
        marginHorizontal: wp(`${getPercentWidth(16)}%`),
    },
    CheckBox: {
        marginRight: wp(`${getPercentWidth(6)}%`),
    },
    textRemember: {
        fontWeight: '600',
        color: Colors.TEXT_N9
    },
    textForgot: {
        fontWeight: '700',
        color: Colors.PURPLE
    },
})
