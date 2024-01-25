import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type IForgetPasswordScreenBaseProps = {};

type IForgetPasswordScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.ForgetPasswordScreen> & IForgetPasswordScreenBaseProps;

export type { IForgetPasswordScreenProps }