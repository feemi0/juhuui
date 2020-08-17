/**
 *  List of props processed as css if not on this list
 *  add "j_" before prop name and it will be processed as css
 *
 *  The reason for this list not being complete is performance. Every prop is checked
 *  against this list. Unsure if this matters? Have tried to pick the most used ones.
 */

export default new Set([
  'appearance',
  'align-content',
  'alignItems',
  'alignSelf',
  'all',
  'animation',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationPlayState',
  'animationTimingFunction',
  'azimuth',
  // 'backfaceVisibility',
  'background',
  'backgroundAttachment',
  'backgroundBlendMode',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'border',
  'borderCollapse',
  'borderColor',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderSpacing',
  'borderStyle',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderTopStyle',
  'borderRightStyle',
  'borderBottomStyle',
  'borderLeftStyle',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomRightRadius',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderWidth',
  'borderRadius',
  'bottom',
  // 'boxDecorationBreak',
  'boxShadow',
  'boxSizing',
  // 'breakAfter',
  // 'breakBefore',
  // 'breakInside',
  // 'captionSide',
  // 'caretColor',
  'clear',
  // 'clip',
  'color',
  'columnCount',
  'columnFill',
  'columnGap',
  'columnRule',
  'columnRuleColor',
  'columnRuleStyle',
  'columnRuleWidth',
  'columnSpan',
  'columnWidth',
  'columns',
  'content',
  'counterIncrement',
  'counterReset',
  'cursor',
  'display',
  // 'direction',
  // 'emptyCells',
  'fill',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'float',
  'font',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnGap',
  'gridColumnStart',
  'gridGap',
  'gridRow',
  'gridRowEnd',
  'gridRowGap',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  // 'hangingPunctuation',

  'height',
  // 'hyphens',
  // 'imageRendering',
  // 'isolation',
  'justifyContent',
  'justifyItems',
  'left',
  'letterSpacing',
  'lineBreak',
  'lineHeight',
  'listStyle',
  'listStyleImage',
  'listStylePosition',
  'listStyleType',
  'margin',
  // 'marginBlockStart',
  // 'marginBlockEnd',
  'marginBottom',
  // 'marginInlineStart',
  // 'marginInlineEnd',
  'marginLeft',
  'marginRight',
  'marginTop',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'mixBlendMode',
  'objectFit',
  'objectPosition',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'overflow',
  'overscrollBehavior',
  'overflowWrap',
  'overflowX',
  'overflowY',
  'padding',
  'paddingBottom',
  // 'paddingInlineStart',
  // 'paddingInlineEnd',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  // 'pageBreakAfter',
  // 'pageBreakBefore',
  // 'pageBreakInside',
  'perspective',
  'perspectiveOrigin',
  'pointerEvents',
  'position',
  'stroke',
  // 'quotes',
  'resize',
  'right',
  'scrollBehaviour',
  'strokeDashoffset',
  'strokeWidth',
  'strokeLinecap',
  // 'tabSize',
  // 'tableLayout',
  'textAlign',
  'textAlignLast',
  'textCombineUpright',
  'textDecoration',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textIndent',
  'textJustify',
  'textOverflow',
  'textShadow',
  'textTransform',
  // 'textUnderlinePosition',
  'top',
  'transform',
  'transformOrigin',
  'transformStyle',
  'transition',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whiteSpace',
  'width',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
  'writingMode',
  'zIndex'
]);
