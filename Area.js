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

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes={style:PropTypes.any};var WrapperDefaultProps={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};var withStyles=function withStyles(Component){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var styleKeys=Object.keys(styles);var Wrapper=function Wrapper(props){var styleProps={};styleKeys.forEach(function(key){var defaultStyle;var value=styles[key];if(isFunction(value)){defaultStyle=value(props);}else{defaultStyle=value;}var style=props[key];styleProps[key]=style?[defaultStyle,style]:defaultStyle;});return React.createElement(Component,_extends_1({},props,styleProps,{__source:{fileName:_jsxFileName,lineNumber:50}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyles("+Component.name+", \""+styleKeys.join('", "')+"\")";return Wrapper;};

var BACKGROUND_COLOR=0x333333ff;var ACTIVE_BACKGROUND_COLOR=0x272727ff;var BLOCKING_ZINDEX=100;var BLOCKING_COLOR=0x272727ee;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DARK_BORDER_COLOR=0x141414ff;

var styles = reactNative.StyleSheet.create({active:{borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR},area:{borderRadius:2,borderWidth:1,borderColor:LIGHT_BORDER_COLOR},areaInternal:{borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:BACKGROUND_COLOR},blocking:{position:'absolute',top:0,right:0,bottom:0,left:0,borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:BLOCKING_COLOR,zIndex:BLOCKING_ZINDEX},scroll:{borderRadius:2,borderWidth:1,padding:2,borderColor:LIGHT_BORDER_COLOR,backgroundColor:0x000000ff},scrollContent:{borderRadius:2,backgroundColor:BACKGROUND_COLOR}});

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Area\\Area.js";var Area=function Area(_ref){var children=_ref.children,contentContainerStyle=_ref.contentContainerStyle,props=objectWithoutProperties(_ref,["children","contentContainerStyle"]);return React.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:9}}),React.createElement(reactNative.View,{style:contentContainerStyle,__source:{fileName:_jsxFileName$1,lineNumber:10}},children));};var Area$1 = withStyles(Area,{style:styles.area,contentContainerStyle:styles.areaInternal},'Area');

var ActiveArea = withStyle(reactNative.View,styles.active,'ActiveArea');

var BlockingArea = withStyle(reactNative.View,styles.blocking,'BlockingArea');

var ScrollArea = withStyles(reactNative.ScrollView,{style:styles.scroll,contentContainerStyle:styles.scrollContent},'ScrollArea');

exports.Area = Area$1;
exports.ActiveArea = ActiveArea;
exports.BlockingArea = BlockingArea;
exports.ScrollArea = ScrollArea;
//# sourceMappingURL=Area.js.map
