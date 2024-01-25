import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type IVerifyEmailScreenBaseProps = {};

type IVerifyEmailScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.VerifyEmailScreen> & IVerifyEmailScreenBaseProps;

export type { IVerifyEmailScreenProps }