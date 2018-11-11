'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var isFunction = _interopDefault(require('@actualwave/is-function'));
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

var ACTIVE_BACKGROUND_COLOR=0x272727ff;var ELEMENT_MIN_SIZE=32;var TEXT_ACTIVE_COLOR=0xffffffff;var TEXT_DISABLED_COLOR=0x5a5a5aff;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DISABLED_BORDER_COLOR=0x404040ff;var DARK_BORDER_COLOR=0x141414ff;

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes={style:PropTypes.any};var WrapperDefaultProps={style:undefined};var withStyles=function withStyles(Component){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var styleKeys=Object.keys(styles);var Wrapper=function Wrapper(props){var styleProps={};styleKeys.forEach(function(key){var defaultStyle;var value=styles[key];if(isFunction(value)){defaultStyle=value(props);}else{defaultStyle=value;}var style=props[key];styleProps[key]=style?[defaultStyle,style]:defaultStyle;});return React.createElement(Component,_extends_1({},props,styleProps,{__source:{fileName:_jsxFileName,lineNumber:50}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyles("+Component.name+", \""+styleKeys.join('", "')+"\")";return Wrapper;};

var getButtonStyle=function getButtonStyle(_ref){var normal=_ref.normal,disabled=_ref.disabled,selected=_ref.selected,selectedDisabled=_ref.selectedDisabled;var isDisabled=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var isSelected=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(isSelected){return isDisabled?selectedDisabled:selected;}return isDisabled?disabled:normal;};

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\TextInput.js";var styles=reactNative.StyleSheet.create({container:{height:ELEMENT_MIN_SIZE,borderRadius:2,borderWidth:1},input:{flex:1,paddingVertical:0,paddingHorizontal:5,textAlignVertical:'center',borderRadius:2,borderWidth:1}});var containerStyles=reactNative.StyleSheet.create({normal:reactNative.StyleSheet.flatten([styles.container,{borderColor:LIGHT_BORDER_COLOR}]),disabled:reactNative.StyleSheet.flatten([styles.container,{borderColor:DISABLED_BORDER_COLOR}])});var inputStyles=reactNative.StyleSheet.create({normal:reactNative.StyleSheet.flatten([styles.input,{color:TEXT_ACTIVE_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderColor:DARK_BORDER_COLOR}]),disabled:reactNative.StyleSheet.flatten([styles.input,{color:TEXT_DISABLED_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderColor:DARK_BORDER_COLOR}])});var TextInput=function TextInput(_ref){var style=_ref.style,disabled=_ref.disabled,editable=_ref.editable,inputStyle=_ref.inputStyle,props=objectWithoutProperties(_ref,["style","disabled","editable","inputStyle"]);return React.createElement(reactNative.View,{style:style,__source:{fileName:_jsxFileName$1,lineNumber:69}},React.createElement(reactNative.TextInput,_extends_1({underlineColorAndroid:"transparent",editable:!disabled&&editable},props,{style:inputStyle,__source:{fileName:_jsxFileName$1,lineNumber:70}})));};TextInput.propTypes={style:PropTypes.any,inputStyle:PropTypes.any,disabled:PropTypes.bool,editable:PropTypes.bool};TextInput.defaultProps={style:undefined,inputStyle:undefined,disabled:false,editable:true};var TextInput$1 = withStyles(TextInput,{style:function style(_ref2){var disabled=_ref2.disabled;return getButtonStyle(containerStyles,disabled);},inputStyle:function inputStyle(_ref3){var disabled=_ref3.disabled;return getButtonStyle(inputStyles,disabled);}},'TextInput');

exports.default = TextInput$1;
//# sourceMappingURL=TextInput.js.map
