import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IStackRouteProps } from "routes/StackRouteProps";
import { EScreenName } from "routes/screenName";

type IWalletScreenBaseProps = {};

type IWalletScreenProps = NativeStackScreenProps<IStackRouteProps, EScreenName.WalletScreen> & IWalletScreenBaseProps;

export type { IWalletScreenProps }