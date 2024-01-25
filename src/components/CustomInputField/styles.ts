import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, fontsCommon, getFontSize, getPercentHeight, getPercentWidth } from 'styles'

export default StyleSheet.create({
    innerContainer: {
        backgroundColor: Colors.PURPLE_OPACITY_70,
        borderWidth: 1,
        borderColor: Colors.PURPLE_OPACITY_70,
        borderRadius: 8,
        height: hp(`${getPercentHeight(58)}%`),
        justifyContent: 'center',
    },
    label: {
        marginTop: hp(`${getPercentHeight(6)}%`),
        position: 'absolute',
        color: Colors.RED,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: wp(`${getPercentWidth(12)}%`),
    },
    input: {
        flex: 1,
        fontSize: getFontSize(fontsCommon.font16),
        height: hp(`${getPercentHeight(48)}%`),
        marginTop: hp(`${getPercentHeight(8)}%`),
        paddingLeft: wp(`${getPercentWidth(16)}%`),
        color: Colors.PURPLE
    },
    errorText: {
        marginTop: hp(`${getPercentHeight(6)}%`),
        fontSize: getFontSize(fontsCommon.font14),
        color: Colors.RED,
    },
})
