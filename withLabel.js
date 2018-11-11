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

var getButtonStyle=function getButtonStyle(_ref){var normal=_ref.normal,disabled=_ref.disabled,selected=_ref.selected,selectedDisabled=_ref.selectedDisabled;var isDisabled=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var isSelected=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(isSelected){return isDisabled?selectedDisabled:selected;}return isDisabled?disabled:normal;};

var TEXT_COLOR=0xccccccff;var TEXT_ACTIVE_COLOR=0xffffffff;var TEXT_DISABLED_COLOR=0x5a5a5aff;var PLACEMENT_LEFT='left';var PLACEMENT_RIGHT='right';var PLACEMENT_TOP='top';var PLACEMENT_BOTTOM='bottom';

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\withStyleInheritance.js";var WrapperPropTypes={style:PropTypes.any,inheritStyle:PropTypes.bool};var WrapperDefaultProps={style:undefined,inheritStyle:false};var withStyleInheritance=function withStyleInheritance(Component,defaultStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(_ref){var style=_ref.style,inheritStyle=_ref.inheritStyle,props=objectWithoutProperties(_ref,["style","inheritStyle"]);return React.createElement(Component,_extends_1({},props,{style:inheritStyle?style:[defaultStyle,style],__source:{fileName:_jsxFileName,lineNumber:16}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyleInheritance("+Component.name+")";return Wrapper;};

var styles = reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:22,color:TEXT_COLOR},italic:{fontStyle:'italic'},strong:{fontWeight:'600'},underline:{textDecorationLine:'underline'},small:{fontSize:12,textAlignVertical:'bottom'},sub:{fontSize:10,lineHeight:10,marginBottom:-11},sup:{fontSize:10,lineHeight:10,marginTop:-11}});

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\Text.js";var Text=function Text(props){return React.createElement(reactNative.Text,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:9}}));};var Text$1 = withStyleInheritance(Text,styles.text,'Text');

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes$1={style:PropTypes.any};var WrapperDefaultProps$1={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName$2,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};

withStyle(Text$1,styles.strong,'Strong');

withStyle(Text$1,styles.italic,'Italic');

withStyle(Text$1,styles.underline,'Underline');

withStyle(Text$1,styles.small,'Small');

withStyle(Text$1,styles.sup,'Sup');

withStyle(Text$1,styles.sub,'Sub');

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withLabel.js";var ContainerPropTypes={placement:PropTypes.oneOf([PLACEMENT_LEFT,PLACEMENT_RIGHT,PLACEMENT_TOP,PLACEMENT_BOTTOM]),contentContainerStyle:PropTypes.any,disabled:PropTypes.bool,label:PropTypes.string,children:PropTypes.node,onPress:PropTypes.func,onLabelPress:PropTypes.func,onLongPress:PropTypes.func,onLabelLongPress:PropTypes.func};var ContainerDefaultProps={placement:PLACEMENT_LEFT,contentContainerStyle:null,disabled:false,label:'',children:undefined,onPress:undefined,onLabelPress:undefined,onLongPress:undefined,onLabelLongPress:undefined};var getPlacementStyle=function getPlacementStyle(placement){switch(placement){case PLACEMENT_RIGHT:return styles$1.containerRight;case PLACEMENT_TOP:return styles$1.containerTop;case PLACEMENT_BOTTOM:return styles$1.containerBottom;}return styles$1.containerLeft;};var withLabel=function withLabel(Component){var displayName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var Container=function Container(_ref){var contentContainerStyle=_ref.contentContainerStyle,placement=_ref.placement,disabled=_ref.disabled,label=_ref.label,children=_ref.children,onPress=_ref.onPress,onLabelPress=_ref.onLabelPress,onLongPress=_ref.onLongPress,onLabelLongPress=_ref.onLabelLongPress,props=objectWithoutProperties(_ref,["contentContainerStyle","placement","disabled","label","children","onPress","onLabelPress","onLongPress","onLabelLongPress"]);var labelNode=null;if(label){labelNode=React.createElement(Text$1,{style:getButtonStyle(styles$1,disabled),onPress:onLabelPress||onPress,onLongPress:onLabelLongPress||onLongPress,__source:{fileName:_jsxFileName$3,lineNumber:75}},label);}return React.createElement(reactNative.View,{style:[getPlacementStyle(placement),contentContainerStyle],__source:{fileName:_jsxFileName$3,lineNumber:86}},React.createElement(Component,_extends_1({},props,{onPress:onPress,onLongPress:onLongPress,__source:{fileName:_jsxFileName$3,lineNumber:87}})),labelNode,children);};Container.propTypes=ContainerPropTypes;Container.defaultProps=ContainerDefaultProps;Container.displayName=displayName||"withLabel("+Component.name+")";return Container;};var styles$1=reactNative.StyleSheet.create({normal:{marginHorizontal:5,color:TEXT_ACTIVE_COLOR},disabled:{marginHorizontal:5,color:TEXT_DISABLED_COLOR},containerLeft:{flexDirection:'row-reverse',justifyContent:'flex-start',alignItems:'center'},containerRight:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},containerTop:{flexDirection:'column-reverse',justifyContent:'flex-start',alignItems:'center'},containerBottom:{flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}});

exports.default = withLabel;
//# sourceMappingURL=withLabel.js.map
