// Конфигурации для stylelint-order с оглядкой на web-standards
// https://github.com/web-standards-ru/web-standards.ru/blob/master/.stylelintrc.json

module.exports = {
  extends: 'stylelint-config-standard-scss',
  // extends: 'stylelint-config-htmlacademy',
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss"
    }
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'color-hex-length': 'long',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'indentation': [2, {
      'ignore': ['inside-parens']
    }],
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'mixin',
        'define-mixin',
        'include',
        'content',
        'rules',
        'extend',
      ]
    }],
    'order/order': [
      'custom-properties',
      'declarations',
    ],

    'order/properties-order': [
      'content',

      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      'display',
      'grid-template',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-area',
      'grid-row',
      'grid-column',
      'grid-row-start',
      'grid-row-end',
      'grid-column-start',
      'grid-column-end',
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'order',
      'justify-content',
      'justify-items',
      'justify-self',
      'align-content',
      'align-items',
      'align-self',
      'grid-gap',
      'gap',
      'grid-row-gap',
      'row-gap',
      'grid-column-gap',
      'column-gap',
      'float',
      'clear',
      'box-sizing',
      'writing-mode',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'inline-size',
      'max-inline-size',
      'min-inline-size',
      'block-size',
      'max-block-size',
      'min-block-size',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'overflow',
      'overflow-x',
      'overflow-y',

      'font',
      'font-family',
      'font-size',
      'line-height',
      'font-weight',
      'font-style',
      'text-align',
      'text-align-last',
      'vertical-align',
      'color',
      'font-display',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'letter-spacing',
      'white-space',
      'text-transform',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      'text-justify',
      'text-outline',
      'text-wrap',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-orientation',
      'text-shadow',
      'word-wrap',
      'word-break',
      'word-spacing',
      'overflow-wrap',
      'tab-size',
      'hyphens',
      'direction',
      'unicode-bidi',
      'columns',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'src',

      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'table-layout',
      'empty-cells',
      'caption-side',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-size',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-attachment',
      'background-blend-mode',
      'box-decoration-break',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-block-start',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-inline-end',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-block-end',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-inline-start',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-collapse',
      'border-spacing',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      'visibility',
      'cursor',
      'mix-blend-mode',
      'backdrop-filter',
      'will-change',
      'transform',
      'transform-origin',
      'transform-style',
      'backface-visibility',
      'opacity',
      'filter',
      'perspective',
      'perspective-origin',

      'transition',
      'transition-delay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',

      'appearance',
      'clip',
      'clip-path',
      'counter-reset',
      'counter-increment',
      'resize',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      'pointer-events',
      'quotes',
      'touch-action',
      'zoom',
      'fill',
      'fill-rule',
      'clip-rule',
      'stroke',
      'stroke-width',
    ],
  },
}
