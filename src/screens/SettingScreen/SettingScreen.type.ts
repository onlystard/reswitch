import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStackRouteProps } from "routes/StackRouteProps";
import { EScreenName } from "routes/screenName";

type ISettingScreenBaseProps = {};

type ISettingScreenProps = NativeStackScreenProps<IStackRouteProps, EScreenName.SettingScreen> & ISettingScreenBaseProps;

export type { ISettingScreenProps }