import { StyleSheet, Dimensions } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Platform from 'utils/Platform'

export const { width, height } = Dimensions.get('window')
export const STANDARD_HEIGHT = 722
export const STANDARD_WIDTH = 375
const DH = 812
const vh = height / DH
const vw = width / STANDARD_WIDTH

export const getPercentHeight = (height: number) => {
    return (height / STANDARD_HEIGHT) * 100
}
export const getPercentWidth = (width: number) => {
    return (width / STANDARD_WIDTH) * 100
}

export const getFontSize = (fontSize: number) => {
    if (height >= STANDARD_HEIGHT - 22) {
        return fontSize
    } else {
        return Number(((height / STANDARD_HEIGHT) * fontSize).toFixed(2))
    }
}

const sizeFont = (size: number) => size * (width < height ? vw : vh)

export const fontsCommon: any = {
    font1: sizeFont(1),
    font2: sizeFont(2),
    font3: sizeFont(3),
    font4: sizeFont(4),
    font5: sizeFont(5),
    font6: sizeFont(6),
    font7: sizeFont(7),
    font8: sizeFont(8),
    font9: sizeFont(9),
    font10: sizeFont(10),
    font11: sizeFont(11),
    font12: sizeFont(12),
    font13: sizeFont(13),
    font14: sizeFont(14),
    font15: sizeFont(15),
    font16: sizeFont(16),
    font17: sizeFont(17),
    font18: sizeFont(18),
    font19: sizeFont(19),
    font20: sizeFont(20),
    font21: sizeFont(21),
    font22: sizeFont(22),
    font23: sizeFont(23),
    font24: sizeFont(24),
    font25: sizeFont(25),
    font26: sizeFont(26),
    font27: sizeFont(27),
    font28: sizeFont(28),
    font29: sizeFont(29),
    font30: sizeFont(30),
    font31: sizeFont(31),
    font32: sizeFont(32),
    font33: sizeFont(33),
    font34: sizeFont(34),
    font35: sizeFont(35),
    font36: sizeFont(36),
    font37: sizeFont(37),
    font38: sizeFont(38),
    font39: sizeFont(39),
    font40: sizeFont(40),
    font41: sizeFont(41),
    font42: sizeFont(42),
    font43: sizeFont(43),
    font44: sizeFont(44),
    font45: sizeFont(45),
    font46: sizeFont(46),
    font47: sizeFont(47),
    font48: sizeFont(48),
    font56: sizeFont(56),
}

export const FontFamilyGlobal: any = {
    // PoppinsBlack: 'Poppins-Black',
    // PoppinsBlackItalic: 'Poppins-BlackItalic',
    // PoppinsBold: 'Poppins-Bold',
    // PoppinsBoldItalic: 'Poppins-BoldItalic',
    // PoppinsExtraBold: 'Poppins-ExtraBold',
    // PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
    // PoppinsExtraLight: 'Poppins-ExtraLight',
    // PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
    // PoppinsItalic: 'Poppins-Italic',
    // PoppinsLight: 'Poppins-Light',
    // PoppinsLightItalic: 'Poppins-LightItalic',
    // PoppinsMedium: 'Poppins-Medium',
    // PoppinsMediumItalic: 'Poppins-MediumItalic',
    // PoppinsRegular: 'Poppins-Regular',
    // PoppinsSemiBold: 'Poppins-SemiBold',
    // PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
    // PoppinsThin: 'Poppins-Thin',
    // PoppinsThinItalic: 'Poppins-ThinItalic',
}

export const Colors = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PURPLE: '#6837E3',

    BG_ALPHA_WHITE: 'rgba(255, 255, 255, 0.6)',
    BG_ALPHA_WHITE_8: 'rgba(255, 255, 255, 0.8)',
    BG_ALPHA_BLACK: 'rgba(0, 0, 0, 0.3)',
    BACKGROUND_MODAL: 'rgba(6, 13, 45, 0.8)',

    TEXT_OPACITY_70: '#00000070'
}

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerGrow: {
        flexGrow: 1,
    },
    overflowHidden: {
        overflow: 'hidden',
    },
    borderRadiusSkeletonLoadText: {
        borderRadius: 5,
    },
    container2: {
        width: '100%',
        height: '100%',
    },
    fillWidth: {
        width: '100%',
    },
    width90Percent: {
        width: '90%',
    },
    width80Percent: {
        width: '80%',
    },
    width70Percent: {
        width: '70%',
    },
    width60Percent: {
        width: '60%',
    },
    width50Percent: {
        width: '50%',
    },
    width40Percent: {
        width: '40%',
    },
    width30Percent: {
        width: '30%',
    },
    width20Percent: {
        width: '20%',
    },
    width10Percent: {
        width: '10%',
    },
    height10Percent: {
        height: '10%',
    },
    height20Percent: {
        height: '20%',
    },
    height30Percent: {
        height: '30%',
    },
    height40Percent: {
        height: '40%',
    },
    height50Percent: {
        height: '50%',
    },
    height60Percent: {
        height: '60%',
    },
    height70Percent: {
        height: '70%',
    },
    height80Percent: {
        height: '80%',
    },
    height90Percent: {
        height: '90%',
    },
    fillHeight: {
        height: '100%',
    },
    textAlignLeft: {
        textAlign: 'left',
    },
    textAlignRight: {
        textAlign: 'right',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    containerBackgroundWhite: {
        backgroundColor: Colors.WHITE,
    },
    positionAbsolute: {
        position: 'absolute',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    alignSelfEnd: {
        alignSelf: 'flex-end',
    },
    alignSelfStart: {
        alignSelf: 'flex-start',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    flexDirectionCol: {
        flexDirection: 'column',
    },
    alignSpaceAround: {
        alignContent: 'space-around',
    },
    alignSpaceBetween: {
        alignContent: 'space-between',
    },
    justifySpaceAround: {
        justifyContent: 'space-around',
    },
    justifySpaceBetween: {
        justifyContent: 'space-between',
    },
    justifySpaceEvenly: {
        justifyContent: 'space-evenly',
    },
    invisibleBackground: {
        position: 'absolute',
        width,
        height,
        zIndex: -1,
    },
    disableBackground: {
        opacity: 0.5,
    },
    disableBackground2: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    enableBackground: {
        opacity: 1,
    },
    modalBackground2: {
        backgroundColor: Colors.BACKGROUND_MODAL,
    },
    divider: {
        backgroundColor: Colors.BLACK,
        height: hp(`${getPercentHeight(0.2)}%`),
    },

    shadowContainerWhite: {
        shadowColor: Colors.WHITE,
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.68,
        elevation: Platform.isAndroid ? 2 : 5,
    },
    textStandardFont12: {
        color: Colors.BLACK,
        fontWeight: '300',
        fontStyle: 'normal',
        fontSize: getFontSize(fontsCommon.font12),
        // fontFamily: FontFamilyGlobal.PoppinsMedium,
    },
    textStandardFont14: {
        color: Colors.BLACK,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: getFontSize(fontsCommon.font14),
        // fontFamily: FontFamilyGlobal.PoppinsMedium,
    },
    textStandardFont16: {
        color: Colors.BLACK,
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: getFontSize(fontsCommon.font16),
        // fontFamily: FontFamilyGlobal.PoppinsMedium,
    },
})
export default globalStyles