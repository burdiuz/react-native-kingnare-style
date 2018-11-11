'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
require('@actualwave/is-function');
var reactNative = require('react-native');

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

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes={style:PropTypes.any};var WrapperDefaultProps={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};

var ACTIVE_BACKGROUND_COLOR=0x272727ff;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DISABLED_BORDER_COLOR=0x404040ff;var DARK_BORDER_COLOR=0x141414ff;

var styles = reactNative.StyleSheet.create({hContainer:{alignItems:'stretch',justifyContent:'center'},hRule:{height:1,borderTopWidth:1,borderTopColor:LIGHT_BORDER_COLOR,borderBottomWidth:1,borderBottomColor:DARK_BORDER_COLOR},hbRule:{height:4,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderTopWidth:1,borderTopColor:DISABLED_BORDER_COLOR,borderBottomWidth:1,borderBottomColor:DISABLED_BORDER_COLOR},vContainer:{flexDirection:'row',alignItems:'stretch',justifyContent:'center'},vRule:{width:2,borderLeftWidth:1,borderLeftColor:LIGHT_BORDER_COLOR,borderRightWidth:1,borderRightColor:DARK_BORDER_COLOR},vbRule:{width:4,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderLeftWidth:1,borderLeftColor:DISABLED_BORDER_COLOR,borderRightWidth:1,borderRightColor:DISABLED_BORDER_COLOR}});

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\HRule.js";var HRule=function HRule(props){return React.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:8}}),React.createElement(reactNative.View,{style:styles.hRule,__source:{fileName:_jsxFileName$1,lineNumber:9}}));};var HRule$1 = withStyle(HRule,styles.hContainer,'HRule');

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\HBRule.js";var HBRule=function HBRule(props){return React.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$2,lineNumber:8}}),React.createElement(reactNative.View,{style:styles.hbRule,__source:{fileName:_jsxFileName$2,lineNumber:9}}));};var HBRule$1 = withStyle(HBRule,styles.hContainer,'HBRule');

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\VRule.js";var VRule=function VRule(props){return React.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$3,lineNumber:8}}),React.createElement(reactNative.View,{style:styles.vRule,__source:{fileName:_jsxFileName$3,lineNumber:9}}));};var VRule$1 = withStyle(VRule,styles.vContainer,'VRule');

var _jsxFileName$4="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\VBRule.js";var VBRule=function VBRule(props){return React.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$4,lineNumber:8}}),React.createElement(reactNative.View,{style:styles.vbRule,__source:{fileName:_jsxFileName$4,lineNumber:9}}));};var VBRule$1 = withStyle(VBRule,styles.vContainer,'VBRule');

exports.HRule = HRule$1;
exports.HBRule = HBRule$1;
exports.VRule = VRule$1;
exports.VBRule = VBRule$1;
//# sourceMappingURL=Rule.js.map
