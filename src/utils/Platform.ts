import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');
const isPad = width >= 768 && height >= 1024;

export default {
    isAndroid: Platform.OS === 'android',
    isIos: Platform.OS === 'ios',
    isIPad: Platform.OS === 'ios' && Platform.isPad,
    isPad
}