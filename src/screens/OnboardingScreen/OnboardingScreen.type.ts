import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type IOnboardingScreenBaseProps = {};

type IOnboardingScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.OnboardingScreen> & IOnboardingScreenBaseProps;

export type { IOnboardingScreenProps }