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

var TEXT_COLOR=0xccccccff;var TEXT_ACTIVE_COLOR=0xffffffff;

var styles = reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:22,color:TEXT_COLOR},italic:{fontStyle:'italic'},strong:{fontWeight:'600'},underline:{textDecorationLine:'underline'},small:{fontSize:12,textAlignVertical:'bottom'},sub:{fontSize:10,lineHeight:10,marginBottom:-11},sup:{fontSize:10,lineHeight:10,marginTop:-11}});

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\Text.js";var Text=function Text(props){return React.createElement(reactNative.Text,_extends_1({},props,{__source:{fileName:_jsxFileName$1,lineNumber:9}}));};var Text$1 = withStyleInheritance(Text,styles.text,'Text');

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes$1={style:PropTypes.any};var WrapperDefaultProps$1={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName$2,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};

var styles$1 = reactNative.StyleSheet.create({container:{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:10},super:{color:TEXT_ACTIVE_COLOR,lineHeight:28,fontSize:26},big:{color:TEXT_ACTIVE_COLOR,lineHeight:26,fontSize:24},header:{color:TEXT_ACTIVE_COLOR,fontSize:22},small:{color:TEXT_ACTIVE_COLOR,fontSize:20},slim:{color:TEXT_ACTIVE_COLOR,fontSize:18}});

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Header\\withHeaderContainer.js";var HeaderContainer=withStyle(reactNative.View,styles$1.container,'HeaderContainer');var WrapperPropTypes$2={contentContainerStyle:PropTypes.any};var WrapperDefaultProps$2={contentContainerStyle:undefined};var withHeaderContainer=function withHeaderContainer(Component){var displayName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var Wrapper=function Wrapper(_ref){var contentContainerStyle=_ref.contentContainerStyle,props=objectWithoutProperties(_ref,["contentContainerStyle"]);return React.createElement(HeaderContainer,{style:contentContainerStyle,__source:{fileName:_jsxFileName$3,lineNumber:21}},React.createElement(Component,_extends_1({},props,{__source:{fileName:_jsxFileName$3,lineNumber:22}})));};Wrapper.propTypes=WrapperPropTypes$2;Wrapper.defaultProps=WrapperDefaultProps$2;Wrapper.displayName=displayName||"withHeaderContainer("+Component.name+")";return Wrapper;};

var SuperHeaderText=withStyle(Text$1,styles$1.super,'SuperHeaderText');var SuperHeader = withHeaderContainer(SuperHeaderText,'SuperHeader');

var BigHeaderText=withStyle(Text$1,styles$1.big,'BigHeaderText');var BigHeader = withHeaderContainer(BigHeaderText,'BigHeader');

var HeaderText=withStyle(Text$1,styles$1.header,'HeaderText');var Header = withHeaderContainer(HeaderText,'Header');

var SmallHeaderText=withStyle(Text$1,styles$1.small,'SmallHeaderText');var SmallHeader = withHeaderContainer(SmallHeaderText,'SmallHeader');

var SlimHeaderText=withStyle(Text$1,styles$1.slim,'SlimHeaderText');var SlimHeader = withHeaderContainer(SlimHeaderText,'SlimHeader');

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
//# sourceMappingURL=Header.js.map
