module.exports = {
  sourceType: 'unambiguous',
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      { targets: { node: 'automatic' }, runtime: 'automatic' },
    ],
    'babel-preset-jest',
  ],
  plugins: [
    'babel-plugin-transform-import-meta',
    '@babel/plugin-transform-modules-commonjs',
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: true,
        runtime: 'automatic',
        importSource: 'react',
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        namespace: require('./package.json').name,
        displayName: true,
        fileName: false,
        pure: true,
      },
    ],
  ],
};
