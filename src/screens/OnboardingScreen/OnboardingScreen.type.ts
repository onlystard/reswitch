import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { AnimatedRef, SharedValue } from "react-native-reanimated";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type IOnboardingScreenBaseProps = {};

type IOnboardingScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.OnboardingScreen> & IOnboardingScreenBaseProps;

export type { IOnboardingScreenProps }

export interface IOnboardingData {
    id: number;
    imageAnimation: any;
    textTitle: string;
    textDescription: string
}

export type ICustomButtonProps = {
    dataLength: number;
    flatListIndex: SharedValue<number>;
    flatListRef: AnimatedRef<FlatList<IOnboardingData>>;
    x: SharedValue<number>;
    onPressLogin: () => void
};