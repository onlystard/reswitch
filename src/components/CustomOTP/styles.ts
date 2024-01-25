import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors, getFontSize, getPercentHeight, getPercentWidth } from 'styles'

export default StyleSheet.create({
  description: {
    color: Colors.PURPLE,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: wp(`${getPercentWidth(16)}%`),
    fontSize: getFontSize(14),
    textAlign: 'center',
  },
  contentUp: {
    fontWeight: '600',
    color: Colors.TEXT_N9
  },
  codeFieldRoot: {
    marginHorizontal: wp(`${getPercentWidth(6)}%`),
  },
  cell: {
    width: wp(`${getPercentWidth(70)}%`),
    height: hp(`${getPercentHeight(80)}%`),
    paddingVertical: hp(`${getPercentHeight(25)}%`),
    textAlign: 'center',
    fontSize: getFontSize(31),
    fontWeight: '700',
    borderColor: Colors.PURPLE_OPACITY_70,
    backgroundColor: Colors.PURPLE_OPACITY_70,
    borderRadius: 8,
    color: Colors.PURPLE,
  },
  focusCell: {
    borderColor: Colors.PURPLE,
  },
  errorCell: {
    borderColor: Colors.WHITE,
  },
  containerOTP: {
    backgroundColor: Colors.WHITE
  },
  textBelowContainer: {
    height: hp(`${getPercentHeight(26)}%`),
    marginVertical: hp(`${getPercentHeight(20)}%`),
    alignItems: 'center',
  },
  otpTextError: {
    marginBottom: hp(`${getPercentHeight(20)}%`),
    textAlign: 'center',
    color: Colors.RED,
    fontSize: getFontSize(16),
  },
  textResend: {
    marginLeft: hp(`${getPercentHeight(8)}%`),
    fontSize: getFontSize(16),
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.PURPLE,
  },
  touchable: {
    marginLeft: hp(`${getPercentHeight(8)}%`),
    fontSize: getFontSize(16),
    fontWeight: '500',
    color: Colors.PURPLE,
  },
  timer: {
    marginLeft: hp(`${getPercentHeight(8)}%`),
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: getFontSize(14),
  },
})
