/* @flow */

module.exports = {
  extends: ['airbnb-base', 'cleanjs'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'no-underscore-dangle': 0,
    'arrow-parens': 0,
    'no-extra-boolean-cast': 0,
    'max-len': [2, 120],
    'no-duplicate-imports': 0,
    'global-require': 0,

    // ###  import
    'import/no-duplicates': 'error',
    'import/no-commonjs': 0,
    // our src modules are in node_modules but not package.json
    'import/no-extraneous-dependencies': 0,
    // I just found these two kind of annoying
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,

    // ###  fp
    // need nulls for GraphQL variables
    'fp/no-nil': 0,
    // Tests blow up with this
    'fp/no-unused-expression': 0,
    'fp/no-mutation': ['error', {
      commonjs: true,
    }],

    // ###  better
    // we might want the use new Set/Map
    'better/no-new': 0,
    // already have a rule against nested ternary
    'better/no-ifs': 0,
    // Tests blow up with this
    'better/explicit-return': 0,

    // ###  flowtype
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 2,
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-weak-types': 2,
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [2, '^T([A-Z][a-z0-9]+)+$'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 0,
    // deprecated
    'flowtype/valid-syntax': 0,
  },
  plugins: [
    'import',
    'better',
    'fp',
    'flowtype',
  ],
};
