import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type IResetPasswordScreenBaseProps = {};

type IResetPasswordScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.ResetPasswordScreen> & IResetPasswordScreenBaseProps;

export type { IResetPasswordScreenProps }