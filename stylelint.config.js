export default {
  rules: {
    // 基础错误检查规则
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
    'no-duplicate-selectors': true,
    'no-invalid-position-at-import-rule': null,

    // 允许 Tailwind CSS 的 @tailwind、@apply 等指令
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'config',
          'theme',
          'utility',
        ],
      },
    ],

    // 允许未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],

    // 允许 Tailwind 的 theme() 函数
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],

    // 格式和命名规则（关闭以保持灵活性）
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'keyframes-name-pattern': null,
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'import-notation': null,
    'value-keyword-case': null,
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    'dist/**',
    'build/**',
    'node_modules/**',
  ],
};
