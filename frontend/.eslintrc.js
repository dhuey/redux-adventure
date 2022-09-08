module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:import/errors',
    'plugin:import/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
    // 'plugin:storybook/recommended'
  ],
  rules: {
    eqeqeq: 2,
    'no-console': 2,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/no-unused-prop-types': 1,
    'jsx-a11y/no-onchange': 0
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['jquery', 'jquery/src/jquery'],
          ['jqueryMask', 'jquery-mask-plugin/src/jquery.mask'],
          [
            'jqueryDateTimePicker',
            'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker'
          ]
        ],
        extensions: ['.js', '.jsx']
      }
    },
    react: {
      version: '16.13'
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    $: 'readonly',
    google: 'readonly',
    Fuse: 'writable',
    Hogan: 'writable',
    jsyaml: 'writable',
    ace: 'writable'
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  }
};

