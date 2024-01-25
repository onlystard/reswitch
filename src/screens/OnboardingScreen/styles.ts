import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, fontsCommon, getFontSize, getPercentHeight, getPercentWidth } from 'styles'

export default StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(`${getPercentWidth(30)}%`),
        paddingVertical: hp(`${getPercentHeight(30)}%`),
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
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
    containerCustomButton: {
        backgroundColor: Colors.PURPLE,
        padding: 10,
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
        alignItems: 'center',
    },
    itemText: {
        marginTop: hp(`${getPercentHeight(12)}%`),
        color: Colors.BLACK,
        textAlign: 'left',
        fontSize: getFontSize(fontsCommon.font18),
        fontWeight: '700',
    },
    textDescription: {
        marginTop: hp(`${getPercentHeight(8)}%`),
        textAlign: 'left',
    },
    circleContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewText: {
        flex: 1,
        marginHorizontal: wp(`${getPercentWidth(16)}%`),
        height: '75%',
        position: 'absolute',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        color: Colors.TEXT_OPACITY_70
    }
})
