import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, getPercentHeight, getPercentWidth } from 'styles'

export default StyleSheet.create({
    tabBarContainer: {
        flex: 1,
        flexDirection: 'row',
        height: hp(`${getPercentHeight(60)}%`),
        alignSelf: 'center',
        backgroundColor: Colors.LINEAR_G3,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    tabBarContainerLinearGradient: {
        alignSelf: 'center',
        height: hp(`${getPercentHeight(62)}%`),
        backgroundColor: Colors.LINEAR_G6,
        borderRadius: 60,
        padding: hp(`${getPercentHeight(2)}%`),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.LINEAR_G8
    },
    slidingTabContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slidingTab: {
        width: 54,
        height: 54,
        borderRadius: 54 / 2,
        backgroundColor: Colors.LINEAR_G8,
        borderWidth: 1,
        borderColor: Colors.LINEAR_G1
    },
    contentContainer: {
        marginLeft: wp(`${getPercentWidth(2)}%`),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
})
