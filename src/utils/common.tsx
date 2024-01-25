
import { Dimensions, Linking } from 'react-native';
import { PersistConfig } from 'redux-persist';
import { showMessage, MessageType } from 'react-native-flash-message';
import { IAction, IActionCallBack, INavigationAction, INotifyMessage } from "interfaces/sagas/common";
import { ReducerStatus } from 'interfaces/sagas/reducer';

import { FAILURE, SUCCESS } from 'redux/action-type-utils';
import { ILinkingGlobalProps } from 'interfaces/Linking';
// import Loader from 'components/Loader';

export type SagaAction<T> = (
  payload: T,
  showMessage?: INotifyMessage,
  navigation?: INavigationAction,
  showLoading?: boolean,
  callBack?: IActionCallBack
) => IAction<T>;

export function generateAction<T>(type: string): SagaAction<T> {
  const result = (
    payload: T,
    showMessage?: INotifyMessage,
    navigation?: INavigationAction,
    showLoading?: boolean,
    callBack?: IActionCallBack
  ) => {
    const action: IAction<T> = {
      type: type,
      response: {
        success: SUCCESS(type),
        fail: FAILURE(type),
      },
      payload,
      showLoading,
      showMessage,
      navigation,
      callBack,
    };

    return action;
  };
  return result;
}

// Show Message
export function alertMessage(type: MessageType, message: string, description?: string) {
  showMessage(
    {
      type,
      message,
      description,
      duration: type === "danger" ? 5000 : 3000,
    });
}

export interface IPersistConfig<S, RS = any, HSS = any, ESS = any> extends PersistConfig<S, RS, HSS, ESS> {
  readonly whitelist?: Extract<keyof S, string>[];
  readonly blacklist?: Extract<keyof S, string>[];
}

// wait on refresh
export const wait = (timeout: number) => {
  return new Promise((resolve: any) => setTimeout(resolve, timeout));
}

export const NOOP: any = () => {
  // TODO: something
}

export const formatLiteral = (text: string) => {
  let result = text
  result = result?.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  result = result?.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  result = result?.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  result = result?.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  result = result?.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  result = result?.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  result = result?.replace(/đ/g, 'd')
  result = result?.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  result = result?.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  result = result?.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  result = result?.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  result = result?.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  result = result?.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  result = result?.replace(/Đ/g, 'D')

  return result?.toLowerCase?.() || ''
}

export function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 90;
  return width / 4;
}

// export const renderLoader = (status: ReducerStatus) =>
//   status === ReducerStatus.LOADING || status === ReducerStatus.FAILED ? (
//     <View style={[globalStyles.container, globalStyles.centered]}>
//       <Loader loading={true} />
//     </View>
//   ) : null;

// export const AlertCustomMessages = (AlertTitle: string, AlertMsg: string, onPress?: any, onPressCancel?: any) => {
//   Alert.alert(
//     AlertTitle,
//     AlertMsg,
//     [
//       {
//         text: i18n.t('Cancel'),
//         style: 'destructive',
//         onPress: onPressCancel,
//       },
//       {
//         text: 'OK',
//         style: 'destructive',
//         onPress: onPress,
//       },
//     ],
//     {
//       cancelable: false,
//       userInterfaceStyle: "unspecified",
//     }
//   );
// };

export const LinkingGlobal = (
  { mailTo, tel, sms, url }: ILinkingGlobalProps,
  callBack?: () => void
) => {
  if (mailTo) {
    Linking.openURL(`mailto:${mailTo}`);
  }
  if (tel) {
    Linking.openURL(`tel:${tel}`);
  }
  if (sms) {
    Linking.openURL(`sms:${sms}`);
  }
  if (url) {
    Linking.openURL(url);
  }
  if (callBack) {
    callBack();
  }
}

export const getFeatureViewAnimation = (animatedValue: any, outputX: number) => {
  const TRANSLATE_X_INPUT_RANGE = [0, 80];
  const translateY = {
    translateY: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    }),
  };
  return {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: TRANSLATE_X_INPUT_RANGE,
          outputRange: [0, outputX],
          extrapolate: 'clamp',
        }),
      },
      translateY,
    ],
  };
};



