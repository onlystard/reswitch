import React from 'react';
import { View } from 'react-native';
import { Colors } from 'styles';

import HomeIcon from '../../../../assets/icon/IconHomeBottom.svg';
import LoungeIcon from '../../../../assets/icon/IconMenuBottom.svg';
import ProfileIcon from '../../../../assets/icon/IconProfileBottom.svg';

interface Props {
    route: string;
    isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {

    const renderIcon = (route: string, isFocused: boolean) => {
        let height: number = 26;
        let width: number = 26;

        switch (route) {
            case 'Home':
                return (
                    <HomeIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.LINEAR_G3 : Colors.LINEAR_G8}
                    />
                );
            case 'Lounge':
                return (
                    <LoungeIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.LINEAR_G3 : Colors.LINEAR_G8}
                    />
                );
            case 'Profile':
                return (
                    <ProfileIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.LINEAR_G3 : Colors.LINEAR_G8}
                    />
                );
            default:
                break;
        }
    };

    return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;