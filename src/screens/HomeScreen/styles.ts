import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, fontsCommon, getFontSize, getPercentHeight, getPercentWidth } from 'styles'

export default StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: hp(`${getPercentHeight(30)}%`),
        paddingVertical: wp(`${getPercentWidth(30)}%`),
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    containerCustomButton: {
        backgroundColor: Colors.LINEAR_G6,
        padding: hp(`${getPercentHeight(10)}%`),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    containerCustomButtonLinearGradient: {
        backgroundColor: Colors.LINEAR_G6,
        padding: hp(`${getPercentHeight(2)}%`),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    arrow: {
        position: 'absolute',
    },
    textButton: {
        color: Colors.WHITE,
        fontSize: getFontSize(fontsCommon.font16),
        position: 'absolute'
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: hp(`${getPercentHeight(120)}%`),
    },
    itemText: {
        textAlign: 'center',
        fontSize: getFontSize(fontsCommon.font38),
        fontWeight: 'bold',
        marginBottom: hp(`${getPercentHeight(10)}%`),
        marginHorizontal: wp(`${getPercentWidth(20)}%`),
    },
    circleContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    paginationContainer: {
        flexDirection: 'row',
        height: hp(`${getPercentHeight(40)}%`),
        justifyContent: 'center',
        alignItems: 'center',
    },
    dots: {
        height: hp(`${getPercentHeight(10)}%`),
        marginHorizontal: wp(`${getPercentWidth(10)}%`),
        borderRadius: 5,
    },
})
