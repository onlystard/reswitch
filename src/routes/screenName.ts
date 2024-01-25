enum EScreenName {
    OnboardingScreen = 'OnboardingScreen',
    BottomTabNavigator = 'BottomTabNavigator',
    LoginScreen = 'LoginScreen',
    HomeScreen = 'HomeScreen',
    WalletScreen = 'WalletScreen',
    SettingScreen = 'SettingScreen',
    EnergyScreen = 'EnergyScreen',
    RegisterScreen = 'RegisterScreen',
    VerifyEmailScreen = 'VerifyEmailScreen',
    ForgetPasswordScreen = 'ForgetPasswordScreen',
    ResetPasswordScreen = 'ResetPasswordScreen'
}

export { EScreenName }

export class ScreenNames {
    static readonly screenNames = EScreenName
}
