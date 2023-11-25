const config = require('./tsconfig.json');

const {baseUrl, paths} = config.compilerOptions;

// The format used in our tsconfig.json
// {
//   baseUrl: "./src/",
//   paths: {"@components/*": ["components/*"]}
// }

// The format we need to have in babel plugin config
// {'@components': './src/components'}
const getAliases = () => {
  return Object.entries(paths).reduce((aliases, alias) => {
    const key = alias[0].replace('/*', '');
    const value = baseUrl + alias[1][0].replace('*', '');
    return {
      ...aliases,
      [key]: value,
    };
  }, {});
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],

    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: getAliases(),
      },
    ],
  ],
};
