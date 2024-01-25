import { memo, useRef, useState } from 'react';
import { View, Text, Animated, TextInput, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors, getPercentHeight, getPercentWidth } from 'styles';

import styles from './styles';

import IconEyeClose from '../../../assets/icon/Icon-eye-closed.svg';
import IconEyeOpen from '../../../assets/icon/Icon-eye-open.svg';

type ICustomInputFieldProps = {
    containerStyle?: object;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    error?: string;
    secureTextEntry?: boolean;
};

const CustomInputField = ({ containerStyle, placeholder, onChangeText, error, ...props }: ICustomInputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [showPassword, setShowPassword] = useState(props.secureTextEntry);
    const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

    const handleFocus = () => {
        setIsFocused(true);
        animatedLabel(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (!text) {
            animatedLabel(0);
        }
    };

    const handleTextChange = (text: string) => {
        setText(text);
        if (onChangeText) {
            onChangeText(text);
        }
        if (text) {
            animatedLabel(1);
        } else {
            animatedLabel(isFocused ? 1 : 0);
        }
    };

    const animatedLabel = (toValue: number) => {
        Animated.timing(labelPosition, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const labelStyle = {
        left: wp(`${getPercentWidth(12)}%`),
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [17, 0],
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 14],
        }),
        color: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.PURPLE, Colors.PURPLE],
        }),
    };

    return (
        <View style={containerStyle}>
            <View style={[styles.innerContainer, error ? { borderColor: Colors.RED } : undefined]}>
                <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        {...props}
                        style={styles.input}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleTextChange}
                        value={text}
                        textAlignVertical='center'
                        textContentType={props.secureTextEntry ? 'newPassword' : undefined}
                        secureTextEntry={showPassword}
                    />
                    {props.secureTextEntry && !!text && (
                        <View>
                            <TouchableOpacity style={{ width: 24 }} onPress={() => setShowPassword(!showPassword)}>
                                {!showPassword ? (
                                    <IconEyeClose width={wp(`${getPercentWidth(24)}%`)} height={hp(`${getPercentHeight(24)}%`)} />
                                ) : (
                                    <IconEyeOpen width={wp(`${getPercentWidth(24)}%`)} height={hp(`${getPercentHeight(24)}%`)} />
                                )}
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default memo(CustomInputField)