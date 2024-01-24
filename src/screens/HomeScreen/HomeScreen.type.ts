import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStackRouteProps } from "routes/StackRouteProps";
import { EScreenName } from "routes/screenName";

type IHomeScreenBaseProps = {};

type IHomeScreenProps = NativeStackScreenProps<IStackRouteProps, EScreenName.HomeScreen> & IHomeScreenBaseProps;

export type { IHomeScreenProps }