module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
      [
          'module:react-native-dotenv',
          {
              envName: 'reswitchapp_ENV',
              moduleName: '@env',
              path: '.env',
              blocklist: null,
              allowlist: null,
              blacklist: null, // DEPRECATED
              whitelist: null, // DEPRECATED
              safe: false,
              allowUndefined: true,
              verbose: false,
          },
      ],
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-shorthand-properties',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-transform-template-literals',
      [
          'module-resolver',
          {
              root: ['./src'],
              extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
              alias: {
                  tests: ['./tests/'],
                  '@components': './src/components',
              },
          },
      ],
  ],
};
