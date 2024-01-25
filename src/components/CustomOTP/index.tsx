import { memo, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, AppState, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useDispatch } from 'react-redux';
import { IResendOtpParams } from 'interfaces/Auth';

import globalStyles from 'styles'
import styles from './styles'
import useUpdateEffect from 'hooks/useUpdateEffect';

const NUMBER_OF_OTP_FIELD = 4;
const COUNT_DOWN_OTP = 60

type ICustomOTPProps = {
    setPhoneNumber: string
    OTPValue: any
    stylesOTP?: StyleProp<ViewStyle>
    stylesText?: StyleProp<TextStyle>
    stylesCell?: StyleProp<TextStyle>
    stylesFocusCell?: StyleProp<TextStyle>
}

const CustomOTP = ({ setPhoneNumber, OTPValue, stylesOTP, stylesText, stylesCell, stylesFocusCell }: ICustomOTPProps) => {
    let interval = useRef<any>(null);
    const dispatch = useDispatch();
    const [otpValue, setOTPValue] = useState<any>('');
    const [otpError, setOtpError] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(COUNT_DOWN_OTP);
    const [otpErrorContent, setOtpErrorContent] = useState<string>('');
    const [currentMoment, setCurrentMoment] = useState<number>(0);
    const [getTimeBackground, setGetTimeBackground] = useState<number>(0);
    const ref = useBlurOnFulfill({ value: otpValue, cellCount: NUMBER_OF_OTP_FIELD });

    const onChangeOTPValue = (value: string) => {
        OTPValue(value)
        setOTPValue(value);
        setOtpError(false);
        setOtpErrorContent('');
    };

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer((prevTime: number) => {
                if (prevTime - 1 <= 0 && interval.current) {
                    clearInterval(interval.current);
                }
                return prevTime - 1;
            });
        }, 1000);
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (nextAppState === 'background') {
                let time = new Date();
                setGetTimeBackground(time.getTime());
            }
            if (nextAppState === 'active') {
                let time = new Date();
                setCurrentMoment(time.getTime());
            }
        });
        return () => {
            subscription.remove();
            interval != null && interval.current != null && clearInterval(interval.current);
        };
    }, []);

    useUpdateEffect(() => {
        const gap = Math.round((currentMoment - getTimeBackground) / 1000);
        gap >= 0 && setTimer(timer - gap);
    }, [currentMoment, getTimeBackground]);

    const resendOTP = () => {
        setTimer(COUNT_DOWN_OTP);
        interval != null && interval.current && clearInterval(interval.current);
        interval.current = setInterval(() => {
            setTimer((prevTime: number) => {
                if (prevTime - 1 <= 0 && interval.current) {
                    clearInterval(interval.current);
                }
                return prevTime - 1;
            });
        }, 1000);
        // const params: IResendOtpParams = {
        //     phoneNumber: setPhoneNumber
        // }
        // dispatch(getResendOTP(params));
    };

    const [props2] = useClearByFocusCell({
        value: otpValue,
        setValue: onChangeOTPValue,
    });

    return (
        <View style={[styles.containerOTP, globalStyles.fillWidth, stylesOTP]}>
            <CodeField
                ref={ref}
                {...props2}
                value={otpValue}
                onChangeText={onChangeOTPValue}
                cellCount={NUMBER_OF_OTP_FIELD}
                rootStyle={styles.codeFieldRoot}
                autoFocus={true}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[
                            stylesCell,
                            styles.cell,
                            isFocused && styles.focusCell, stylesFocusCell, otpError && styles.errorCell
                        ]}
                    >
                        {symbol || ''}
                    </Text>
                )}
            />
            <View style={[styles.textBelowContainer, globalStyles.flexDirectionRow, globalStyles.alignCenter]}>
                {otpError && (
                    <Text allowFontScaling={false} style={styles.otpTextError}>
                        {otpErrorContent}
                    </Text>
                )}
                <View>
                    <Text allowFontScaling={false} style={[globalStyles.textStandardFont12, styles.contentUp, stylesText]}>
                        {("Did not receive OTP ?")}
                    </Text>
                </View>

                {timer > 0 ? (
                    <View style={[globalStyles.flexDirectionRow]}>
                        <View style={[globalStyles.justifySpaceBetween, globalStyles.width80Percent, globalStyles.flexDirectionRow]}>
                            <View>
                                <Text allowFontScaling={false} style={[styles.textResend, stylesText]}>
                                    {('Resend')}
                                </Text>
                            </View>
                            <View>
                                <Text allowFontScaling={false} style={styles.timer}>{`00:${timer}`}</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <TouchableOpacity onPress={resendOTP}>
                        <Text allowFontScaling={false} style={styles.touchable}>
                            {('Resend')}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View >
    )
}

export default memo(CustomOTP)