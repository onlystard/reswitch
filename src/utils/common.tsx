
import { Alert, Dimensions, Linking } from 'react-native';
import { PersistConfig } from 'redux-persist';
import { showMessage, MessageType } from 'react-native-flash-message';
import { IAction, IActionCallBack, INavigationAction, INotifyMessage } from "interfaces/sagas/common";
import { ReducerStatus } from 'interfaces/sagas/reducer';

import uuid from 'react-native-uuid'
import globalStyles from 'styles';
import { FAILURE, SUCCESS } from 'redux/action-type-utils';
import { ILinkingGlobalProps } from 'interfaces/Linking';
import { EProductInfo } from './EnumGlobal';
// import Loader from 'components/Loader';

// Redux
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

// Generate with your own error data
// export function logger(type: string, message: string, stackTrace: string) {
//   const properties = { username: 'C123456' };

//   const exceptionModel = ExceptionModel.createFromTypeAndMessage(type, message, stackTrace);

//   Crashes.trackError(exceptionModel, properties);
// }

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

export const uidGlobal = uuid.v4()
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


export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

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

export function formatCurrency(number: number | string) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' vnđ';
}

export function extractDigitsWithUnit(inputNumber: number) {
  if (inputNumber < 0) {
    return 'Input must be a non-negative number';
  }

  const inputString = inputNumber.toString();
  let numberOfDigits;
  let unit;

  if (inputNumber >= 10000000) {
    numberOfDigits = 2;
    unit = 'Triệu';
  } else if (inputNumber >= 1000000) {
    numberOfDigits = 1;
    unit = 'Triệu';
  } else if (inputNumber >= 1000) {
    numberOfDigits = 3;
    unit = 'Nghìn';
  } else {
    numberOfDigits = inputString.length;
    unit = '';
  }

  const extractedNumber = parseInt(inputString.substring(0, numberOfDigits));
  const remainingNumber = parseInt(inputString.substring(numberOfDigits));

  let result = extractedNumber.toString();
  if (unit !== '' && remainingNumber > 0) {
    result += ` ${unit} ${remainingNumber}`;
  } else if (unit !== '') {
    result += ` ${unit}`;
  }

  return result.replace(/(\.0+|(?<=\d)0+)$/g, '');
}

export const getFormattedInfo = (item: any) => {
  switch (item?.title) {
    case EProductInfo.TOTAL_AMOUNT:
      return formatCurrency(item?.info);
    case EProductInfo.DAY_GOP_HUI:
      return `${item?.info} / 1 lần`;
    default:
      return item?.info;
  }
};

export function numberWithCommas(x: any) {
  if (x == undefined) {
    return 0
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
}

export function formatPhoneNumber(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  if (!/^\d+$/.test(cleanedNumber)) {
    return "Invalid phone number format";
  }

  if (cleanedNumber.startsWith('0')) {
    return "+84" + cleanedNumber.slice(1);
  } else if (cleanedNumber.startsWith('84')) {
    return "+" + cleanedNumber;
  } else if (cleanedNumber.startsWith('+84')) {
    return cleanedNumber;
  } else {
    return "Invalid country code";
  }
}


