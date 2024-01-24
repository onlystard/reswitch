import React, { memo } from 'react';
import {
    Pressable,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import globalStyles, { Colors } from 'styles';

import styles from '../styles';
import BottomTabIcon from './BottomTabIcon';

const CustomBottomTab = ({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) => {
    const { width } = useWindowDimensions();
    const MARGIN = 20;
    const TAB_BAR_WIDTH = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

    const translateAnimation = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(TAB_WIDTH * state.index) }],
        };
    });

    return (
        <View style={{ backgroundColor: Colors.DARK_BLUE }}>
            <View style={[styles.tabBarContainer, globalStyles.shadowContainerWhite]}>
                <Animated.View
                    style={[
                        styles.slidingTabContainer,
                        globalStyles.shadowContainerPink,
                        { width: TAB_WIDTH },
                        translateAnimation,
                    ]}>
                    <View style={styles.slidingTab} />
                </Animated.View>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate(route.name, { merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <Pressable
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[globalStyles.container]}
                        >
                            <View style={styles.contentContainer}>
                                <BottomTabIcon route={route.name} isFocused={isFocused} />
                                <Text
                                    style={[
                                        globalStyles.textStandardFont12,
                                        {
                                            color: isFocused ? Colors.LINEAR_G3 : Colors.LINEAR_G8,
                                            fontWeight: isFocused ? 'bold' : '300'
                                        }]}
                                >
                                    {route.name}
                                </Text>
                            </View>
                        </Pressable>
                    );
                })}
            </View >
        </View>
    );
};

export default memo(CustomBottomTab);