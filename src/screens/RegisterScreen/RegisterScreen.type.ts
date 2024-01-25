import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuthNavigatorProps } from "routes/AuthNavigator";
import { EScreenName } from "routes/screenName";

type IRegisterScreenBaseProps = {};

type IRegisterScreenProps = NativeStackScreenProps<IAuthNavigatorProps, EScreenName.RegisterScreen> & IRegisterScreenBaseProps;

export type { IRegisterScreenProps }