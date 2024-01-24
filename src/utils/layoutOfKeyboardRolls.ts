import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LayoutChangeEvent } from 'react-native/Libraries/Types/CoreEventTypes';

import Platform from 'utils/Platform';

export const RenderScreen = Platform.isAndroid ? ScrollView : KeyboardAwareScrollView

export type GetScreenHeightFunction = (
    event: LayoutChangeEvent,
    screenHeight: number | null,
    setScreenHeight: React.Dispatch<React.SetStateAction<number | null>>
) => void;

export const getScreenHeight: GetScreenHeightFunction = (
    event,
    screenHeight,
    setScreenHeight
) => {
    if (screenHeight != null) {
        return;
    }
    if (event) {
        let { height } = event.nativeEvent.layout;
        setScreenHeight(height - (Platform.isAndroid ? 0 : 20));
    }
};
