import { IOnboardingData } from "../OnboardingScreen.type";

const dataOnboarding: IOnboardingData[] = [
    {
        id: 1,
        imageAnimation: require('../../../../assets/images/on-boarding01.png'),
        textTitle: 'Be A Part Of Your Community Energy Journey',
        textDescription: 'Op in and have your electricity bills offset by local renewable energy developments.'
    },
    {
        id: 2,
        imageAnimation: require('../../../../assets/images/on-boarding02.png'),
        textTitle: 'Energy Consumption & Billing',
        textDescription: 'Monitor your energy consumption and  receive free or discounted energy efficiency activities from local renewable energy developers.(Recently launched)'
    },
    {
        id: 3,
        imageAnimation: require('../../../../assets/images/on-boarding03.png'),
        textTitle: 'Wallet System',
        textDescription: 'Our wallet system allows you to hold funds from renewable energy developers.'
    },
];

export default dataOnboarding;