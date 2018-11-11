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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes={style:PropTypes.any};var WrapperDefaultProps={style:undefined};var withStyles=function withStyles(Component){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var styleKeys=Object.keys(styles);var Wrapper=function Wrapper(props){var styleProps={};styleKeys.forEach(function(key){var defaultStyle;var value=styles[key];if(isFunction(value)){defaultStyle=value(props);}else{defaultStyle=value;}var style=props[key];styleProps[key]=style?[defaultStyle,style]:defaultStyle;});return React.createElement(Component,_extends_1({},props,styleProps,{__source:{fileName:_jsxFileName,lineNumber:50}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyles("+Component.name+", \""+styleKeys.join('", "')+"\")";return Wrapper;};

var BACKGROUND_COLOR=0x333333ff;var ACTIVE_BACKGROUND_COLOR=0x272727ff;var BLOCKING_ZINDEX=100;var BLOCKING_COLOR=0x272727ee;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DARK_BORDER_COLOR=0x141414ff;

var styles = reactNative.StyleSheet.create({active:{borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR},area:{borderRadius:2,borderWidth:1,borderColor:LIGHT_BORDER_COLOR},areaInternal:{borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:BACKGROUND_COLOR},blocking:{position:'absolute',top:0,right:0,bottom:0,left:0,borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:BLOCKING_COLOR,zIndex:BLOCKING_ZINDEX},scroll:{borderRadius:2,borderWidth:1,padding:2,borderColor:LIGHT_BORDER_COLOR,backgroundColor:0x000000ff},scrollContent:{borderRadius:2,backgroundColor:BACKGROUND_COLOR}});

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Area\\Area.js";var Area=function Area(_ref){var children=_ref.children,contentContainerStyle=_ref.contentContainerStyle,props=objectWithoutProperties(_ref,["children","contentContainerStyle"]);return React.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:9}}),React.createElement(reactNative.View,{style:contentContainerStyle,__source:{fileName:_jsxFileName$1,lineNumber:10}},children));};var Area$1 = withStyles(Area,{style:styles.area,contentContainerStyle:styles.areaInternal},'Area');

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\BaseModal.js";var separateModalProps=function separateModalProps(_ref){var visible=_ref.visible,supportedOrientations=_ref.supportedOrientations,onRequestClose=_ref.onRequestClose,onShow=_ref.onShow,animationType=_ref.animationType,hardwareAccelerated=_ref.hardwareAccelerated,onDismiss=_ref.onDismiss,onOrientationChange=_ref.onOrientationChange,presentationStyle=_ref.presentationStyle,animated=_ref.animated,props=objectWithoutProperties(_ref,["visible","supportedOrientations","onRequestClose","onShow","animationType","hardwareAccelerated","onDismiss","onOrientationChange","presentationStyle","animated"]);return {modalProps:{visible:visible,supportedOrientations:supportedOrientations,onRequestClose:onRequestClose,onShow:onShow,animationType:animationType,hardwareAccelerated:hardwareAccelerated,onDismiss:onDismiss,onOrientationChange:onOrientationChange,presentationStyle:presentationStyle,animated:animated},props:props};};var createBaseModal=function createBaseModal(){var ContainerComponent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:reactNative.TouchableWithoutFeedback;return function(allProps){var _separateModalProps=separateModalProps(allProps),modalProps=_separateModalProps.modalProps,props=_separateModalProps.props;return React.createElement(reactNative.Modal,_extends_1({},modalProps,{transparent:true,style:{alignItems:'center',justifyContent:'center'},__source:{fileName:_jsxFileName$2,lineNumber:38}}),React.createElement(ContainerComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$2,lineNumber:39}})));};};var BaseModal=createBaseModal();

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Modal.js";var _Dimensions$get=reactNative.Dimensions.get('window'),width=_Dimensions$get.width;var PADDING=20;var MAX_SIZE=width-PADDING*2;var MIN_WIDTH=MAX_SIZE*0.75;var MIN_HEIGHT=MAX_SIZE*0.5;var areaStyle={position:'absolute',top:0,right:0,bottom:0,left:0,padding:PADDING,flexDirection:'row',alignItems:'center',justifyContent:'center'};var styles$1=reactNative.StyleSheet.create({blocking:objectSpread({},areaStyle,{backgroundColor:0x00000099}),nonblocking:objectSpread({},areaStyle,{backgroundColor:'transparent'}),container:{maxWidth:MAX_SIZE,maxHeight:MAX_SIZE,minWidth:MIN_WIDTH,minHeight:MIN_HEIGHT},content:{flex:1,padding:5}});var crateModal=function crateModal(){var ContainerComponent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Area$1;return function(_ref){var areaStyle=_ref.areaStyle,onCloseOutside=_ref.onCloseOutside,onRequestClose=_ref.onRequestClose,allProps=objectWithoutProperties(_ref,["areaStyle","onCloseOutside","onRequestClose"]);var _separateModalProps=separateModalProps(allProps),modalProps=_separateModalProps.modalProps,props=_separateModalProps.props;return React.createElement(BaseModal,_extends_1({},modalProps,{onPress:onCloseOutside,onRequestClose:onRequestClose,__source:{fileName:_jsxFileName$3,lineNumber:56}}),React.createElement(reactNative.View,{style:areaStyle,__source:{fileName:_jsxFileName$3,lineNumber:61}},React.createElement(ContainerComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$3,lineNumber:62}}))));};};var Modal=crateModal();var BlockingModal=withStyles(Modal,{areaStyle:styles$1.blocking,style:styles$1.container,contentContainerStyle:styles$1.content},'BlockingModal');var Modal$1 = withStyles(Modal,{areaStyle:styles$1.nonblocking,style:styles$1.container,contentContainerStyle:styles$1.content},'Modal');

exports.BlockingModal = BlockingModal;
exports.default = Modal$1;
//# sourceMappingURL=Modal.js.map
