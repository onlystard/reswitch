import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type ILoginScreenBaseProps = {};

type ILoginScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.LoginScreen> & ILoginScreenBaseProps;

export type { ILoginScreenProps }