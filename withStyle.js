'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var isFunction = _interopDefault(require('@actualwave/is-function'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes={style:PropTypes.any};var WrapperDefaultProps={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};var withStyles=function withStyles(Component){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var styleKeys=Object.keys(styles);var Wrapper=function Wrapper(props){var styleProps={};styleKeys.forEach(function(key){var defaultStyle;var value=styles[key];if(isFunction(value)){defaultStyle=value(props);}else{defaultStyle=value;}var style=props[key];styleProps[key]=style?[defaultStyle,style]:defaultStyle;});return React.createElement(Component,_extends_1({},props,styleProps,{__source:{fileName:_jsxFileName,lineNumber:50}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyles("+Component.name+", \""+styleKeys.join('", "')+"\")";return Wrapper;};

exports.withStyles = withStyles;
exports.default = withStyle;
//# sourceMappingURL=withStyle.js.map
