import {
    TouchableWithoutFeedback,
    useWindowDimensions,
} from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { Colors } from 'styles';
import { ICustomButtonProps } from '../OnboardingScreen.type';

import styles from '../styles';

const CustomButton = ({ flatListRef, flatListIndex, dataLength, x, onPressLogin }: ICustomButtonProps) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const buttonAnimationStyle = useAnimatedStyle(() => {
        return {
            width:
                flatListIndex.value === 0
                    ? withSpring(140)
                    : withSpring(60),
            height: 60,
        };
    });

    const arrowAnimationStyle = useAnimatedStyle(() => {
        return {
            width: 30,
            height: 20,
            opacity:
                flatListIndex.value === 0 ? withTiming(0) : withTiming(1),
            transform: [
                {
                    translateX:
                        flatListIndex.value === 0
                            ? withTiming(100)
                            : withTiming(0),
                },
            ],
        };
    });

    const textAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity:
                flatListIndex.value === 0 ? withTiming(1) : withTiming(0),
            transform: [
                {
                    translateX:
                        flatListIndex.value === 0
                            ? withTiming(0)
                            : withTiming(-100),
                },
            ],
        };
    });
    const animatedColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
            [Colors.PURPLE, Colors.BLACK, Colors.BLACK],
        );

        return {
            backgroundColor: backgroundColor,
        };
    });

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (flatListIndex.value < dataLength - 1) {
                    flatListRef.current?.scrollToIndex({ index: flatListIndex.value + 1 });
                } else {
                    onPressLogin()
                }
            }}>
            <Animated.View
                style={[styles.containerCustomButton, buttonAnimationStyle, animatedColor]}>
                <Animated.Text style={[styles.textButton, textAnimationStyle]}>
                    Get Started
                </Animated.Text>
                <Animated.Image
                    source={require('../../../../assets/images/icon-arrow-right.png')}
                    style={[styles.arrow, arrowAnimationStyle]}
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default CustomButton;