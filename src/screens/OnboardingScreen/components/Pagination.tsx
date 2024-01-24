import { View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { IOnboardingData } from '../OnboardingScreen.type';

import Dot from './Dot';
import styles from '../styles';

type IPaginationProps = {
    data: IOnboardingData[];
    x: SharedValue<number>;
};
const Pagination = ({ data, x }: IPaginationProps) => {
    return (
        <View style={styles.paginationContainer}>
            {data?.map((_, index) => (
                <Dot index={index} x={x} key={index} />
            ))}
        </View>
    );
};

export default Pagination;