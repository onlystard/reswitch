module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended', '@react-native', 'prettier', 'prettierrc'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', '@typescript-eslint/no-unused-vars', 'prettier/prettier'],
  overrides: [
      {
          files: ['*.ts', '*.tsx'],
          rules: {
              'prettier/prettier': 'error',
              '@typescript-eslint/no-shadow': ['error'],
              '@typescript-eslint/no-unused-vars': ['error'],
              'no-shadow': 'off',
              'no-undef': 'off',
              'no-unused-vars': 'off',
              'arrow-body-style': 'off',
              'prefer-arrow-callback': 'off',
          },
      },
  ],
};
