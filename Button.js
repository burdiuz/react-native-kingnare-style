'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactNative = require('react-native');
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
require('@actualwave/is-function');

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

var getButtonStyle=function getButtonStyle(_ref){var normal=_ref.normal,disabled=_ref.disabled,selected=_ref.selected,selectedDisabled=_ref.selectedDisabled;var isDisabled=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var isSelected=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(isSelected){return isDisabled?selectedDisabled:selected;}return isDisabled?disabled:normal;};

var ACTIVE_BACKGROUND_COLOR=0x272727ff;var ELEMENT_MIN_SIZE=32;var TEXT_COLOR=0xccccccff;var TEXT_ACTIVE_COLOR=0xffffffff;var TEXT_DISABLED_COLOR=0x5a5a5aff;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DISABLED_BORDER_COLOR=0x404040ff;var DARK_BORDER_COLOR=0x141414ff;var PLACEMENT_LEFT='left';var PLACEMENT_RIGHT='right';var PLACEMENT_TOP='top';var PLACEMENT_BOTTOM='bottom';

var BUTTON_HIGHLIGHT_COLOR=0x666666ff;var BUTTON_SELECTED_HIGHLIGHT_COLOR=0x5b5b5bff;var highlightStyles=reactNative.StyleSheet.create({normal:{backgroundColor:0x505050ff,borderColor:LIGHT_BORDER_COLOR,borderWidth:1},disabled:{backgroundColor:0x3a3a3aff,borderColor:0x5d5d5dff,borderWidth:1},selected:{backgroundColor:0x1a1a1aff,borderColor:0x515151ff,borderWidth:1},selectedDisabled:{backgroundColor:0x232323ff,borderColor:0x3a3a3aff,borderWidth:1}});var highlightContainerStyles=reactNative.StyleSheet.create({normal:{flex:1,borderWidth:1,borderColor:DARK_BORDER_COLOR},disabled:{flex:1,borderWidth:1,borderColor:0x333333ff},selected:{flex:1,borderWidth:1,borderColor:0x1b1b1bff},selectedDisabled:{flex:1,borderWidth:1,borderColor:0x1b1b1bff}});var buttonStyles=reactNative.StyleSheet.create({button:{flex:0,height:ELEMENT_MIN_SIZE,borderRadius:2},buttonContainer:{borderRadius:2,alignItems:'center',justifyContent:'center'}});var RADIO_EXT_DIAMETER=20;var RADIO_INT_DIAMETER=14.2;var radioStyles=reactNative.StyleSheet.create({highlight:{width:ELEMENT_MIN_SIZE,height:ELEMENT_MIN_SIZE,borderRadius:ELEMENT_MIN_SIZE,alignItems:'center',justifyContent:'center'},outerCircle:{flex:0,width:RADIO_EXT_DIAMETER,height:RADIO_EXT_DIAMETER,borderRadius:RADIO_EXT_DIAMETER,margin:(ELEMENT_MIN_SIZE-RADIO_EXT_DIAMETER)/2,borderWidth:1},innerCircle:{flex:0,margin:1.6,width:RADIO_INT_DIAMETER,height:RADIO_INT_DIAMETER,borderRadius:RADIO_INT_DIAMETER,borderWidth:4}});var radioOuterStyles=reactNative.StyleSheet.create({normal:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},disabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:DISABLED_BORDER_COLOR},selected:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},selectedDisabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:DISABLED_BORDER_COLOR}});var radioInnerStyles=reactNative.StyleSheet.create({normal:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:0x1d1d1dff},disabled:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR},selected:{borderColor:0x505050ff,backgroundColor:TEXT_ACTIVE_COLOR},selectedDisabled:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:TEXT_DISABLED_COLOR}});var CHECKBOX_EXT_DIAMETER=22;var CHECKBOX_INT_DIAMETER=16;var CHECKBOX_BORDER_RADIUS=2;var checkBoxStyles=reactNative.StyleSheet.create({highlight:{width:ELEMENT_MIN_SIZE,height:ELEMENT_MIN_SIZE,borderRadius:CHECKBOX_BORDER_RADIUS,alignItems:'center',justifyContent:'center'},outerCircle:{flex:0,width:CHECKBOX_EXT_DIAMETER,height:CHECKBOX_EXT_DIAMETER,borderRadius:CHECKBOX_BORDER_RADIUS,margin:(ELEMENT_MIN_SIZE-CHECKBOX_EXT_DIAMETER)/2,borderWidth:1},innerCircle:{flex:0,left:2,top:2,width:CHECKBOX_INT_DIAMETER,height:CHECKBOX_INT_DIAMETER,borderRadius:CHECKBOX_BORDER_RADIUS},icon:{width:16,height:16,left:3,top:-14}});var checkBoxOuterStyles=reactNative.StyleSheet.create({normal:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},disabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR}});var checkBoxInnerStyles=reactNative.StyleSheet.create({normal:{backgroundColor:ACTIVE_BACKGROUND_COLOR},disabled:{backgroundColor:ACTIVE_BACKGROUND_COLOR}});var linkStyles=reactNative.StyleSheet.create({highlight:{borderRadius:2,height:ELEMENT_MIN_SIZE,alignItems:'center',justifyContent:'center'},normal:{margin:2,color:TEXT_ACTIVE_COLOR,textDecorationLine:'underline',textDecorationColor:TEXT_ACTIVE_COLOR},disabled:{margin:2,color:TEXT_DISABLED_COLOR,textDecorationLine:'underline',textDecorationColor:TEXT_DISABLED_COLOR}});

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\Button.js";var makeHighlightComponent=function makeHighlightComponent(styles,contentContainerStyles,highlightColor){return function(props){var disabled=props.disabled,style=props.style,contentContainerStyle=props.contentContainerStyle,children=props.children;return React.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[getButtonStyle(highlightStyles,disabled),style],underlayColor:highlightColor,__source:{fileName:_jsxFileName,lineNumber:22}}),React.createElement(reactNative.View,{style:[getButtonStyle(highlightContainerStyles,disabled),contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:27}},children));};};var ButtonHighlight=makeHighlightComponent(highlightStyles,highlightContainerStyles,BUTTON_HIGHLIGHT_COLOR);var Button=function Button(props){var selected=props.selected,disabled=props.disabled,style=props.style,contentContainerStyle=props.contentContainerStyle,children=props.children,highlightProps=objectWithoutProperties(props,["selected","disabled","style","contentContainerStyle","children"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;return React.createElement(reactNative.TouchableHighlight,_extends_1({},highlightProps,{style:[getButtonStyle(highlightStyles,disabled,selected),buttonStyles.button,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName,lineNumber:60}}),React.createElement(reactNative.View,{style:[getButtonStyle(highlightContainerStyles,disabled,selected),buttonStyles.buttonContainer,contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:70}},children));};

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\IconButton.js";var defaultIconRenderer=function defaultIconRenderer(_ref){var icon=_ref.icon;return icon;};var IconButton=function IconButton(props){var iconRenderer=props.iconRenderer;return React.createElement(Button,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:10}}),iconRenderer(props));};IconButton.propTypes={iconRenderer:PropTypes.func,icon:PropTypes.any};IconButton.defaultProps={iconRenderer:defaultIconRenderer,icon:null};

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\withStyleInheritance.js";var WrapperPropTypes={style:PropTypes.any,inheritStyle:PropTypes.bool};var WrapperDefaultProps={style:undefined,inheritStyle:false};var withStyleInheritance=function withStyleInheritance(Component,defaultStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(_ref){var style=_ref.style,inheritStyle=_ref.inheritStyle,props=objectWithoutProperties(_ref,["style","inheritStyle"]);return React.createElement(Component,_extends_1({},props,{style:inheritStyle?style:[defaultStyle,style],__source:{fileName:_jsxFileName$2,lineNumber:16}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyleInheritance("+Component.name+")";return Wrapper;};

var styles = reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:22,color:TEXT_COLOR},italic:{fontStyle:'italic'},strong:{fontWeight:'600'},underline:{textDecorationLine:'underline'},small:{fontSize:12,textAlignVertical:'bottom'},sub:{fontSize:10,lineHeight:10,marginBottom:-11},sup:{fontSize:10,lineHeight:10,marginTop:-11}});

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\Text.js";var Text=function Text(props){return React.createElement(reactNative.Text,_extends_1({},props,{__source:{fileName:_jsxFileName$3,lineNumber:9}}));};var Text$1 = withStyleInheritance(Text,styles.text,'Text');

var _jsxFileName$4="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes$1={style:PropTypes.any};var WrapperDefaultProps$1={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName$4,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};

withStyle(Text$1,styles.strong,'Strong');

withStyle(Text$1,styles.italic,'Italic');

withStyle(Text$1,styles.underline,'Underline');

withStyle(Text$1,styles.small,'Small');

withStyle(Text$1,styles.sup,'Sup');

withStyle(Text$1,styles.sub,'Sub');

var _jsxFileName$5="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\TextButton.js";var TextButton=function TextButton(_ref){var label=_ref.label,labelStyle=_ref.labelStyle,selected=_ref.selected,disabled=_ref.disabled,props=objectWithoutProperties(_ref,["label","labelStyle","selected","disabled"]);return React.createElement(Button,_extends_1({},props,{selected:selected,disabled:disabled,__source:{fileName:_jsxFileName$5,lineNumber:18}}),React.createElement(Text$1,{style:[styles$1.base,getButtonStyle(styles$1,disabled,selected),labelStyle],__source:{fileName:_jsxFileName$5,lineNumber:19}},label));};TextButton.propTypes={label:PropTypes.string.isRequired};TextButton.defaultProps={};var styles$1=reactNative.StyleSheet.create({base:{paddingHorizontal:6},normal:{color:TEXT_COLOR},disabled:{color:TEXT_DISABLED_COLOR},selected:{color:TEXT_ACTIVE_COLOR},selectedDisabled:{color:TEXT_DISABLED_COLOR}});

var _jsxFileName$6="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\LinkButton.js";var LinkButton=function LinkButton(props){var disabled=props.disabled,label=props.label,labelStyle=props.labelStyle,style=props.style,children=props.children,highlightProps=objectWithoutProperties(props,["disabled","label","labelStyle","style","children"]);return React.createElement(reactNative.TouchableHighlight,_extends_1({},highlightProps,{style:[linkStyles.highlight,style],underlayColor:BUTTON_HIGHLIGHT_COLOR,disabled:disabled,__source:{fileName:_jsxFileName$6,lineNumber:15}}),React.createElement(Text$1,{style:[getButtonStyle(linkStyles,disabled),labelStyle],__source:{fileName:_jsxFileName$6,lineNumber:21}},label));};

var _jsxFileName$7="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withLabel.js";var ContainerPropTypes={placement:PropTypes.oneOf([PLACEMENT_LEFT,PLACEMENT_RIGHT,PLACEMENT_TOP,PLACEMENT_BOTTOM]),contentContainerStyle:PropTypes.any,disabled:PropTypes.bool,label:PropTypes.string,children:PropTypes.node,onPress:PropTypes.func,onLabelPress:PropTypes.func,onLongPress:PropTypes.func,onLabelLongPress:PropTypes.func};var ContainerDefaultProps={placement:PLACEMENT_LEFT,contentContainerStyle:null,disabled:false,label:'',children:undefined,onPress:undefined,onLabelPress:undefined,onLongPress:undefined,onLabelLongPress:undefined};var getPlacementStyle=function getPlacementStyle(placement){switch(placement){case PLACEMENT_RIGHT:return styles$2.containerRight;case PLACEMENT_TOP:return styles$2.containerTop;case PLACEMENT_BOTTOM:return styles$2.containerBottom;}return styles$2.containerLeft;};var withLabel=function withLabel(Component){var displayName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var Container=function Container(_ref){var contentContainerStyle=_ref.contentContainerStyle,placement=_ref.placement,disabled=_ref.disabled,label=_ref.label,children=_ref.children,onPress=_ref.onPress,onLabelPress=_ref.onLabelPress,onLongPress=_ref.onLongPress,onLabelLongPress=_ref.onLabelLongPress,props=objectWithoutProperties(_ref,["contentContainerStyle","placement","disabled","label","children","onPress","onLabelPress","onLongPress","onLabelLongPress"]);var labelNode=null;if(label){labelNode=React.createElement(Text$1,{style:getButtonStyle(styles$2,disabled),onPress:onLabelPress||onPress,onLongPress:onLabelLongPress||onLongPress,__source:{fileName:_jsxFileName$7,lineNumber:75}},label);}return React.createElement(reactNative.View,{style:[getPlacementStyle(placement),contentContainerStyle],__source:{fileName:_jsxFileName$7,lineNumber:86}},React.createElement(Component,_extends_1({},props,{onPress:onPress,onLongPress:onLongPress,__source:{fileName:_jsxFileName$7,lineNumber:87}})),labelNode,children);};Container.propTypes=ContainerPropTypes;Container.defaultProps=ContainerDefaultProps;Container.displayName=displayName||"withLabel("+Component.name+")";return Container;};var styles$2=reactNative.StyleSheet.create({normal:{marginHorizontal:5,color:TEXT_ACTIVE_COLOR},disabled:{marginHorizontal:5,color:TEXT_DISABLED_COLOR},containerLeft:{flexDirection:'row-reverse',justifyContent:'flex-start',alignItems:'center'},containerRight:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},containerTop:{flexDirection:'column-reverse',justifyContent:'flex-start',alignItems:'center'},containerBottom:{flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}});

var _jsxFileName$8="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\Radio.js";var RadioButton=function RadioButton(_ref){var selected=_ref.selected,disabled=_ref.disabled,style=_ref.style,props=objectWithoutProperties(_ref,["selected","disabled","style"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;return React.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[radioStyles.highlight,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$8,lineNumber:34}}),React.createElement(reactNative.View,{style:[radioStyles.outerCircle,getButtonStyle(radioOuterStyles,disabled,selected)],__source:{fileName:_jsxFileName$8,lineNumber:40}},React.createElement(reactNative.View,{style:[radioStyles.innerCircle,getButtonStyle(radioInnerStyles,disabled,selected)],__source:{fileName:_jsxFileName$8,lineNumber:46}})));};RadioButton.propTypes={disabled:PropTypes.bool,selected:PropTypes.bool};RadioButton.defaultProps={disabled:false,selected:false};var Radio=withLabel(RadioButton,'Radio');

var _jsxFileName$9="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\assets\\CheckIcon.js";var CheckIcon=function CheckIcon(props){return React.createElement(reactNative.Image,_extends_1({},props,{source:require('./check.png'),__source:{fileName:_jsxFileName$9,lineNumber:5}}));};var CheckDisabledIcon=function CheckDisabledIcon(props){return React.createElement(reactNative.Image,_extends_1({},props,{source:require('./check_disabled.png'),__source:{fileName:_jsxFileName$9,lineNumber:13}}));};

var _jsxFileName$a="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\CheckBox.js";var CheckBoxButton=function CheckBoxButton(_ref){var selected=_ref.selected,disabled=_ref.disabled,style=_ref.style,props=objectWithoutProperties(_ref,["selected","disabled","style"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;var icon=null;if(selected){var Icon=disabled?CheckDisabledIcon:CheckIcon;icon=React.createElement(Icon,{style:checkBoxStyles.icon,__source:{fileName:_jsxFileName$a,lineNumber:39}});}return React.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[checkBoxStyles.highlight,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$a,lineNumber:43}}),React.createElement(reactNative.View,{style:[checkBoxStyles.outerCircle,getButtonStyle(checkBoxOuterStyles,disabled)],__source:{fileName:_jsxFileName$a,lineNumber:49}},React.createElement(reactNative.View,{style:[checkBoxStyles.innerCircle,getButtonStyle(checkBoxInnerStyles,disabled)],__source:{fileName:_jsxFileName$a,lineNumber:55}}),icon));};CheckBoxButton.propTypes={disabled:PropTypes.bool,selected:PropTypes.bool};CheckBoxButton.defaultProps={disabled:false,selected:false};var CheckBox=withLabel(CheckBoxButton,'CheckBox');

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
//# sourceMappingURL=Button.js.map
