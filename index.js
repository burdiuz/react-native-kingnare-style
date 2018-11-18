'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var closureValue = require('@actualwave/closure-value');
var isFunction = _interopDefault(require('@actualwave/is-function'));
var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');

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

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

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

var knownActions=new Map();var _singleValueFactory=closureValue.singleValueFactory(),getDefaultIconFactory=_singleValueFactory.get,setDefaultIconFactory=_singleValueFactory.set;var createAction=function createAction(type){var title=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var params=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var color=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'#FFF';var iconFactory=arguments.length>4&&arguments[4]!==undefined?arguments[4]:undefined;return objectSpread({},params,{type:type,title:title,color:color,iconFactory:iconFactory});};var registerAction=function registerAction(){for(var _len=arguments.length,actions=new Array(_len),_key=0;_key<_len;_key++){actions[_key]=arguments[_key];}actions.forEach(function(action){var type=action.type,title=action.title,color=action.color,iconFactory=action.iconFactory,params=objectWithoutProperties(action,["type","title","color","iconFactory"]);if(knownActions.has(type)){throw new Error("Action with type \""+type+"\" is already registered.");}knownActions.set(type,createAction(type,title,params,color,iconFactory));});};var registerActions=function registerActions(actions){return registerAction.apply(void 0,toConsumableArray(actions));};var isknownAction=function isknownAction(type){return knownActions.has(type);};var getActionByType=function getActionByType(type){var action=knownActions.get(type);if(!action){throw new Error("Unknown action with type \""+type+"\".");}return action;};var getAction=function getAction(typeOrAction){var action=typeOrAction;if(typeof typeOrAction==='string'){action=getActionByType(typeOrAction);}return action;};var renderIconFromAction=function renderIconFromAction(type){var size=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined;var style=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var action=getAction(type);var _action$iconFactory=action.iconFactory,iconFactory=_action$iconFactory===void 0?getDefaultIconFactory():_action$iconFactory;if(!iconFactory){return null;}return iconFactory(action,size,style);};var ActionPropType=PropTypes.oneOfType([PropTypes.string,PropTypes.shape({type:PropTypes.string.isRequired})]);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var getButtonStyle=function getButtonStyle(_ref){var normal=_ref.normal,disabled=_ref.disabled,selected=_ref.selected,selectedDisabled=_ref.selectedDisabled;var isDisabled=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var isSelected=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(isSelected){return isDisabled?selectedDisabled:selected;}return isDisabled?disabled:normal;};

var BACKGROUND_COLOR=0x333333ff;var ACTIVE_BACKGROUND_COLOR=0x272727ff;var ELEMENT_MIN_SIZE=32;var BLOCKING_ZINDEX=100;var BLOCKING_COLOR=0x272727ee;var TEXT_COLOR=0xccccccff;var TEXT_ACTIVE_COLOR=0xffffffff;var TEXT_DISABLED_COLOR=0x5a5a5aff;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DISABLED_BORDER_COLOR=0x404040ff;var DARK_BORDER_COLOR=0x141414ff;var PLACEMENT_LEFT='left';var PLACEMENT_RIGHT='right';var PLACEMENT_TOP='top';var PLACEMENT_BOTTOM='bottom';

var BUTTON_HIGHLIGHT_COLOR=0x666666ff;var BUTTON_SELECTED_HIGHLIGHT_COLOR=0x5b5b5bff;var highlightStyles=reactNative.StyleSheet.create({normal:{backgroundColor:0x505050ff,borderColor:LIGHT_BORDER_COLOR,borderWidth:1},disabled:{backgroundColor:0x3a3a3aff,borderColor:0x5d5d5dff,borderWidth:1},selected:{backgroundColor:0x1a1a1aff,borderColor:0x515151ff,borderWidth:1},selectedDisabled:{backgroundColor:0x232323ff,borderColor:0x3a3a3aff,borderWidth:1}});var highlightContainerStyles=reactNative.StyleSheet.create({normal:{flex:1,borderWidth:1,borderColor:DARK_BORDER_COLOR},disabled:{flex:1,borderWidth:1,borderColor:0x333333ff},selected:{flex:1,borderWidth:1,borderColor:0x1b1b1bff},selectedDisabled:{flex:1,borderWidth:1,borderColor:0x1b1b1bff}});var buttonStyles=reactNative.StyleSheet.create({button:{flex:0,height:ELEMENT_MIN_SIZE,borderRadius:2},buttonContainer:{borderRadius:2,alignItems:'center',justifyContent:'center'}});var RADIO_EXT_DIAMETER=20;var RADIO_INT_DIAMETER=14.2;var radioStyles=reactNative.StyleSheet.create({highlight:{width:ELEMENT_MIN_SIZE,height:ELEMENT_MIN_SIZE,borderRadius:ELEMENT_MIN_SIZE,alignItems:'center',justifyContent:'center'},outerCircle:{flex:0,width:RADIO_EXT_DIAMETER,height:RADIO_EXT_DIAMETER,borderRadius:RADIO_EXT_DIAMETER,margin:(ELEMENT_MIN_SIZE-RADIO_EXT_DIAMETER)/2,borderWidth:1},innerCircle:{flex:0,margin:1.6,width:RADIO_INT_DIAMETER,height:RADIO_INT_DIAMETER,borderRadius:RADIO_INT_DIAMETER,borderWidth:4}});var radioOuterStyles=reactNative.StyleSheet.create({normal:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},disabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:DISABLED_BORDER_COLOR},selected:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},selectedDisabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:DISABLED_BORDER_COLOR}});var radioInnerStyles=reactNative.StyleSheet.create({normal:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:0x1d1d1dff},disabled:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR},selected:{borderColor:0x505050ff,backgroundColor:TEXT_ACTIVE_COLOR},selectedDisabled:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:TEXT_DISABLED_COLOR}});var CHECKBOX_EXT_DIAMETER=22;var CHECKBOX_INT_DIAMETER=16;var CHECKBOX_BORDER_RADIUS=2;var checkBoxStyles=reactNative.StyleSheet.create({highlight:{width:ELEMENT_MIN_SIZE,height:ELEMENT_MIN_SIZE,borderRadius:CHECKBOX_BORDER_RADIUS,alignItems:'center',justifyContent:'center'},outerCircle:{flex:0,width:CHECKBOX_EXT_DIAMETER,height:CHECKBOX_EXT_DIAMETER,borderRadius:CHECKBOX_BORDER_RADIUS,margin:(ELEMENT_MIN_SIZE-CHECKBOX_EXT_DIAMETER)/2,borderWidth:1},innerCircle:{flex:0,left:2,top:2,width:CHECKBOX_INT_DIAMETER,height:CHECKBOX_INT_DIAMETER,borderRadius:CHECKBOX_BORDER_RADIUS},icon:{width:16,height:16,left:3,top:-14}});var checkBoxOuterStyles=reactNative.StyleSheet.create({normal:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},disabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR}});var checkBoxInnerStyles=reactNative.StyleSheet.create({normal:{backgroundColor:ACTIVE_BACKGROUND_COLOR},disabled:{backgroundColor:ACTIVE_BACKGROUND_COLOR}});var linkStyles=reactNative.StyleSheet.create({highlight:{borderRadius:2,height:ELEMENT_MIN_SIZE,alignItems:'center',justifyContent:'center'},normal:{margin:2,color:TEXT_ACTIVE_COLOR,textDecorationLine:'underline',textDecorationColor:TEXT_ACTIVE_COLOR},disabled:{margin:2,color:TEXT_DISABLED_COLOR,textDecorationLine:'underline',textDecorationColor:TEXT_DISABLED_COLOR}});

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\Button.js";var makeHighlightComponent=function makeHighlightComponent(styles,contentContainerStyles,highlightColor){return function(props){var disabled=props.disabled,style=props.style,contentContainerStyle=props.contentContainerStyle,children=props.children;return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[getButtonStyle(highlightStyles,disabled),style],underlayColor:highlightColor,__source:{fileName:_jsxFileName,lineNumber:22}}),React__default.createElement(reactNative.View,{style:[getButtonStyle(highlightContainerStyles,disabled),contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:27}},children));};};var ButtonHighlight=makeHighlightComponent(highlightStyles,highlightContainerStyles,BUTTON_HIGHLIGHT_COLOR);var Button=function Button(props){var selected=props.selected,disabled=props.disabled,style=props.style,contentContainerStyle=props.contentContainerStyle,children=props.children,highlightProps=objectWithoutProperties(props,["selected","disabled","style","contentContainerStyle","children"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},highlightProps,{style:[getButtonStyle(highlightStyles,disabled,selected),buttonStyles.button,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName,lineNumber:60}}),React__default.createElement(reactNative.View,{style:[getButtonStyle(highlightContainerStyles,disabled,selected),buttonStyles.buttonContainer,contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:70}},children));};

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\IconButton.js";var defaultIconRenderer=function defaultIconRenderer(_ref){var icon=_ref.icon;return icon;};var IconButton=function IconButton(props){var iconRenderer=props.iconRenderer;return React__default.createElement(Button,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:10}}),iconRenderer(props));};IconButton.propTypes={iconRenderer:PropTypes.func,icon:PropTypes.any};IconButton.defaultProps={iconRenderer:defaultIconRenderer,icon:null};

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\withStyleInheritance.js";var WrapperPropTypes={style:PropTypes.any,inheritStyle:PropTypes.bool};var WrapperDefaultProps={style:undefined,inheritStyle:false};var withStyleInheritance=function withStyleInheritance(Component,defaultStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(_ref){var style=_ref.style,inheritStyle=_ref.inheritStyle,props=objectWithoutProperties(_ref,["style","inheritStyle"]);return React__default.createElement(Component,_extends_1({},props,{style:inheritStyle?style:[defaultStyle,style],__source:{fileName:_jsxFileName$2,lineNumber:16}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyleInheritance("+Component.name+")";return Wrapper;};

var styles = reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:22,color:TEXT_COLOR},italic:{fontStyle:'italic'},strong:{fontWeight:'600'},underline:{textDecorationLine:'underline'},small:{fontSize:12,textAlignVertical:'bottom'},sub:{fontSize:10,lineHeight:10,marginBottom:-11},sup:{fontSize:10,lineHeight:10,marginTop:-11}});

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\Text.js";var Text=function Text(props){return React__default.createElement(reactNative.Text,_extends_1({},props,{__source:{fileName:_jsxFileName$3,lineNumber:9}}));};var Text$1 = withStyleInheritance(Text,styles.text,'Text');

var _jsxFileName$4="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes$1={style:PropTypes.any};var WrapperDefaultProps$1={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React__default.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName$4,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};var withStyles=function withStyles(Component){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var styleKeys=Object.keys(styles);var Wrapper=function Wrapper(props){var styleProps={};styleKeys.forEach(function(key){var defaultStyle;var value=styles[key];if(isFunction(value)){defaultStyle=value(props);}else{defaultStyle=value;}var style=props[key];styleProps[key]=style?[defaultStyle,style]:defaultStyle;});return React__default.createElement(Component,_extends_1({},props,styleProps,{__source:{fileName:_jsxFileName$4,lineNumber:50}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyles("+Component.name+", \""+styleKeys.join('", "')+"\")";return Wrapper;};

var Strong = withStyle(Text$1,styles.strong,'Strong');

var Italic = withStyle(Text$1,styles.italic,'Italic');

var Underline = withStyle(Text$1,styles.underline,'Underline');

var Small = withStyle(Text$1,styles.small,'Small');

var Sup = withStyle(Text$1,styles.sup,'Sup');

var Sub = withStyle(Text$1,styles.sub,'Sub');

var _jsxFileName$5="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\TextButton.js";var TextButton=function TextButton(_ref){var label=_ref.label,labelStyle=_ref.labelStyle,selected=_ref.selected,disabled=_ref.disabled,props=objectWithoutProperties(_ref,["label","labelStyle","selected","disabled"]);return React__default.createElement(Button,_extends_1({},props,{selected:selected,disabled:disabled,__source:{fileName:_jsxFileName$5,lineNumber:18}}),React__default.createElement(Text$1,{style:[styles$1.base,getButtonStyle(styles$1,disabled,selected),labelStyle],__source:{fileName:_jsxFileName$5,lineNumber:19}},label));};TextButton.propTypes={label:PropTypes.string.isRequired};TextButton.defaultProps={};var styles$1=reactNative.StyleSheet.create({base:{paddingHorizontal:6},normal:{color:TEXT_COLOR},disabled:{color:TEXT_DISABLED_COLOR},selected:{color:TEXT_ACTIVE_COLOR},selectedDisabled:{color:TEXT_DISABLED_COLOR}});

var _jsxFileName$6="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\LinkButton.js";var LinkButton=function LinkButton(props){var disabled=props.disabled,label=props.label,labelStyle=props.labelStyle,style=props.style,children=props.children,highlightProps=objectWithoutProperties(props,["disabled","label","labelStyle","style","children"]);return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},highlightProps,{style:[linkStyles.highlight,style],underlayColor:BUTTON_HIGHLIGHT_COLOR,disabled:disabled,__source:{fileName:_jsxFileName$6,lineNumber:15}}),React__default.createElement(Text$1,{style:[getButtonStyle(linkStyles,disabled),labelStyle],__source:{fileName:_jsxFileName$6,lineNumber:21}},label));};

var _jsxFileName$7="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withLabel.js";var ContainerPropTypes={placement:PropTypes.oneOf([PLACEMENT_LEFT,PLACEMENT_RIGHT,PLACEMENT_TOP,PLACEMENT_BOTTOM]),contentContainerStyle:PropTypes.any,disabled:PropTypes.bool,label:PropTypes.string,children:PropTypes.node,onPress:PropTypes.func,onLabelPress:PropTypes.func,onLongPress:PropTypes.func,onLabelLongPress:PropTypes.func};var ContainerDefaultProps={placement:PLACEMENT_LEFT,contentContainerStyle:null,disabled:false,label:'',children:undefined,onPress:undefined,onLabelPress:undefined,onLongPress:undefined,onLabelLongPress:undefined};var getPlacementStyle=function getPlacementStyle(placement){switch(placement){case PLACEMENT_RIGHT:return styles$2.containerRight;case PLACEMENT_TOP:return styles$2.containerTop;case PLACEMENT_BOTTOM:return styles$2.containerBottom;}return styles$2.containerLeft;};var withLabel=function withLabel(Component){var displayName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var Container=function Container(_ref){var contentContainerStyle=_ref.contentContainerStyle,placement=_ref.placement,disabled=_ref.disabled,label=_ref.label,children=_ref.children,onPress=_ref.onPress,onLabelPress=_ref.onLabelPress,onLongPress=_ref.onLongPress,onLabelLongPress=_ref.onLabelLongPress,props=objectWithoutProperties(_ref,["contentContainerStyle","placement","disabled","label","children","onPress","onLabelPress","onLongPress","onLabelLongPress"]);var labelNode=null;if(label){labelNode=React__default.createElement(Text$1,{style:getButtonStyle(styles$2,disabled),onPress:onLabelPress||onPress,onLongPress:onLabelLongPress||onLongPress,__source:{fileName:_jsxFileName$7,lineNumber:70}},label);}return React__default.createElement(reactNative.View,{style:[getPlacementStyle(placement),contentContainerStyle],__source:{fileName:_jsxFileName$7,lineNumber:81}},React__default.createElement(Component,_extends_1({},props,{onPress:onPress,onLongPress:onLongPress,__source:{fileName:_jsxFileName$7,lineNumber:82}})),labelNode,children);};Container.propTypes=ContainerPropTypes;Container.defaultProps=ContainerDefaultProps;Container.displayName=displayName||"withLabel("+Component.name+")";return Container;};var styles$2=reactNative.StyleSheet.create({normal:{marginHorizontal:5,color:TEXT_ACTIVE_COLOR},disabled:{marginHorizontal:5,color:TEXT_DISABLED_COLOR},containerLeft:{flexDirection:'row-reverse',justifyContent:'flex-start',alignItems:'center'},containerRight:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},containerTop:{flexDirection:'column-reverse',justifyContent:'flex-start',alignItems:'center'},containerBottom:{flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}});

var _jsxFileName$8="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\Radio.js";var RadioButton=function RadioButton(_ref){var selected=_ref.selected,disabled=_ref.disabled,style=_ref.style,props=objectWithoutProperties(_ref,["selected","disabled","style"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[radioStyles.highlight,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$8,lineNumber:34}}),React__default.createElement(reactNative.View,{style:[radioStyles.outerCircle,getButtonStyle(radioOuterStyles,disabled,selected)],__source:{fileName:_jsxFileName$8,lineNumber:40}},React__default.createElement(reactNative.View,{style:[radioStyles.innerCircle,getButtonStyle(radioInnerStyles,disabled,selected)],__source:{fileName:_jsxFileName$8,lineNumber:46}})));};RadioButton.propTypes={disabled:PropTypes.bool,selected:PropTypes.bool};RadioButton.defaultProps={disabled:false,selected:false};var Radio=withLabel(RadioButton,'Radio');

var _jsxFileName$9="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\assets\\CheckIcon.js";var CheckIcon=function CheckIcon(props){return React__default.createElement(reactNative.Image,_extends_1({},props,{source:require('./check.png'),__source:{fileName:_jsxFileName$9,lineNumber:5}}));};var CheckDisabledIcon=function CheckDisabledIcon(props){return React__default.createElement(reactNative.Image,_extends_1({},props,{source:require('./check_disabled.png'),__source:{fileName:_jsxFileName$9,lineNumber:13}}));};

var _jsxFileName$a="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\CheckBox.js";var CheckBoxButton=function CheckBoxButton(_ref){var selected=_ref.selected,disabled=_ref.disabled,style=_ref.style,props=objectWithoutProperties(_ref,["selected","disabled","style"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;var icon=null;if(selected){var Icon=disabled?CheckDisabledIcon:CheckIcon;icon=React__default.createElement(Icon,{style:checkBoxStyles.icon,__source:{fileName:_jsxFileName$a,lineNumber:39}});}return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[checkBoxStyles.highlight,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$a,lineNumber:43}}),React__default.createElement(reactNative.View,{style:[checkBoxStyles.outerCircle,getButtonStyle(checkBoxOuterStyles,disabled)],__source:{fileName:_jsxFileName$a,lineNumber:49}},React__default.createElement(reactNative.View,{style:[checkBoxStyles.innerCircle,getButtonStyle(checkBoxInnerStyles,disabled)],__source:{fileName:_jsxFileName$a,lineNumber:55}}),icon));};CheckBoxButton.propTypes={disabled:PropTypes.bool,selected:PropTypes.bool};CheckBoxButton.defaultProps={disabled:false,selected:false};var CheckBox=withLabel(CheckBoxButton,'CheckBox');

var _jsxFileName$b="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\ActionIconButton.js";var ActionIconButton=function(_Component){inherits(ActionIconButton,_Component);function ActionIconButton(props){var _getPrototypeOf2;var _this;classCallCheck(this,ActionIconButton);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(ActionIconButton)).call.apply(_getPrototypeOf2,[this,props].concat(args)));_this.renderIcon=function(_ref){var action=_ref.action,iconSize=_ref.iconSize,iconStyle=_ref.iconStyle;return renderIconFromAction(action,iconSize,iconStyle);};_this.onPress=function(event){var _this$props=_this.props,onPress=_this$props.onPress,onAction=_this$props.onAction;if(onPress){onPress(event);}if(onAction){onAction(_this.state.action);}};_this.state={action:getAction(props.action)};return _this;}createClass(ActionIconButton,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref2){var action=_ref2.action;this.setState({action:getAction(action)});}},{key:"render",value:function render(){return React__default.createElement(IconButton,_extends_1({},this.props,{onPress:this.onPress,iconRenderer:this.renderIcon,__source:{fileName:_jsxFileName$b,lineNumber:56}}));}}]);return ActionIconButton;}(React.Component);ActionIconButton.propTypes={onAction:PropTypes.func.isRequired,action:ActionPropType.isRequired,iconSize:PropTypes.number,iconStyle:PropTypes.any};ActionIconButton.defaultProps={iconSize:20,iconStyle:undefined};

var _jsxFileName$c="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\ToggleActionButton.js";var defaultButtonRenderer=function defaultButtonRenderer(action,onAction,props){return React__default.createElement(ActionIconButton,_extends_1({},props,{action:action,onAction:onAction,__source:{fileName:_jsxFileName$c,lineNumber:26}}));};var ToggleActionButton=function(_Component){inherits(ToggleActionButton,_Component);function ToggleActionButton(props){var _getPrototypeOf2;var _this;classCallCheck(this,ToggleActionButton);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(ToggleActionButton)).call.apply(_getPrototypeOf2,[this,props].concat(args)));_this.onPress=function(event){var _this$props=_this.props,onPress=_this$props.onPress,onAction=_this$props.onAction;if(onPress){onPress(event);}if(onAction){onAction(_this.state.action);}};_this.onAction=function(action){var onAction=_this.props.onAction;if(onAction){var result=onAction(action,_this.state.actions);if(result===false){return;}}_this.next();};var actions=props.actions.map(getAction);_this.state={actions:actions,currentAction:actions[0]};return _this;}createClass(ToggleActionButton,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref){var actions=_ref.actions;if(actions!==this.props.actions){var _actions=props.actions.map(getAction);this.setState({actions:_actions,currentAction:_actions[0]});}}},{key:"next",value:function next(){var _this$state=this.state,actions=_this$state.actions,currentAction=_this$state.currentAction;var nextAction=actions[(actions.indexOf(currentAction)+1)%actions.length];this.setState({currentAction:nextAction});}},{key:"render",value:function render(){var _this$props2=this.props,actions=_this$props2.actions,buttonRenderer=_this$props2.buttonRenderer,props=objectWithoutProperties(_this$props2,["actions","buttonRenderer"]);var currentAction=this.state.currentAction;return buttonRenderer(currentAction,this.onAction,props);}}]);return ToggleActionButton;}(React.Component);ToggleActionButton.propTypes={actions:PropTypes.arrayOf(ActionPropType).isRequired,buttonRenderer:PropTypes.func.isRequired,onAction:PropTypes.func.isRequired};ToggleActionButton.defaultProps={buttonRenderer:defaultButtonRenderer};

var _jsxFileName$d="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\ActionGroup.js";var getKeyFromAction=function getKeyFromAction(action){return typeof action==='string'?action:action.type;};var defaultButtonRenderer$1=function defaultButtonRenderer(action,onAction,props){return React__default.createElement(ActionIconButton,_extends_1({},props,{key:getKeyFromAction(action),action:action,onAction:onAction,__source:{fileName:_jsxFileName$d,lineNumber:12}}));};var ActionGroup=function ActionGroup(_ref){var actions=_ref.actions,onAction=_ref.onAction,buttonRenderer=_ref.buttonRenderer,props=objectWithoutProperties(_ref,["actions","onAction","buttonRenderer"]);return actions.map(function(toggleActions){if(toggleActions instanceof Array){return React__default.createElement(ToggleActionButton,_extends_1({},props,{key:toggleActions.map(function(action){return getKeyFromAction(action);}).join('/'),onAction:onAction,buttonRenderer:buttonRenderer,actions:toggleActions,__source:{fileName:_jsxFileName$d,lineNumber:24}}));}return buttonRenderer(toggleActions,onAction,props);});};ActionGroup.propTypes={actions:PropTypes.arrayOf(PropTypes.oneOfType([ActionPropType,PropTypes.arrayOf(ActionPropType)])).isRequired,onAction:PropTypes.func.isRequired,buttonRenderer:PropTypes.func};ActionGroup.defaultProps={buttonRenderer:defaultButtonRenderer$1};

var styles$3 = reactNative.StyleSheet.create({active:{borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR},area:{borderRadius:2,borderWidth:1,borderColor:LIGHT_BORDER_COLOR},areaInternal:{borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:BACKGROUND_COLOR},blocking:{position:'absolute',top:0,right:0,bottom:0,left:0,borderRadius:2,borderWidth:2,borderColor:DARK_BORDER_COLOR,backgroundColor:BLOCKING_COLOR,zIndex:BLOCKING_ZINDEX},scroll:{borderRadius:2,borderWidth:1,padding:2,borderColor:LIGHT_BORDER_COLOR,backgroundColor:0x000000ff},scrollContent:{borderRadius:2,backgroundColor:BACKGROUND_COLOR}});

var _jsxFileName$e="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Area\\Area.js";var Area=function Area(_ref){var children=_ref.children,contentContainerStyle=_ref.contentContainerStyle,props=objectWithoutProperties(_ref,["children","contentContainerStyle"]);return React__default.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$e,lineNumber:9}}),React__default.createElement(reactNative.View,{style:contentContainerStyle,__source:{fileName:_jsxFileName$e,lineNumber:10}},children));};var Area$1 = withStyles(Area,{style:styles$3.area,contentContainerStyle:styles$3.areaInternal},'Area');

var ActiveArea = withStyle(reactNative.View,styles$3.active,'ActiveArea');

var BlockingArea = withStyle(reactNative.View,styles$3.blocking,'BlockingArea');

var ScrollArea = withStyles(reactNative.ScrollView,{style:styles$3.scroll,contentContainerStyle:styles$3.scrollContent},'ScrollArea');

var styles$4 = reactNative.StyleSheet.create({container:{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:10},super:{color:TEXT_ACTIVE_COLOR,lineHeight:28,fontSize:26},big:{color:TEXT_ACTIVE_COLOR,lineHeight:26,fontSize:24},header:{color:TEXT_ACTIVE_COLOR,fontSize:22},small:{color:TEXT_ACTIVE_COLOR,fontSize:20},slim:{color:TEXT_ACTIVE_COLOR,fontSize:18}});

var _jsxFileName$f="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Header\\withHeaderContainer.js";var HeaderContainer=withStyle(reactNative.View,styles$4.container,'HeaderContainer');var WrapperPropTypes$2={contentContainerStyle:PropTypes.any};var WrapperDefaultProps$2={contentContainerStyle:undefined};var withHeaderContainer=function withHeaderContainer(Component){var displayName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var Wrapper=function Wrapper(_ref){var contentContainerStyle=_ref.contentContainerStyle,props=objectWithoutProperties(_ref,["contentContainerStyle"]);return React__default.createElement(HeaderContainer,{style:contentContainerStyle,__source:{fileName:_jsxFileName$f,lineNumber:21}},React__default.createElement(Component,_extends_1({},props,{__source:{fileName:_jsxFileName$f,lineNumber:22}})));};Wrapper.propTypes=WrapperPropTypes$2;Wrapper.defaultProps=WrapperDefaultProps$2;Wrapper.displayName=displayName||"withHeaderContainer("+Component.name+")";return Wrapper;};

var SuperHeaderText=withStyle(Text$1,styles$4.super,'SuperHeaderText');var SuperHeader = withHeaderContainer(SuperHeaderText,'SuperHeader');

var BigHeaderText=withStyle(Text$1,styles$4.big,'BigHeaderText');var BigHeader = withHeaderContainer(BigHeaderText,'BigHeader');

var HeaderText=withStyle(Text$1,styles$4.header,'HeaderText');var Header = withHeaderContainer(HeaderText,'Header');

var SmallHeaderText=withStyle(Text$1,styles$4.small,'SmallHeaderText');var SmallHeader = withHeaderContainer(SmallHeaderText,'SmallHeader');

var SlimHeaderText=withStyle(Text$1,styles$4.slim,'SlimHeaderText');var SlimHeader = withHeaderContainer(SlimHeaderText,'SlimHeader');

var _jsxFileName$g="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Input\\TextInput.js";var styles$5=reactNative.StyleSheet.create({container:{height:ELEMENT_MIN_SIZE,borderRadius:2,borderWidth:1},input:{flex:1,paddingVertical:0,paddingHorizontal:5,textAlignVertical:'center',borderRadius:2,borderWidth:1}});var containerStyles=reactNative.StyleSheet.create({normal:reactNative.StyleSheet.flatten([styles$5.container,{borderColor:LIGHT_BORDER_COLOR}]),disabled:reactNative.StyleSheet.flatten([styles$5.container,{borderColor:DISABLED_BORDER_COLOR}])});var inputStyles=reactNative.StyleSheet.create({normal:reactNative.StyleSheet.flatten([styles$5.input,{color:TEXT_ACTIVE_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderColor:DARK_BORDER_COLOR}]),disabled:reactNative.StyleSheet.flatten([styles$5.input,{color:TEXT_DISABLED_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderColor:DARK_BORDER_COLOR}])});var TextInput=function TextInput(_ref){var style=_ref.style,disabled=_ref.disabled,editable=_ref.editable,inputStyle=_ref.inputStyle,props=objectWithoutProperties(_ref,["style","disabled","editable","inputStyle"]);return React__default.createElement(reactNative.View,{style:style,__source:{fileName:_jsxFileName$g,lineNumber:69}},React__default.createElement(reactNative.TextInput,_extends_1({underlineColorAndroid:"transparent",editable:!disabled&&editable},props,{style:inputStyle,__source:{fileName:_jsxFileName$g,lineNumber:70}})));};TextInput.propTypes={style:PropTypes.any,inputStyle:PropTypes.any,disabled:PropTypes.bool,editable:PropTypes.bool};TextInput.defaultProps={style:undefined,inputStyle:undefined,disabled:false,editable:true};var TextInput$1 = withStyles(TextInput,{style:function style(_ref2){var disabled=_ref2.disabled;return getButtonStyle(containerStyles,disabled);},inputStyle:function inputStyle(_ref3){var disabled=_ref3.disabled;return getButtonStyle(inputStyles,disabled);}},'TextInput');

var _jsxFileName$h="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Input\\TextArea.js";var areaStyles=reactNative.StyleSheet.create({style:{height:ELEMENT_MIN_SIZE*3},inputStyle:{textAlignVertical:'top'}});var TextArea=function TextArea(props){return React__default.createElement(TextInput$1,_extends_1({},props,{multiline:true,__source:{fileName:_jsxFileName$h,lineNumber:15}}));};var TextArea$1 = withStyles(TextArea,areaStyles,'TextArea');

var _jsxFileName$i="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\BaseModal.js";var separateModalProps=function separateModalProps(_ref){var visible=_ref.visible,supportedOrientations=_ref.supportedOrientations,onRequestClose=_ref.onRequestClose,onShow=_ref.onShow,animationType=_ref.animationType,hardwareAccelerated=_ref.hardwareAccelerated,onDismiss=_ref.onDismiss,onOrientationChange=_ref.onOrientationChange,presentationStyle=_ref.presentationStyle,animated=_ref.animated,props=objectWithoutProperties(_ref,["visible","supportedOrientations","onRequestClose","onShow","animationType","hardwareAccelerated","onDismiss","onOrientationChange","presentationStyle","animated"]);return {modalProps:{visible:visible,supportedOrientations:supportedOrientations,onRequestClose:onRequestClose,onShow:onShow,animationType:animationType,hardwareAccelerated:hardwareAccelerated,onDismiss:onDismiss,onOrientationChange:onOrientationChange,presentationStyle:presentationStyle,animated:animated},props:props};};var createBaseModal=function createBaseModal(){var ContainerComponent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:reactNative.TouchableWithoutFeedback;return function(allProps){var _separateModalProps=separateModalProps(allProps),modalProps=_separateModalProps.modalProps,props=_separateModalProps.props;return React__default.createElement(reactNative.Modal,_extends_1({},modalProps,{transparent:true,style:{alignItems:'center',justifyContent:'center'},__source:{fileName:_jsxFileName$i,lineNumber:38}}),React__default.createElement(ContainerComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$i,lineNumber:39}})));};};var BaseModal=createBaseModal();

var _jsxFileName$j="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Modal\\Modal.js";var _Dimensions$get=reactNative.Dimensions.get('window'),width=_Dimensions$get.width;var PADDING=20;var MAX_SIZE=width-PADDING*2;var MIN_WIDTH=MAX_SIZE*0.75;var MIN_HEIGHT=MAX_SIZE*0.5;var areaStyle={position:'absolute',top:0,right:0,bottom:0,left:0,padding:PADDING,flexDirection:'row',alignItems:'center',justifyContent:'center'};var styles$6=reactNative.StyleSheet.create({blocking:objectSpread({},areaStyle,{backgroundColor:0x00000099}),nonblocking:objectSpread({},areaStyle,{backgroundColor:'transparent'}),container:{maxWidth:MAX_SIZE,maxHeight:MAX_SIZE,minWidth:MIN_WIDTH,minHeight:MIN_HEIGHT},content:{flex:1,padding:5}});var crateModal=function crateModal(){var ContainerComponent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Area$1;return function(_ref){var areaStyle=_ref.areaStyle,onCloseOutside=_ref.onCloseOutside,onRequestClose=_ref.onRequestClose,allProps=objectWithoutProperties(_ref,["areaStyle","onCloseOutside","onRequestClose"]);var _separateModalProps=separateModalProps(allProps),modalProps=_separateModalProps.modalProps,props=_separateModalProps.props;return React__default.createElement(BaseModal,_extends_1({},modalProps,{onPress:onCloseOutside,onRequestClose:onRequestClose,__source:{fileName:_jsxFileName$j,lineNumber:56}}),React__default.createElement(reactNative.View,{style:areaStyle,__source:{fileName:_jsxFileName$j,lineNumber:61}},React__default.createElement(ContainerComponent,_extends_1({},props,{__source:{fileName:_jsxFileName$j,lineNumber:62}}))));};};var Modal=crateModal();var BlockingModal=withStyles(Modal,{areaStyle:styles$6.blocking,style:styles$6.container,contentContainerStyle:styles$6.content},'BlockingModal');var Modal$1 = withStyles(Modal,{areaStyle:styles$6.nonblocking,style:styles$6.container,contentContainerStyle:styles$6.content},'Modal');

var styles$7 = reactNative.StyleSheet.create({hContainer:{alignItems:'stretch',justifyContent:'center'},hRule:{height:1,borderTopWidth:1,borderTopColor:LIGHT_BORDER_COLOR,borderBottomWidth:1,borderBottomColor:DARK_BORDER_COLOR},hbRule:{height:4,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderTopWidth:1,borderTopColor:DISABLED_BORDER_COLOR,borderBottomWidth:1,borderBottomColor:DISABLED_BORDER_COLOR},vContainer:{flexDirection:'row',alignItems:'stretch',justifyContent:'center'},vRule:{width:2,borderLeftWidth:1,borderLeftColor:LIGHT_BORDER_COLOR,borderRightWidth:1,borderRightColor:DARK_BORDER_COLOR},vbRule:{width:4,backgroundColor:ACTIVE_BACKGROUND_COLOR,borderLeftWidth:1,borderLeftColor:DISABLED_BORDER_COLOR,borderRightWidth:1,borderRightColor:DISABLED_BORDER_COLOR}});

var _jsxFileName$k="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\HRule.js";var HRule=function HRule(props){return React__default.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$k,lineNumber:8}}),React__default.createElement(reactNative.View,{style:styles$7.hRule,__source:{fileName:_jsxFileName$k,lineNumber:9}}));};var HRule$1 = withStyle(HRule,styles$7.hContainer,'HRule');

var _jsxFileName$l="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\HBRule.js";var HBRule=function HBRule(props){return React__default.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$l,lineNumber:8}}),React__default.createElement(reactNative.View,{style:styles$7.hbRule,__source:{fileName:_jsxFileName$l,lineNumber:9}}));};var HBRule$1 = withStyle(HBRule,styles$7.hContainer,'HBRule');

var _jsxFileName$m="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\VRule.js";var VRule=function VRule(props){return React__default.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$m,lineNumber:8}}),React__default.createElement(reactNative.View,{style:styles$7.vRule,__source:{fileName:_jsxFileName$m,lineNumber:9}}));};var VRule$1 = withStyle(VRule,styles$7.vContainer,'VRule');

var _jsxFileName$n="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Rule\\VBRule.js";var VBRule=function VBRule(props){return React__default.createElement(reactNative.View,_extends_1({},props,{__source:{fileName:_jsxFileName$n,lineNumber:8}}),React__default.createElement(reactNative.View,{style:styles$7.vbRule,__source:{fileName:_jsxFileName$n,lineNumber:9}}));};var VBRule$1 = withStyle(VBRule,styles$7.vContainer,'VBRule');

var styles$8 = reactNative.StyleSheet.create({screen:{flex:1,backgroundColor:BACKGROUND_COLOR},blocking:{position:'absolute',top:0,right:0,bottom:0,left:0,backgroundColor:BACKGROUND_COLOR},scroll:{flex:1,backgroundColor:BACKGROUND_COLOR},scrollContent:{}});

var Screen = withStyle(reactNative.View,styles$8.screen,'Screen');

var ModalScreen = withStyle(createBaseModal(reactNative.View),styles$8.blocking,'ModalScreen');

var ScrollScreen=withStyles(reactNative.ScrollView,{style:styles$8.scroll,contentContainerStyle:styles$8.scrollContent},'ScrollScreen');

exports.withLabel = withLabel;
exports.withStyle = withStyle;
exports.withStyles = withStyles;
exports.ActionGroup = ActionGroup;
exports.ActionIconButton = ActionIconButton;
exports.createAction = createAction;
exports.getAction = getAction;
exports.getActionByType = getActionByType;
exports.getDefaultIconFactory = getDefaultIconFactory;
exports.setDefaultIconFactory = setDefaultIconFactory;
exports.isknownAction = isknownAction;
exports.registerAction = registerAction;
exports.registerActions = registerActions;
exports.renderIconFromAction = renderIconFromAction;
exports.Area = Area$1;
exports.ActiveArea = ActiveArea;
exports.BlockingArea = BlockingArea;
exports.ScrollArea = ScrollArea;
exports.Button = Button;
exports.ButtonHighlight = ButtonHighlight;
exports.makeHighlightComponent = makeHighlightComponent;
exports.getButtonStyle = getButtonStyle;
exports.IconButton = IconButton;
exports.TextButton = TextButton;
exports.LinkButton = LinkButton;
exports.Radio = Radio;
exports.RadioButton = RadioButton;
exports.CheckBox = CheckBox;
exports.CheckBoxButton = CheckBoxButton;
exports.SuperHeader = SuperHeader;
exports.SuperHeaderText = SuperHeaderText;
exports.BigHeader = BigHeader;
exports.BigHeaderText = BigHeaderText;
exports.Header = Header;
exports.HeaderText = HeaderText;
exports.SmallHeader = SmallHeader;
exports.SmallHeaderText = SmallHeaderText;
exports.SlimHeader = SlimHeader;
exports.SlimHeaderText = SlimHeaderText;
exports.withHeaderContainer = withHeaderContainer;
exports.HeaderContainer = HeaderContainer;
exports.TextArea = TextArea$1;
exports.TextInput = TextInput$1;
exports.Modal = Modal$1;
exports.BlockingModal = BlockingModal;
exports.HRule = HRule$1;
exports.HBRule = HBRule$1;
exports.VRule = VRule$1;
exports.VBRule = VBRule$1;
exports.Screen = Screen;
exports.ModalScreen = ModalScreen;
exports.ScrollScreen = ScrollScreen;
exports.Text = Text$1;
exports.Strong = Strong;
exports.Italic = Italic;
exports.Underline = Underline;
exports.Small = Small;
exports.Sup = Sup;
exports.Sub = Sub;
exports.withStyleInheritance = withStyleInheritance;
exports.BACKGROUND_COLOR = BACKGROUND_COLOR;
exports.ACTIVE_BACKGROUND_COLOR = ACTIVE_BACKGROUND_COLOR;
exports.ELEMENT_MIN_SIZE = ELEMENT_MIN_SIZE;
exports.BLOCKING_ZINDEX = BLOCKING_ZINDEX;
exports.BLOCKING_COLOR = BLOCKING_COLOR;
exports.TEXT_COLOR = TEXT_COLOR;
exports.TEXT_ACTIVE_COLOR = TEXT_ACTIVE_COLOR;
exports.TEXT_DISABLED_COLOR = TEXT_DISABLED_COLOR;
exports.LIGHT_BORDER_COLOR = LIGHT_BORDER_COLOR;
exports.DISABLED_BORDER_COLOR = DISABLED_BORDER_COLOR;
exports.DARK_BORDER_COLOR = DARK_BORDER_COLOR;
exports.PLACEMENT_LEFT = PLACEMENT_LEFT;
exports.PLACEMENT_RIGHT = PLACEMENT_RIGHT;
exports.PLACEMENT_TOP = PLACEMENT_TOP;
exports.PLACEMENT_BOTTOM = PLACEMENT_BOTTOM;
//# sourceMappingURL=index.js.map
