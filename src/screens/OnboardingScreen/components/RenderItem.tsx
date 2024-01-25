import { Text, View, useWindowDimensions, Image } from 'react-native';
import Animated, {
    Extrapolation,
    SharedValue,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { IOnboardingData } from '../OnboardingScreen.type';

import styles from '../styles';
import globalStyles from 'styles';

type IRenderItemProps = {
    index: number;
    x: SharedValue<number>;
    item: IOnboardingData;
};

const RenderItem = ({ index, x, item }: IRenderItemProps) => {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

    const lottieAnimationStyle = useAnimatedStyle(() => {
        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [200, 0, -200],
            Extrapolation.CLAMP,
        );

        return {
            transform: [{ translateY: translateYAnimation }],
        };
    });

    return (
        <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
            <View style={styles.circleContainer} />
            <Animated.View style={lottieAnimationStyle}>
                <Image
                    source={item?.imageAnimation}
                    style={{
                        width: SCREEN_WIDTH,
                        height: SCREEN_HEIGHT,
                    }}
                />
            </Animated.View>
            <View style={[styles.viewText]}>
                <Text style={[styles.itemText]}>
                    {item?.textTitle}
                </Text>
                <Text style={[globalStyles.textStandardFont12, styles.textDescription]}>
                    {item?.textDescription}
                </Text>
            </View>
        </View>
    );
};

export default RenderItem;