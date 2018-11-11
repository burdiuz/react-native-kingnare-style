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

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes={style:PropTypes.any};var WrapperDefaultProps={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};var withStyles=function withStyles(Component){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var styleKeys=Object.keys(styles);var Wrapper=function Wrapper(props){var styleProps={};styleKeys.forEach(function(key){var defaultStyle;var value=styles[key];if(isFunction(value)){defaultStyle=value(props);}else{defaultStyle=value;}var style=props[key];styleProps[key]=style?[defaultStyle,style]:defaultStyle;});return React.createElement(Component,_extends_1({},props,styleProps,{__source:{fileName:_jsxFileName,lineNumber:50}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyles("+Component.name+", \""+styleKeys.join('", "')+"\")";return Wrapper;};

var BACKGROUND_COLOR=0x333333ff;

var styles = reactNative.StyleSheet.create({screen:{flex:1,backgroundColor:BACKGROUND_COLOR},blocking:{position:'absolute',top:0,right:0,bottom:0,left:0,backgroundColor:BACKGROUND_COLOR},scroll:{flex:1,backgroundColor:BACKGROUND_COLOR},scrollContent:{}});

var Screen = withStyle(reactNative.View,styles.screen,'Screen');

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

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\BaseModal.js";var separateModalProps=function separateModalProps(_ref){var visible=_ref.visible,supportedOrientations=_ref.supportedOrientations,onRequestClose=_ref.onRequestClose,onShow=_ref.onShow,animationType=_ref.animationType,hardwareAccelerated=_ref.hardwareAccelerated,onDismiss=_ref.onDismiss,onOrientationChange=_ref.onOrientationChange,presentationStyle=_ref.presentationStyle,animated=_ref.animated,props=objectWithoutProperties(_ref,["visible","supportedOrientations","onRequestClose","onShow","animationType","hardwareAccelerated","onDismiss","onOrientationChange","presentationStyle","animated"]);return {modalProps:{visible:visible,supportedOrientations:supportedOrientations,onRequestClose:onRequestClose,onShow:onShow,animationType:animationType,hardwareAccelerated:hardwareAccelerated,onDismiss:onDismiss,onOrientationChange:onOrientationChange,presentationStyle:presentationStyle,animated:animated},props:props};};var createBaseModal=function createBaseModal(){var ContainerComponent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:reactNative.TouchableWithoutFeedback;return function(allProps){var _separateModalProps=separateModalProps(allProps),modalProps=_separateModalProps.modalProps,props=_separateModalProps.props;return React.createElement(reactNative.Modal,_extends_1({},modalProps,{transparent:true,style:{alignItems:'center',justifyContent:'center'},__source:{fileName:_jsxFileName$1,lineNumber:38}}),React.createElement(ContainerComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:39}})));};};

var ModalScreen = withStyle(createBaseModal(reactNative.View),styles.blocking,'ModalScreen');

var ScrollScreen=withStyles(reactNative.ScrollView,{style:styles.scroll,contentContainerStyle:styles.scrollContent},'ScrollScreen');

exports.Screen = Screen;
exports.ModalScreen = ModalScreen;
exports.ScrollScreen = ScrollScreen;
//# sourceMappingURL=Screen.js.map
