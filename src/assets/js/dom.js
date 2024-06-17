// css前缀兼容处理
const styleMap = {
  'transform-css': {
    webkitTransform: '-webkit-transform',
    MozTransform: '-moz-transform',
    OTransform: '-o-transform',
    msTransform: '-ms-transform',
    transform: 'transform',
  },
  'transform-js': {
    webkitTransform: 'webkitTransform',
    MozTransform: 'MozTransform',
    OTransform: 'OTransform',
    msTransform: 'msTransform',
    transform: 'transform',
  },
  transition: {
    WebkitTransition: 'WebkitTransition',
    MozTransition: 'MozTransition',
    OTransition: 'OTransition',
    transition: 'transition',
  },
  transitionend: {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'mozTransitionend',
    WebkitTransition: 'webkitTransitionEnd',
  },
};

export function prefixStyle(style) {
  const el = document.createElement('test');
  for (const key in styleMap[style]) {
    if (el.style[key] !== undefined) {
      return styleMap[style][key];
    }
  }
}
