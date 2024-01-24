import { useWindowDimensions } from 'react-native';
import Animated, {
    Extrapolation,
    SharedValue,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { Colors } from 'styles';

import styles from '../styles';

type Props = {
    index: number;
    x: SharedValue<number>;
};

const Dot = ({ index, x }: Props) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const animatedDotStyle = useAnimatedStyle(() => {
        const widthAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [10, 20, 10],
            Extrapolation.CLAMP,
        );

        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [0.5, 1, 0.5],
            Extrapolation.CLAMP,
        );
        return {
            width: widthAnimation,
            opacity: opacityAnimation,
        };
    });

    const animatedColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
            [Colors.PURPLE, Colors.PURPLE, Colors.PURPLE],
        );

        return {
            backgroundColor: backgroundColor,
        };
    });

    return (
        <Animated.View style={[styles.dots, animatedDotStyle, animatedColor]} />
    );
};

export default Dot;