import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStackRouteProps } from "routes/StackRouteProps";
import { EScreenName } from "routes/screenName";

type IEnergyScreenBaseProps = {};

type IEnergyScreenProps = NativeStackScreenProps<IStackRouteProps, EScreenName.EnergyScreen> & IEnergyScreenBaseProps;

export type { IEnergyScreenProps }