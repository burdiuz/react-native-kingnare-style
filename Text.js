'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reactNative = require('react-native');
require('@actualwave/is-function');

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\withStyleInheritance.js";var WrapperPropTypes={style:PropTypes.any,inheritStyle:PropTypes.bool};var WrapperDefaultProps={style:undefined,inheritStyle:false};var withStyleInheritance=function withStyleInheritance(Component,defaultStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(_ref){var style=_ref.style,inheritStyle=_ref.inheritStyle,props=objectWithoutProperties(_ref,["style","inheritStyle"]);return React.createElement(Component,_extends_1({},props,{style:inheritStyle?style:[defaultStyle,style],__source:{fileName:_jsxFileName,lineNumber:16}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyleInheritance("+Component.name+")";return Wrapper;};

var TEXT_COLOR=0xccccccff;

var styles = reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:22,color:TEXT_COLOR},italic:{fontStyle:'italic'},strong:{fontWeight:'600'},underline:{textDecorationLine:'underline'},small:{fontSize:12,textAlignVertical:'bottom'},sub:{fontSize:10,lineHeight:10,marginBottom:-11},sup:{fontSize:10,lineHeight:10,marginTop:-11}});

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\Text.js";var Text=function Text(props){return React.createElement(reactNative.Text,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:9}}));};var Text$1 = withStyleInheritance(Text,styles.text,'Text');

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes$1={style:PropTypes.any};var WrapperDefaultProps$1={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName$2,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};

var Strong = withStyle(Text$1,styles.strong,'Strong');

var Italic = withStyle(Text$1,styles.italic,'Italic');

var Underline = withStyle(Text$1,styles.underline,'Underline');

var Small = withStyle(Text$1,styles.small,'Small');

var Sup = withStyle(Text$1,styles.sup,'Sup');

var Sub = withStyle(Text$1,styles.sub,'Sub');

exports.Text = Text$1;
exports.Strong = Strong;
exports.Italic = Italic;
exports.Underline = Underline;
exports.Small = Small;
exports.Sup = Sup;
exports.Sub = Sub;
exports.withStyleInheritance = withStyleInheritance;
//# sourceMappingURL=Text.js.map
