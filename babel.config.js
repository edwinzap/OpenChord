module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@languages': './app/languages',
          '@db': './app/db',
          '@styles': './app/styles',
          '@services': './app/services',
          '@utils': './app/utils',
          '@assets': './app/assets',
          '@navigation': './app/navigation',
          '@components': './app/components',
          '@containers': './app/containers',
        },
      },
    ],
  ],
};
