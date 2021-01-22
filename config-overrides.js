const {
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
  addBabelPlugins,
  disableEsLint,
  addWebpackAlias,
  addPostcssPlugins,
  override,
} = require("customize-cra");
const path = require('path')

// 사용자 정의 웹팩 설정
module.exports = {
  webpack: override(
    disableEsLint(),
    addDecoratorsLegacy(),
    ...addBabelPlugins(
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          alias: {
            components: './src/components',
            pages: './src/pages',
            assets: './src/assets',
            constants: './src/constants',
            utils: './src/utils',
            stores: './src/stores',
          },
        },
      ],
      ['babel-plugin-styled-components']
    ),
    addWebpackAlias({
      ['src']: path.resolve(__dirname, 'src'),
    }),
    addPostcssPlugins([
      require('tailwindcss'),
      require('autoprefixer')
    ])
  )
};