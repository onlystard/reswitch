import { memo } from 'react'
import { ScreenNames } from 'routes/screenName'
import { View, FlatList, ViewToken } from 'react-native'
import { IOnboardingScreenProps, IOnboardingData } from './OnboardingScreen.type'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import dataOnboarding from './data/data'

import globalStyles from 'styles'
import styles from './styles'
import Pagination from './components/Pagination'
import CustomButton from './components/CustomButton'
import RenderItem from './components/RenderItem'


const OnboardingScreen = (props: IOnboardingScreenProps) => {
    const flatListRef = useAnimatedRef<FlatList<IOnboardingData>>();
    const x = useSharedValue(0);
    const flatListIndex = useSharedValue(0);

    const onViewableItemsChanged = ({
        viewableItems,
    }: {
        viewableItems: ViewToken[];
    }) => {
        if (viewableItems[0].index !== null) {
            flatListIndex.value = viewableItems[0].index;
        }
    };

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    const handleLogin = () => {
        setTimeout(() => {
            props.navigation.navigate(ScreenNames.screenNames.LoginScreen);
        }, 500)
    }

    return (
        <View style={[globalStyles.container, globalStyles.containerBackgroundWhite]}>
            <Animated.FlatList
                ref={flatListRef}
                onScroll={onScroll}
                data={dataOnboarding}
                renderItem={({ item, index }) => {
                    return <RenderItem item={item} index={index} x={x} />;
                }}
                keyExtractor={item => item.id}
                scrollEventThrottle={16}
                horizontal={true}
                bounces={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    minimumViewTime: 300,
                    viewAreaCoveragePercentThreshold: 10,
                }}
            />
            <View style={styles.bottomContainer}>
                <Pagination data={dataOnboarding} x={x} />
                <CustomButton
                    flatListRef={flatListRef}
                    flatListIndex={flatListIndex}
                    dataLength={dataOnboarding.length}
                    x={x}
                    onPressLogin={handleLogin}
                />
            </View>
        </View>
    )
}

export default memo(OnboardingScreen)