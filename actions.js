'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactNative = require('react-native');
var React = require('react');
var React__default = _interopDefault(React);
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

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

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

var closureValue = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,'__esModule',{value:true});var singleValueFactory=function singleValueFactory(){var defaultValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var valueFormatter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(value){return value;};var value=defaultValue;return {getDefault:function getDefault(){return defaultValue;},get:function get(){return value;},set:function set(){var newValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:defaultValue;value=valueFormatter(newValue);}};};var valuesMapFactory=function valuesMapFactory(){var defaults=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Map();var valueFormatter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(key,value){return value;};var defaultValues=new Map(defaults);var getDefault=function getDefault(){return new Map(defaultValues);};var values=getDefault();return {values:values,getDefault:getDefault,copy:function copy(){return new Map(values);},delete:function _delete(key){return values.delete(key);},has:function has(key){return values.has(key);},set:function set(key,value){return values.set(key,valueFormatter(key,value));},get:function get(key){return values.get(key);}};};var valuesSetFactory=function valuesSetFactory(){var defaults=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Set();var valueFormatter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(value){return value;};var defaultValues=new Set(defaults);var getDefault=function getDefault(){return new Set(defaultValues);};var values=getDefault();return {values:values,getDefault:getDefault,get:function get(){return new Set(values);},delete:function _delete(value){return values.delete(value);},has:function has(value){return values.has(value);},add:function add(value){return values.add(valueFormatter(value));}};};exports.singleValueFactory=singleValueFactory;exports.valuesMapFactory=valuesMapFactory;exports.valuesSetFactory=valuesSetFactory;
});

unwrapExports(closureValue);
var closureValue_1 = closureValue.singleValueFactory;
var closureValue_2 = closureValue.valuesMapFactory;
var closureValue_3 = closureValue.valuesSetFactory;

function _arrayWithoutHoles$1(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var arrayWithoutHoles$1=_arrayWithoutHoles$1;

function _iterableToArray$1(iter){if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}var iterableToArray$1=_iterableToArray$1;

function _nonIterableSpread$1(){throw new TypeError("Invalid attempt to spread non-iterable instance");}var nonIterableSpread$1=_nonIterableSpread$1;

function _toConsumableArray$1(arr){return arrayWithoutHoles$1(arr)||iterableToArray$1(arr)||nonIterableSpread$1();}var toConsumableArray$1=_toConsumableArray$1;

var _extends_1$1 = createCommonjsModule(function (module) {
function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}module.exports=_extends;
});

function _objectWithoutPropertiesLoose$1(source,excluded){if(source==null)return {};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var objectWithoutPropertiesLoose$1=_objectWithoutPropertiesLoose$1;

function _objectWithoutProperties$1(source,excluded){if(source==null)return {};var target=objectWithoutPropertiesLoose$1(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}var objectWithoutProperties$1=_objectWithoutProperties$1;

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var classCallCheck=_classCallCheck;

function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var createClass=_createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj){if(typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof obj;};}return _typeof2(obj);}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"){module.exports=_typeof=function _typeof(obj){return _typeof2(obj);};}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":_typeof2(obj);};}return _typeof(obj);}module.exports=_typeof;
});

function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var assertThisInitialized=_assertThisInitialized;

function _possibleConstructorReturn(self,call){if(call&&(_typeof_1(call)==="object"||typeof call==="function")){return call;}return assertThisInitialized(self);}var possibleConstructorReturn=_possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o){module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}module.exports=_getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;
});

function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)setPrototypeOf(subClass,superClass);}var inherits=_inherits;

var NativeIconAPI=reactNative.NativeModules.RNVectorIconsManager||reactNative.NativeModules.RNVectorIconsModule;function ensureNativeModuleAvailable(){if(!NativeIconAPI){if(reactNative.Platform.OS==='android'){throw new Error('RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.');}throw new Error('RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.');}}

var freeGlobal=typeof commonjsGlobal=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var _freeGlobal=freeGlobal;

var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;var root=_freeGlobal||freeSelf||Function('return this')();var _root=root;

var Symbol$1=_root.Symbol;var _Symbol=Symbol$1;

var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;var nativeObjectToString=objectProto.toString;var symToStringTag=_Symbol?typeof _Symbol==="function"?_Symbol.toStringTag:"@@toStringTag":undefined;function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;}catch(e){}var result=nativeObjectToString.call(value);{if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}var _getRawTag=getRawTag;

var objectProto$1=Object.prototype;var nativeObjectToString$1=objectProto$1.toString;function objectToString(value){return nativeObjectToString$1.call(value);}var _objectToString=objectToString;

var nullTag='[object Null]',undefinedTag='[object Undefined]';var symToStringTag$1=_Symbol?typeof _Symbol==="function"?_Symbol.toStringTag:"@@toStringTag":undefined;function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag$1&&symToStringTag$1 in Object(value)?_getRawTag(value):_objectToString(value);}var _baseGetTag=baseGetTag;

var isArray=Array.isArray;var isArray_1=isArray;

function isObjectLike(value){return value!=null&&typeof value=='object';}var isObjectLike_1=isObjectLike;

var stringTag='[object String]';function isString(value){return typeof value=='string'||!isArray_1(value)&&isObjectLike_1(value)&&_baseGetTag(value)==stringTag;}var isString_1=isString;

function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}var _arrayMap=arrayMap;

function listCacheClear(){this.__data__=[];this.size=0;}var _listCacheClear=listCacheClear;

function eq(value,other){return value===other||value!==value&&other!==other;}var eq_1=eq;

function assocIndexOf(array,key){var length=array.length;while(length--){if(eq_1(array[length][0],key)){return length;}}return -1;}var _assocIndexOf=assocIndexOf;

var arrayProto=Array.prototype;var splice=arrayProto.splice;function listCacheDelete(key){var data=this.__data__,index=_assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}var _listCacheDelete=listCacheDelete;

function listCacheGet(key){var data=this.__data__,index=_assocIndexOf(data,key);return index<0?undefined:data[index][1];}var _listCacheGet=listCacheGet;

function listCacheHas(key){return _assocIndexOf(this.__data__,key)>-1;}var _listCacheHas=listCacheHas;

function listCacheSet(key,value){var data=this.__data__,index=_assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}var _listCacheSet=listCacheSet;

function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}ListCache.prototype.clear=_listCacheClear;ListCache.prototype['delete']=_listCacheDelete;ListCache.prototype.get=_listCacheGet;ListCache.prototype.has=_listCacheHas;ListCache.prototype.set=_listCacheSet;var _ListCache=ListCache;

function stackClear(){this.__data__=new _ListCache();this.size=0;}var _stackClear=stackClear;

function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}var _stackDelete=stackDelete;

function stackGet(key){return this.__data__.get(key);}var _stackGet=stackGet;

function stackHas(key){return this.__data__.has(key);}var _stackHas=stackHas;

function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}var isObject_1=isObject;

var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';function isFunction$1(value){if(!isObject_1(value)){return false;}var tag=_baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}var isFunction_1=isFunction$1;

var coreJsData=_root['__core-js_shared__'];var _coreJsData=coreJsData;

var maskSrcKey=function(){var uid=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();function isMasked(func){return !!maskSrcKey&&maskSrcKey in func;}var _isMasked=isMasked;

var funcProto=Function.prototype;var funcToString=funcProto.toString;function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return '';}var _toSource=toSource;

var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;var reIsHostCtor=/^\[object .+?Constructor\]$/;var funcProto$1=Function.prototype,objectProto$2=Object.prototype;var funcToString$1=funcProto$1.toString;var hasOwnProperty$1=objectProto$2.hasOwnProperty;var reIsNative=RegExp('^'+funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');function baseIsNative(value){if(!isObject_1(value)||_isMasked(value)){return false;}var pattern=isFunction_1(value)?reIsNative:reIsHostCtor;return pattern.test(_toSource(value));}var _baseIsNative=baseIsNative;

function getValue(object,key){return object==null?undefined:object[key];}var _getValue=getValue;

function getNative(object,key){var value=_getValue(object,key);return _baseIsNative(value)?value:undefined;}var _getNative=getNative;

var Map$1=_getNative(_root,'Map');var _Map=Map$1;

var nativeCreate=_getNative(Object,'create');var _nativeCreate=nativeCreate;

function hashClear(){this.__data__=_nativeCreate?_nativeCreate(null):{};this.size=0;}var _hashClear=hashClear;

function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}var _hashDelete=hashDelete;

var HASH_UNDEFINED='__lodash_hash_undefined__';var objectProto$3=Object.prototype;var hasOwnProperty$2=objectProto$3.hasOwnProperty;function hashGet(key){var data=this.__data__;if(_nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty$2.call(data,key)?data[key]:undefined;}var _hashGet=hashGet;

var objectProto$4=Object.prototype;var hasOwnProperty$3=objectProto$4.hasOwnProperty;function hashHas(key){var data=this.__data__;return _nativeCreate?data[key]!==undefined:hasOwnProperty$3.call(data,key);}var _hashHas=hashHas;

var HASH_UNDEFINED$1='__lodash_hash_undefined__';function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=_nativeCreate&&value===undefined?HASH_UNDEFINED$1:value;return this;}var _hashSet=hashSet;

function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}Hash.prototype.clear=_hashClear;Hash.prototype['delete']=_hashDelete;Hash.prototype.get=_hashGet;Hash.prototype.has=_hashHas;Hash.prototype.set=_hashSet;var _Hash=Hash;

function mapCacheClear(){this.size=0;this.__data__={'hash':new _Hash(),'map':new(_Map||_ListCache)(),'string':new _Hash()};}var _mapCacheClear=mapCacheClear;

function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}var _isKeyable=isKeyable;

function getMapData(map,key){var data=map.__data__;return _isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}var _getMapData=getMapData;

function mapCacheDelete(key){var result=_getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}var _mapCacheDelete=mapCacheDelete;

function mapCacheGet(key){return _getMapData(this,key).get(key);}var _mapCacheGet=mapCacheGet;

function mapCacheHas(key){return _getMapData(this,key).has(key);}var _mapCacheHas=mapCacheHas;

function mapCacheSet(key,value){var data=_getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}var _mapCacheSet=mapCacheSet;

function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}MapCache.prototype.clear=_mapCacheClear;MapCache.prototype['delete']=_mapCacheDelete;MapCache.prototype.get=_mapCacheGet;MapCache.prototype.has=_mapCacheHas;MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache;

var LARGE_ARRAY_SIZE=200;function stackSet(key,value){var data=this.__data__;if(data instanceof _ListCache){var pairs=data.__data__;if(!_Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new _MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}var _stackSet=stackSet;

function Stack(entries){var data=this.__data__=new _ListCache(entries);this.size=data.size;}Stack.prototype.clear=_stackClear;Stack.prototype['delete']=_stackDelete;Stack.prototype.get=_stackGet;Stack.prototype.has=_stackHas;Stack.prototype.set=_stackSet;var _Stack=Stack;

function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}var _arrayEach=arrayEach;

var defineProperty$1=function(){try{var func=_getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();var _defineProperty$1=defineProperty$1;

function baseAssignValue(object,key,value){if(key=='__proto__'&&_defineProperty$1){_defineProperty$1(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}var _baseAssignValue=baseAssignValue;

var objectProto$5=Object.prototype;var hasOwnProperty$4=objectProto$5.hasOwnProperty;function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty$4.call(object,key)&&eq_1(objValue,value))||value===undefined&&!(key in object)){_baseAssignValue(object,key,value);}}var _assignValue=assignValue;

function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){_baseAssignValue(object,key,newValue);}else{_assignValue(object,key,newValue);}}return object;}var _copyObject=copyObject;

function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}var _baseTimes=baseTimes;

var argsTag='[object Arguments]';function baseIsArguments(value){return isObjectLike_1(value)&&_baseGetTag(value)==argsTag;}var _baseIsArguments=baseIsArguments;

var objectProto$6=Object.prototype;var hasOwnProperty$5=objectProto$6.hasOwnProperty;var propertyIsEnumerable=objectProto$6.propertyIsEnumerable;var isArguments=_baseIsArguments(function(){return arguments;}())?_baseIsArguments:function(value){return isObjectLike_1(value)&&hasOwnProperty$5.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};var isArguments_1=isArguments;

function stubFalse(){return false;}var stubFalse_1=stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var freeExports=exports&&!exports.nodeType&&exports;var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;var moduleExports=freeModule&&freeModule.exports===freeExports;var Buffer=moduleExports?_root.Buffer:undefined;var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;var isBuffer=nativeIsBuffer||stubFalse_1;module.exports=isBuffer;
});

var MAX_SAFE_INTEGER=9007199254740991;var reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER:length;return !!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}var _isIndex=isIndex;

var MAX_SAFE_INTEGER$1=9007199254740991;function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER$1;}var isLength_1=isLength;

var argsTag$1='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag$1='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag$1='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag]=false;function baseIsTypedArray(value){return isObjectLike_1(value)&&isLength_1(value.length)&&!!typedArrayTags[_baseGetTag(value)];}var _baseIsTypedArray=baseIsTypedArray;

function baseUnary(func){return function(value){return func(value);};}var _baseUnary=baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeExports=exports&&!exports.nodeType&&exports;var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;var moduleExports=freeModule&&freeModule.exports===freeExports;var freeProcess=moduleExports&&_freeGlobal.process;var nodeUtil=function(){try{var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;
});

var nodeIsTypedArray=_nodeUtil&&_nodeUtil.isTypedArray;var isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray;var isTypedArray_1=isTypedArray;

var objectProto$7=Object.prototype;var hasOwnProperty$6=objectProto$7.hasOwnProperty;function arrayLikeKeys(value,inherited){var isArr=isArray_1(value),isArg=!isArr&&isArguments_1(value),isBuff=!isArr&&!isArg&&isBuffer_1(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray_1(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?_baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty$6.call(value,key))&&!(skipIndexes&&(key=='length'||isBuff&&(key=='offset'||key=='parent')||isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||_isIndex(key,length)))){result.push(key);}}return result;}var _arrayLikeKeys=arrayLikeKeys;

var objectProto$8=Object.prototype;function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto$8;return value===proto;}var _isPrototype=isPrototype;

function overArg(func,transform){return function(arg){return func(transform(arg));};}var _overArg=overArg;

var nativeKeys=_overArg(Object.keys,Object);var _nativeKeys=nativeKeys;

var objectProto$9=Object.prototype;var hasOwnProperty$7=objectProto$9.hasOwnProperty;function baseKeys(object){if(!_isPrototype(object)){return _nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty$7.call(object,key)&&key!='constructor'){result.push(key);}}return result;}var _baseKeys=baseKeys;

function isArrayLike(value){return value!=null&&isLength_1(value.length)&&!isFunction_1(value);}var isArrayLike_1=isArrayLike;

function keys(object){return isArrayLike_1(object)?_arrayLikeKeys(object):_baseKeys(object);}var keys_1=keys;

function baseAssign(object,source){return object&&_copyObject(source,keys_1(source),object);}var _baseAssign=baseAssign;

function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}var _nativeKeysIn=nativeKeysIn;

var objectProto$a=Object.prototype;var hasOwnProperty$8=objectProto$a.hasOwnProperty;function baseKeysIn(object){if(!isObject_1(object)){return _nativeKeysIn(object);}var isProto=_isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty$8.call(object,key)))){result.push(key);}}return result;}var _baseKeysIn=baseKeysIn;

function keysIn$1(object){return isArrayLike_1(object)?_arrayLikeKeys(object,true):_baseKeysIn(object);}var keysIn_1=keysIn$1;

function baseAssignIn(object,source){return object&&_copyObject(source,keysIn_1(source),object);}var _baseAssignIn=baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
var freeExports=exports&&!exports.nodeType&&exports;var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;var moduleExports=freeModule&&freeModule.exports===freeExports;var Buffer=moduleExports?_root.Buffer:undefined,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}module.exports=cloneBuffer;
});

function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}var _copyArray=copyArray;

function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}var _arrayFilter=arrayFilter;

function stubArray(){return [];}var stubArray_1=stubArray;

var objectProto$b=Object.prototype;var propertyIsEnumerable$1=objectProto$b.propertyIsEnumerable;var nativeGetSymbols=Object.getOwnPropertySymbols;var getSymbols=!nativeGetSymbols?stubArray_1:function(object){if(object==null){return [];}object=Object(object);return _arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable$1.call(object,symbol);});};var _getSymbols=getSymbols;

function copySymbols(source,object){return _copyObject(source,_getSymbols(source),object);}var _copySymbols=copySymbols;

function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}var _arrayPush=arrayPush;

var getPrototype=_overArg(Object.getPrototypeOf,Object);var _getPrototype=getPrototype;

var nativeGetSymbols$1=Object.getOwnPropertySymbols;var getSymbolsIn=!nativeGetSymbols$1?stubArray_1:function(object){var result=[];while(object){_arrayPush(result,_getSymbols(object));object=_getPrototype(object);}return result;};var _getSymbolsIn=getSymbolsIn;

function copySymbolsIn(source,object){return _copyObject(source,_getSymbolsIn(source),object);}var _copySymbolsIn=copySymbolsIn;

function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray_1(object)?result:_arrayPush(result,symbolsFunc(object));}var _baseGetAllKeys=baseGetAllKeys;

function getAllKeys(object){return _baseGetAllKeys(object,keys_1,_getSymbols);}var _getAllKeys=getAllKeys;

function getAllKeysIn(object){return _baseGetAllKeys(object,keysIn_1,_getSymbolsIn);}var _getAllKeysIn=getAllKeysIn;

var DataView=_getNative(_root,'DataView');var _DataView=DataView;

var Promise$1=_getNative(_root,'Promise');var _Promise=Promise$1;

var Set$1=_getNative(_root,'Set');var _Set=Set$1;

var WeakMap=_getNative(_root,'WeakMap');var _WeakMap=WeakMap;

var mapTag$1='[object Map]',objectTag$1='[object Object]',promiseTag='[object Promise]',setTag$1='[object Set]',weakMapTag$1='[object WeakMap]';var dataViewTag$1='[object DataView]';var dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap);var getTag=_baseGetTag;if(_DataView&&getTag(new _DataView(new ArrayBuffer(1)))!=dataViewTag$1||_Map&&getTag(new _Map())!=mapTag$1||_Promise&&getTag(_Promise.resolve())!=promiseTag||_Set&&getTag(new _Set())!=setTag$1||_WeakMap&&getTag(new _WeakMap())!=weakMapTag$1){getTag=function getTag(value){var result=_baseGetTag(value),Ctor=result==objectTag$1?value.constructor:undefined,ctorString=Ctor?_toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$1;case promiseCtorString:return promiseTag;case setCtorString:return setTag$1;case weakMapCtorString:return weakMapTag$1;}}return result;};}var _getTag=getTag;

var objectProto$c=Object.prototype;var hasOwnProperty$9=objectProto$c.hasOwnProperty;function initCloneArray(array){var length=array.length,result=new array.constructor(length);if(length&&typeof array[0]=='string'&&hasOwnProperty$9.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}var _initCloneArray=initCloneArray;

var Uint8Array=_root.Uint8Array;var _Uint8Array=Uint8Array;

function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));return result;}var _cloneArrayBuffer=cloneArrayBuffer;

function cloneDataView(dataView,isDeep){var buffer=isDeep?_cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}var _cloneDataView=cloneDataView;

var reFlags=/\w*$/;function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}var _cloneRegExp=cloneRegExp;

var symbolProto=_Symbol?typeof _Symbol==="function"?_Symbol.prototype:"@@prototype":undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}var _cloneSymbol=cloneSymbol;

function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?_cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}var _cloneTypedArray=cloneTypedArray;

var boolTag$1='[object Boolean]',dateTag$1='[object Date]',mapTag$2='[object Map]',numberTag$1='[object Number]',regexpTag$1='[object RegExp]',setTag$2='[object Set]',stringTag$2='[object String]',symbolTag='[object Symbol]';var arrayBufferTag$1='[object ArrayBuffer]',dataViewTag$2='[object DataView]',float32Tag$1='[object Float32Array]',float64Tag$1='[object Float64Array]',int8Tag$1='[object Int8Array]',int16Tag$1='[object Int16Array]',int32Tag$1='[object Int32Array]',uint8Tag$1='[object Uint8Array]',uint8ClampedTag$1='[object Uint8ClampedArray]',uint16Tag$1='[object Uint16Array]',uint32Tag$1='[object Uint32Array]';function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag$1:return _cloneArrayBuffer(object);case boolTag$1:case dateTag$1:return new Ctor(+object);case dataViewTag$2:return _cloneDataView(object,isDeep);case float32Tag$1:case float64Tag$1:case int8Tag$1:case int16Tag$1:case int32Tag$1:case uint8Tag$1:case uint8ClampedTag$1:case uint16Tag$1:case uint32Tag$1:return _cloneTypedArray(object,isDeep);case mapTag$2:return new Ctor();case numberTag$1:case stringTag$2:return new Ctor(object);case regexpTag$1:return _cloneRegExp(object);case setTag$2:return new Ctor();case symbolTag:return _cloneSymbol(object);}}var _initCloneByTag=initCloneByTag;

var objectCreate=Object.create;var baseCreate=function(){function object(){}return function(proto){if(!isObject_1(proto)){return {};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();var _baseCreate=baseCreate;

function initCloneObject(object){return typeof object.constructor=='function'&&!_isPrototype(object)?_baseCreate(_getPrototype(object)):{};}var _initCloneObject=initCloneObject;

var mapTag$3='[object Map]';function baseIsMap(value){return isObjectLike_1(value)&&_getTag(value)==mapTag$3;}var _baseIsMap=baseIsMap;

var nodeIsMap=_nodeUtil&&_nodeUtil.isMap;var isMap=nodeIsMap?_baseUnary(nodeIsMap):_baseIsMap;var isMap_1=isMap;

var setTag$3='[object Set]';function baseIsSet(value){return isObjectLike_1(value)&&_getTag(value)==setTag$3;}var _baseIsSet=baseIsSet;

var nodeIsSet=_nodeUtil&&_nodeUtil.isSet;var isSet=nodeIsSet?_baseUnary(nodeIsSet):_baseIsSet;var isSet_1=isSet;

var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;var argsTag$2='[object Arguments]',arrayTag$1='[object Array]',boolTag$2='[object Boolean]',dateTag$2='[object Date]',errorTag$1='[object Error]',funcTag$2='[object Function]',genTag$1='[object GeneratorFunction]',mapTag$4='[object Map]',numberTag$2='[object Number]',objectTag$2='[object Object]',regexpTag$2='[object RegExp]',setTag$4='[object Set]',stringTag$3='[object String]',symbolTag$1='[object Symbol]',weakMapTag$2='[object WeakMap]';var arrayBufferTag$2='[object ArrayBuffer]',dataViewTag$3='[object DataView]',float32Tag$2='[object Float32Array]',float64Tag$2='[object Float64Array]',int8Tag$2='[object Int8Array]',int16Tag$2='[object Int16Array]',int32Tag$2='[object Int32Array]',uint8Tag$2='[object Uint8Array]',uint8ClampedTag$2='[object Uint8ClampedArray]',uint16Tag$2='[object Uint16Array]',uint32Tag$2='[object Uint32Array]';var cloneableTags={};cloneableTags[argsTag$2]=cloneableTags[arrayTag$1]=cloneableTags[arrayBufferTag$2]=cloneableTags[dataViewTag$3]=cloneableTags[boolTag$2]=cloneableTags[dateTag$2]=cloneableTags[float32Tag$2]=cloneableTags[float64Tag$2]=cloneableTags[int8Tag$2]=cloneableTags[int16Tag$2]=cloneableTags[int32Tag$2]=cloneableTags[mapTag$4]=cloneableTags[numberTag$2]=cloneableTags[objectTag$2]=cloneableTags[regexpTag$2]=cloneableTags[setTag$4]=cloneableTags[stringTag$3]=cloneableTags[symbolTag$1]=cloneableTags[uint8Tag$2]=cloneableTags[uint8ClampedTag$2]=cloneableTags[uint16Tag$2]=cloneableTags[uint32Tag$2]=true;cloneableTags[errorTag$1]=cloneableTags[funcTag$2]=cloneableTags[weakMapTag$2]=false;function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject_1(value)){return value;}var isArr=isArray_1(value);if(isArr){result=_initCloneArray(value);if(!isDeep){return _copyArray(value,result);}}else{var tag=_getTag(value),isFunc=tag==funcTag$2||tag==genTag$1;if(isBuffer_1(value)){return _cloneBuffer(value,isDeep);}if(tag==objectTag$2||tag==argsTag$2||isFunc&&!object){result=isFlat||isFunc?{}:_initCloneObject(value);if(!isDeep){return isFlat?_copySymbolsIn(value,_baseAssignIn(result,value)):_copySymbols(value,_baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=_initCloneByTag(value,tag,isDeep);}}stack||(stack=new _Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet_1(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});return result;}if(isMap_1(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}var keysFunc=isFull?isFlat?_getAllKeysIn:_getAllKeys:isFlat?keysIn:keys_1;var props=isArr?undefined:keysFunc(value);_arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}_assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}var _baseClone=baseClone;

var symbolTag$2='[object Symbol]';function isSymbol(value){return typeof value=='symbol'||isObjectLike_1(value)&&_baseGetTag(value)==symbolTag$2;}var isSymbol_1=isSymbol;

var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(value,object){if(isArray_1(value)){return false;}var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol_1(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}var _isKey=isKey;

var FUNC_ERROR_TEXT='Expected a function';function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||_MapCache)();return memoized;}memoize.Cache=_MapCache;var memoize_1=memoize;

var MAX_MEMOIZE_SIZE=500;function memoizeCapped(func){var result=memoize_1(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}var _memoizeCapped=memoizeCapped;

var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var reEscapeChar=/\\(\\)?/g;var stringToPath=_memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});var _stringToPath=stringToPath;

var INFINITY=1/0;var symbolProto$1=_Symbol?typeof _Symbol==="function"?_Symbol.prototype:"@@prototype":undefined,symbolToString=symbolProto$1?symbolProto$1.toString:undefined;function baseToString(value){if(typeof value=='string'){return value;}if(isArray_1(value)){return _arrayMap(value,baseToString)+'';}if(isSymbol_1(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}var _baseToString=baseToString;

function toString(value){return value==null?'':_baseToString(value);}var toString_1=toString;

function castPath(value,object){if(isArray_1(value)){return value;}return _isKey(value,object)?[value]:_stringToPath(toString_1(value));}var _castPath=castPath;

function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}var last_1=last;

var INFINITY$1=1/0;function toKey(value){if(typeof value=='string'||isSymbol_1(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY$1?'-0':result;}var _toKey=toKey;

function baseGet(object,path){path=_castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[_toKey(path[index++])];}return index&&index==length?object:undefined;}var _baseGet=baseGet;

function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}var _baseSlice=baseSlice;

function parent(object,path){return path.length<2?object:_baseGet(object,_baseSlice(path,0,-1));}var _parent=parent;

function baseUnset(object,path){path=_castPath(path,object);object=_parent(object,path);return object==null||delete object[_toKey(last_1(path))];}var _baseUnset=baseUnset;

var objectTag$3='[object Object]';var funcProto$2=Function.prototype,objectProto$d=Object.prototype;var funcToString$2=funcProto$2.toString;var hasOwnProperty$a=objectProto$d.hasOwnProperty;var objectCtorString=funcToString$2.call(Object);function isPlainObject(value){if(!isObjectLike_1(value)||_baseGetTag(value)!=objectTag$3){return false;}var proto=_getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty$a.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString$2.call(Ctor)==objectCtorString;}var isPlainObject_1=isPlainObject;

function customOmitClone(value){return isPlainObject_1(value)?undefined:value;}var _customOmitClone=customOmitClone;

var spreadableSymbol=_Symbol?typeof _Symbol==="function"?_Symbol.isConcatSpreadable:"@@isConcatSpreadable":undefined;function isFlattenable(value){return isArray_1(value)||isArguments_1(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}var _isFlattenable=isFlattenable;

function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=_isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){baseFlatten(value,depth-1,predicate,isStrict,result);}else{_arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}var _baseFlatten=baseFlatten;

function flatten(array){var length=array==null?0:array.length;return length?_baseFlatten(array,1):[];}var flatten_1=flatten;

function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}var _apply=apply;

var nativeMax=Math.max;function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return _apply(func,this,otherArgs);};}var _overRest=overRest;

function constant(value){return function(){return value;};}var constant_1=constant;

function identity(value){return value;}var identity_1=identity;

var baseSetToString=!_defineProperty$1?identity_1:function(func,string){return _defineProperty$1(func,'toString',{'configurable':true,'enumerable':false,'value':constant_1(string),'writable':true});};var _baseSetToString=baseSetToString;

var HOT_COUNT=800,HOT_SPAN=16;var nativeNow=Date.now;function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}var _shortOut=shortOut;

var setToString=_shortOut(_baseSetToString);var _setToString=setToString;

function flatRest(func){return _setToString(_overRest(func,undefined,flatten_1),func+'');}var _flatRest=flatRest;

var CLONE_DEEP_FLAG$1=1,CLONE_FLAT_FLAG$1=2,CLONE_SYMBOLS_FLAG$1=4;var omit=_flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=_arrayMap(paths,function(path){path=_castPath(path,object);isDeep||(isDeep=path.length>1);return path;});_copyObject(object,_getAllKeysIn(object),result);if(isDeep){result=_baseClone(result,CLONE_DEEP_FLAG$1|CLONE_FLAT_FLAG$1|CLONE_SYMBOLS_FLAG$1,_customOmitClone);}var length=paths.length;while(length--){_baseUnset(result,paths[length]);}return result;});var omit_1=omit;

function baseSet(object,path,value,customizer){if(!isObject_1(object)){return object;}path=_castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=_toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject_1(objValue)?objValue:_isIndex(path[index+1])?[]:{};}}_assignValue(nested,key,newValue);nested=nested[key];}return object;}var _baseSet=baseSet;

function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=_baseGet(object,path);if(predicate(value,path)){_baseSet(result,_castPath(path,object),value);}}return result;}var _basePickBy=basePickBy;

function baseHasIn(object,key){return object!=null&&key in Object(object);}var _baseHasIn=baseHasIn;

function hasPath(object,path,hasFunc){path=_castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=_toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return !!length&&isLength_1(length)&&_isIndex(key,length)&&(isArray_1(object)||isArguments_1(object));}var _hasPath=hasPath;

function hasIn(object,path){return object!=null&&_hasPath(object,path,_baseHasIn);}var hasIn_1=hasIn;

function basePick(object,paths){return _basePickBy(object,paths,function(value,path){return hasIn_1(object,path);});}var _basePick=basePick;

var pick=_flatRest(function(object,paths){return object==null?{}:_basePick(object,paths);});var pick_1=pick;

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\node_modules\\react-native-vector-icons\\lib\\icon-button.js";var styles=reactNative.StyleSheet.create({container:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:8},touchable:{overflow:'hidden'},icon:{marginRight:10},text:{fontWeight:'600',backgroundColor:'transparent'}});var IOS7_BLUE='#007AFF';var TEXT_PROP_NAMES=['ellipsizeMode','numberOfLines','textBreakStrategy','selectable','suppressHighlighting','allowFontScaling','adjustsFontSizeToFit','minimumFontScale'];var TOUCHABLE_PROP_NAMES=['accessible','accessibilityLabel','accessibilityHint','accessibilityComponentType','accessibilityRole','accessibilityStates','accessibilityTraits','onFocus','onBlur','disabled','onPress','onPressIn','onPressOut','onLayout','onLongPress','nativeID','testID','delayPressIn','delayPressOut','delayLongPress','activeOpacity','underlayColor','selectionColor','onShowUnderlay','onHideUnderlay','hasTVPreferredFocus','tvParallaxProperties'];function createIconButtonComponent(Icon){var _class,_temp;return _temp=_class=function(_PureComponent){inherits(IconButton,_PureComponent);function IconButton(){classCallCheck(this,IconButton);return possibleConstructorReturn(this,getPrototypeOf(IconButton).apply(this,arguments));}createClass(IconButton,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,iconStyle=_this$props.iconStyle,children=_this$props.children,restProps=objectWithoutProperties$1(_this$props,["style","iconStyle","children"]);var iconProps=pick_1(restProps,TEXT_PROP_NAMES,'style','name','size','color');var touchableProps=pick_1(restProps,TOUCHABLE_PROP_NAMES);var props=omit_1(restProps,Object.keys(iconProps),Object.keys(touchableProps),'iconStyle','borderRadius','backgroundColor');iconProps.style=iconStyle?[styles.icon,iconStyle]:styles.icon;var colorStyle=pick_1(this.props,'color');var blockStyle=pick_1(this.props,'backgroundColor','borderRadius');return React__default.createElement(reactNative.TouchableHighlight,_extends_1$1({style:[styles.touchable,blockStyle]},touchableProps,{__source:{fileName:_jsxFileName,lineNumber:118}}),React__default.createElement(reactNative.View,_extends_1$1({style:[styles.container,blockStyle,style]},props,{__source:{fileName:_jsxFileName,lineNumber:122}}),React__default.createElement(Icon,_extends_1$1({},iconProps,{__source:{fileName:_jsxFileName,lineNumber:123}})),isString_1(children)?React__default.createElement(reactNative.Text,{style:[styles.text,colorStyle],__source:{fileName:_jsxFileName,lineNumber:125}},children):children));}}]);return IconButton;}(React.PureComponent),_class.propTypes={backgroundColor:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),borderRadius:PropTypes.number,color:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),size:PropTypes.number,iconStyle:PropTypes.any,style:PropTypes.any,children:PropTypes.node},_class.defaultProps={backgroundColor:IOS7_BLUE,borderRadius:5,color:'white',size:20},_temp;}

var runtime = createCommonjsModule(function (module) {
!function(global){var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var runtime=global.regeneratorRuntime;if(runtime){{module.exports=runtime;}return;}runtime=global.regeneratorRuntime=module.exports;function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return {type:"normal",arg:fn.call(obj,arg)};}catch(err){return {type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg);};});}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false;};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction";}}genFun.prototype=Object.create(Gp);return genFun;};runtime.awrap=function(arg){return {__await:arg};};function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&typeof value==="object"&&hasOwn.call(value,"__await")){return Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return Promise.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};runtime.AsyncIterator=AsyncIterator;runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return {value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;context.method="throw";context.arg=record.arg;}}};}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){context.delegate=null;if(context.method==="throw"){if(delegate.iterator.return){context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{return info;}context.delegate=null;return ContinueSentinel;}defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return "[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}return {next:doneResult};}runtime.values=values;function doneResult(){return {value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){context.method="next";context.arg=undefined;}return !!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){this.arg=undefined;}return ContinueSentinel;}};}(function(){return this||typeof self==="object"&&self;}()||Function("return this")());
});

var g=function(){return this||typeof self==="object"&&self;}()||Function("return this")();var hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0;var oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=undefined;var runtimeModule=runtime;if(hadRuntime){g.regeneratorRuntime=oldRuntime;}else{try{delete g.regeneratorRuntime;}catch(e){g.regeneratorRuntime=undefined;}}

var regenerator=runtimeModule;

var HASH_UNDEFINED$2='__lodash_hash_undefined__';function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED$2);return this;}var _setCacheAdd=setCacheAdd;

function setCacheHas(value){return this.__data__.has(value);}var _setCacheHas=setCacheHas;

function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new _MapCache();while(++index<length){this.add(values[index]);}}SetCache.prototype.add=SetCache.prototype.push=_setCacheAdd;SetCache.prototype.has=_setCacheHas;var _SetCache=SetCache;

function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}var _arraySome=arraySome;

function cacheHas(cache,key){return cache.has(key);}var _cacheHas=cacheHas;

var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new _SetCache():undefined;stack.set(array,other);stack.set(other,array);while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}if(seen){if(!_arraySome(other,function(othValue,othIndex){if(!_cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}var _equalArrays=equalArrays;

function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}var _mapToArray=mapToArray;

function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}var _setToArray=setToArray;

var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;var boolTag$3='[object Boolean]',dateTag$3='[object Date]',errorTag$2='[object Error]',mapTag$5='[object Map]',numberTag$3='[object Number]',regexpTag$3='[object RegExp]',setTag$5='[object Set]',stringTag$4='[object String]',symbolTag$3='[object Symbol]';var arrayBufferTag$3='[object ArrayBuffer]',dataViewTag$4='[object DataView]';var symbolProto$2=_Symbol?typeof _Symbol==="function"?_Symbol.prototype:"@@prototype":undefined,symbolValueOf$1=symbolProto$2?symbolProto$2.valueOf:undefined;function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag$4:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag$3:if(object.byteLength!=other.byteLength||!equalFunc(new _Uint8Array(object),new _Uint8Array(other))){return false;}return true;case boolTag$3:case dateTag$3:case numberTag$3:return eq_1(+object,+other);case errorTag$2:return object.name==other.name&&object.message==other.message;case regexpTag$3:case stringTag$4:return object==other+'';case mapTag$5:var convert=_mapToArray;case setTag$5:var isPartial=bitmask&COMPARE_PARTIAL_FLAG$1;convert||(convert=_setToArray);if(object.size!=other.size&&!isPartial){return false;}var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG$1;stack.set(object,other);var result=_equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag$3:if(symbolValueOf$1){return symbolValueOf$1.call(object)==symbolValueOf$1.call(other);}}return false;}var _equalByTag=equalByTag;

var COMPARE_PARTIAL_FLAG$2=1;var objectProto$e=Object.prototype;var hasOwnProperty$b=objectProto$e.hasOwnProperty;function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$2,objProps=_getAllKeys(object),objLength=objProps.length,othProps=_getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty$b.call(other,key))){return false;}}var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}var _equalObjects=equalObjects;

var COMPARE_PARTIAL_FLAG$3=1;var argsTag$3='[object Arguments]',arrayTag$2='[object Array]',objectTag$4='[object Object]';var objectProto$f=Object.prototype;var hasOwnProperty$c=objectProto$f.hasOwnProperty;function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray_1(object),othIsArr=isArray_1(other),objTag=objIsArr?arrayTag$2:_getTag(object),othTag=othIsArr?arrayTag$2:_getTag(other);objTag=objTag==argsTag$3?objectTag$4:objTag;othTag=othTag==argsTag$3?objectTag$4:othTag;var objIsObj=objTag==objectTag$4,othIsObj=othTag==objectTag$4,isSameTag=objTag==othTag;if(isSameTag&&isBuffer_1(object)){if(!isBuffer_1(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new _Stack());return objIsArr||isTypedArray_1(object)?_equalArrays(object,other,bitmask,customizer,equalFunc,stack):_equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG$3)){var objIsWrapped=objIsObj&&hasOwnProperty$c.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty$c.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new _Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new _Stack());return _equalObjects(object,other,bitmask,customizer,equalFunc,stack);}var _baseIsEqualDeep=baseIsEqualDeep;

function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike_1(value)&&!isObjectLike_1(other)){return value!==value&&other!==other;}return _baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}var _baseIsEqual=baseIsEqual;

function isEqual(value,other){return _baseIsEqual(value,other);}var isEqual_1=isEqual;

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\node_modules\\react-native-vector-icons\\lib\\tab-bar-item-ios.js";var ICON_PROP_NAMES=['iconName','iconSize','iconColor'];var SELECTED_ICON_PROP_NAMES=ICON_PROP_NAMES.concat(['selectedIconName','selectedIconColor']);var arePropsEqual=function arePropsEqual(keys){return function(prevProps,nextProps){return isEqual_1(pick_1(prevProps,keys),pick_1(nextProps,keys));};};var areIconPropsEqual=arePropsEqual(ICON_PROP_NAMES);var areSelectedIconPropsEqual=arePropsEqual(SELECTED_ICON_PROP_NAMES);function createTabBarItemIOSComponent(IconNamePropType,getImageSource){var _class,_temp;return _temp=_class=function(_PureComponent){inherits(TabBarItemIOS,_PureComponent);function TabBarItemIOS(){var _getPrototypeOf2;var _this;classCallCheck(this,TabBarItemIOS);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(TabBarItemIOS)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={icon:undefined,selectedIcon:undefined};return _this;}createClass(TabBarItemIOS,[{key:"componentDidMount",value:function componentDidMount(){this.updateIconSource();this.updateSelectedIconSource();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(!areIconPropsEqual(prevProps,this.props)){this.updateIconSource();}if(!areSelectedIconPropsEqual(prevProps,this.props)){this.updateSelectedIconSource();}}},{key:"updateIconSource",value:function updateIconSource(){var _this$props,iconName,iconSize,iconColor,icon;return regenerator.async(function updateIconSource$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=this.props,iconName=_this$props.iconName,iconSize=_this$props.iconSize,iconColor=_this$props.iconColor;if(!iconName){_context.next=8;break;}_context.next=4;return regenerator.awrap(getImageSource(iconName,iconSize,iconColor));case 4:icon=_context.sent;this.setState({icon:icon});_context.next=9;break;case 8:if(this.state.icon){this.setState({icon:undefined});}case 9:case"end":return _context.stop();}}},null,this);}},{key:"updateSelectedIconSource",value:function updateSelectedIconSource(){var _this$props2,iconName,iconColor,iconSize,selectedIconName,selectedIconColor,selectedIcon;return regenerator.async(function updateSelectedIconSource$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_this$props2=this.props,iconName=_this$props2.iconName,iconColor=_this$props2.iconColor,iconSize=_this$props2.iconSize,selectedIconName=_this$props2.selectedIconName,selectedIconColor=_this$props2.selectedIconColor;if(!(selectedIconName||selectedIconColor)){_context2.next=8;break;}_context2.next=4;return regenerator.awrap(getImageSource(selectedIconName||iconName,iconSize,selectedIconColor||iconColor));case 4:selectedIcon=_context2.sent;this.setState({selectedIcon:selectedIcon});_context2.next=9;break;case 8:if(this.state.selectedIcon){this.setState({selectedIcon:undefined});}case 9:case"end":return _context2.stop();}}},null,this);}},{key:"render",value:function render(){return React__default.createElement(reactNative.TabBarIOS.Item,_extends_1$1({},this.state,this.props,{__source:{fileName:_jsxFileName$1,lineNumber:93}}));}}]);return TabBarItemIOS;}(React.PureComponent),_class.propTypes={iconName:IconNamePropType.isRequired,selectedIconName:IconNamePropType,iconSize:PropTypes.number,iconColor:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),selectedIconColor:PropTypes.oneOfType([PropTypes.string,PropTypes.number])},_class.defaultProps={iconSize:30},_temp;}

function _defineProperty$2(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var defineProperty$2=_defineProperty$2;

function _objectSpread$1(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){defineProperty$2(target,key,source[key]);});}return target;}var objectSpread$1=_objectSpread$1;

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\node_modules\\react-native-vector-icons\\lib\\toolbar-android.js";var ICON_PROP_NAMES$1=['iconSize','iconColor','titleColor'];var LOGO_ICON_PROP_NAMES=ICON_PROP_NAMES$1.concat(['logoName']);var NAV_ICON_PROP_NAMES=ICON_PROP_NAMES$1.concat(['navIconName']);var OVERFLOW_ICON_PROP_NAMES=ICON_PROP_NAMES$1.concat(['overflowIconName']);var ACTIONS_PROP_NAMES=ICON_PROP_NAMES$1.concat(['actions']);var arePropsEqual$1=function arePropsEqual(keys){return function(prevProps,nextProps){return isEqual_1(pick_1(prevProps,keys),pick_1(nextProps,keys));};};var areLogoIconPropsEqual=arePropsEqual$1(LOGO_ICON_PROP_NAMES);var areNavIconPropsEqual=arePropsEqual$1(NAV_ICON_PROP_NAMES);var areOverflowIconPropsEqual=arePropsEqual$1(OVERFLOW_ICON_PROP_NAMES);var areActionPropsEqual=arePropsEqual$1(ACTIONS_PROP_NAMES);function createToolbarAndroidComponent(IconNamePropType,getImageSource){var _class,_temp;return _temp=_class=function(_PureComponent){inherits(IconToolbarAndroid,_PureComponent);function IconToolbarAndroid(){var _getPrototypeOf2;var _this;classCallCheck(this,IconToolbarAndroid);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(IconToolbarAndroid)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={logo:undefined,navIcon:undefined,overflowIcon:undefined,actions:undefined};return _this;}createClass(IconToolbarAndroid,[{key:"componentDidMount",value:function componentDidMount(){this.updateLogoIconSource();this.updateNavIconSource();this.updateOverflowIconSource();this.updateActionIconSources();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(!areLogoIconPropsEqual(prevProps,this.props)){this.updateLogoIconSource();}if(!areNavIconPropsEqual(prevProps,this.props)){this.updateNavIconSource();}if(!areOverflowIconPropsEqual(prevProps,this.props)){this.updateOverflowIconSource();}if(!areActionPropsEqual(prevProps,this.props)){this.updateActionIconSources();}}},{key:"updateLogoIconSource",value:function updateLogoIconSource(){var _this$props,logoName,iconSize,iconColor,titleColor,logo;return regenerator.async(function updateLogoIconSource$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=this.props,logoName=_this$props.logoName,iconSize=_this$props.iconSize,iconColor=_this$props.iconColor,titleColor=_this$props.titleColor;if(!logoName){_context.next=8;break;}_context.next=4;return regenerator.awrap(getImageSource(logoName,iconSize,iconColor||titleColor));case 4:logo=_context.sent;this.setState({logo:logo});_context.next=9;break;case 8:if(this.state.logo){this.setState({logo:undefined});}case 9:case"end":return _context.stop();}}},null,this);}},{key:"updateNavIconSource",value:function updateNavIconSource(){var _this$props2,navIconName,iconSize,iconColor,titleColor,navIcon;return regenerator.async(function updateNavIconSource$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_this$props2=this.props,navIconName=_this$props2.navIconName,iconSize=_this$props2.iconSize,iconColor=_this$props2.iconColor,titleColor=_this$props2.titleColor;if(!navIconName){_context2.next=8;break;}_context2.next=4;return regenerator.awrap(getImageSource(navIconName,iconSize,iconColor||titleColor));case 4:navIcon=_context2.sent;this.setState({navIcon:navIcon});_context2.next=9;break;case 8:if(this.state.navIcon){this.setState({navIcon:undefined});}case 9:case"end":return _context2.stop();}}},null,this);}},{key:"updateOverflowIconSource",value:function updateOverflowIconSource(){var _this$props3,overflowIconName,iconSize,iconColor,titleColor,overflowIcon;return regenerator.async(function updateOverflowIconSource$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this$props3=this.props,overflowIconName=_this$props3.overflowIconName,iconSize=_this$props3.iconSize,iconColor=_this$props3.iconColor,titleColor=_this$props3.titleColor;if(!overflowIconName){_context3.next=8;break;}_context3.next=4;return regenerator.awrap(getImageSource(overflowIconName,iconSize,iconColor||titleColor));case 4:overflowIcon=_context3.sent;this.setState({overflowIcon:overflowIcon});_context3.next=9;break;case 8:if(this.state.overflowIcon){this.setState({overflowIcon:undefined});}case 9:case"end":return _context3.stop();}}},null,this);}},{key:"updateActionIconSources",value:function updateActionIconSources(){var _this$props4,actions,iconSize,iconColor,titleColor,updatedActions;return regenerator.async(function updateActionIconSources$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_this$props4=this.props,actions=_this$props4.actions,iconSize=_this$props4.iconSize,iconColor=_this$props4.iconColor,titleColor=_this$props4.titleColor;_context4.next=3;return regenerator.awrap(Promise.all((actions||[]).map(function(action){if(action.iconName){return getImageSource(action.iconName,action.iconSize||iconSize,action.iconColor||iconColor||titleColor).then(function(icon){return objectSpread$1({},action,{icon:icon});});}return Promise.resolve(action);})));case 3:updatedActions=_context4.sent;this.setState({actions:updatedActions});case 5:case"end":return _context4.stop();}}},null,this);}},{key:"render",value:function render(){return React__default.createElement(reactNative.ToolbarAndroid,_extends_1$1({},this.props,this.state,{__source:{fileName:_jsxFileName$2,lineNumber:142}}));}}]);return IconToolbarAndroid;}(React.PureComponent),_class.propTypes={logoName:IconNamePropType,navIconName:IconNamePropType,overflowIconName:IconNamePropType,actions:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string.isRequired,iconName:IconNamePropType,iconSize:PropTypes.number,iconColor:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),show:PropTypes.oneOf(['always','ifRoom','never']),showWithText:PropTypes.bool})),iconSize:PropTypes.number,iconColor:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),titleColor:PropTypes.oneOfType([PropTypes.string,PropTypes.number])},_class.defaultProps={iconSize:24},_temp;}

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\node_modules\\react-native-vector-icons\\lib\\create-icon-set.js";var NativeIconAPI$1=reactNative.NativeModules.RNVectorIconsManager||reactNative.NativeModules.RNVectorIconsModule;var DEFAULT_ICON_SIZE=12;var DEFAULT_ICON_COLOR='black';function createIconSet(glyphMap,fontFamily,fontFile,fontStyle){var fontBasename=fontFile?fontFile.replace(/\.(otf|ttf)$/,''):fontFamily;var fontReference=reactNative.Platform.select({windows:"Assets/"+fontFile+"#"+fontFamily,android:fontBasename,web:fontBasename,default:fontFamily});var IconNamePropType=PropTypes.oneOf(Object.keys(glyphMap));var Icon=function(_PureComponent){inherits(Icon,_PureComponent);function Icon(){var _getPrototypeOf2;var _this;classCallCheck(this,Icon);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Icon)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.root=null;_this.handleRef=function(ref){_this.root=ref;};return _this;}createClass(Icon,[{key:"setNativeProps",value:function setNativeProps(nativeProps){if(this.root){this.root.setNativeProps(nativeProps);}}},{key:"render",value:function render(){var _this$props=this.props,name=_this$props.name,size=_this$props.size,color=_this$props.color,style=_this$props.style,children=_this$props.children,props=objectWithoutProperties$1(_this$props,["name","size","color","style","children"]);var glyph=name?glyphMap[name]||'?':'';if(typeof glyph==='number'){glyph=String.fromCharCode(glyph);}var styleDefaults={fontSize:size,color:color};var styleOverrides={fontFamily:fontReference,fontWeight:'normal',fontStyle:'normal'};props.style=[styleDefaults,style,styleOverrides,fontStyle||{}];props.ref=this.handleRef;return React__default.createElement(reactNative.Text,_extends_1$1({},props,{__source:{fileName:_jsxFileName$3,lineNumber:92}}),glyph,children);}}]);return Icon;}(React.PureComponent);Icon.propTypes={allowFontScaling:PropTypes.bool,name:IconNamePropType,size:PropTypes.number,color:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),children:PropTypes.node,style:PropTypes.any};Icon.defaultProps={size:DEFAULT_ICON_SIZE,allowFontScaling:false};var imageSourceCache={};function getImageSource(name){var size=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_ICON_SIZE;var color=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_ICON_COLOR;ensureNativeModuleAvailable();var glyph=glyphMap[name]||'?';if(typeof glyph==='number'){glyph=String.fromCharCode(glyph);}var processedColor=reactNative.processColor(color);var cacheKey=glyph+":"+size+":"+processedColor;var scale=reactNative.PixelRatio.get();return new Promise(function(resolve,reject){var cached=imageSourceCache[cacheKey];if(typeof cached!=='undefined'){if(!cached||cached instanceof Error){reject(cached);}else{resolve({uri:cached,scale:scale});}}else{NativeIconAPI$1.getImageForFont(fontReference,glyph,size,processedColor,function(err,image){var error=typeof err==='string'?new Error(err):err;imageSourceCache[cacheKey]=image||error||false;if(!error&&image){resolve({uri:image,scale:scale});}else{reject(error);}});}});}function loadFont(){var file=arguments.length>0&&arguments[0]!==undefined?arguments[0]:fontFile;if(reactNative.Platform.OS==='ios'){ensureNativeModuleAvailable();if(!file){return Promise.reject(new Error('Unable to load font, because no file was specified. '));}return NativeIconAPI$1.loadFontWithFileName.apply(NativeIconAPI$1,toConsumableArray$1(file.split('.')));}return Promise.resolve();}function hasIcon(name){return Object.prototype.hasOwnProperty.call(glyphMap,name);}function getRawGlyphMap(){return glyphMap;}function getFontFamily(){return fontReference;}Icon.Button=createIconButtonComponent(Icon);Icon.TabBarItem=createTabBarItemIOSComponent(IconNamePropType,getImageSource);Icon.TabBarItemIOS=Icon.TabBarItem;Icon.ToolbarAndroid=createToolbarAndroidComponent(IconNamePropType,getImageSource);Icon.getImageSource=getImageSource;Icon.loadFont=loadFont;Icon.hasIcon=hasIcon;Icon.getRawGlyphMap=getRawGlyphMap;Icon.getFontFamily=getFontFamily;return Icon;}

var glass = 61440;
var music = 61441;
var search = 61442;
var heart = 61444;
var star = 61445;
var user = 61447;
var film = 61448;
var th = 61450;
var check = 61452;
var remove = 61453;
var close = 61453;
var times = 61453;
var signal = 61458;
var gear = 61459;
var cog = 61459;
var home = 61461;
var road = 61464;
var download = 61465;
var inbox = 61468;
var repeat = 61470;
var refresh = 61473;
var lock = 61475;
var flag = 61476;
var headphones = 61477;
var qrcode = 61481;
var barcode = 61482;
var tag = 61483;
var tags = 61484;
var book = 61485;
var bookmark = 61486;
var print = 61487;
var camera = 61488;
var font = 61489;
var bold = 61490;
var italic = 61491;
var list = 61498;
var dedent = 61499;
var outdent = 61499;
var indent = 61500;
var photo = 61502;
var image = 61502;
var pencil = 61504;
var adjust = 61506;
var tint = 61507;
var edit = 61508;
var arrows = 61511;
var backward = 61514;
var play = 61515;
var pause = 61516;
var stop = 61517;
var forward = 61518;
var eject = 61522;
var crosshairs = 61531;
var ban = 61534;
var share = 61540;
var expand = 61541;
var compress = 61542;
var plus = 61543;
var minus = 61544;
var asterisk = 61545;
var gift = 61547;
var leaf = 61548;
var fire = 61549;
var eye = 61550;
var warning = 61553;
var plane = 61554;
var calendar = 61555;
var random = 61556;
var comment = 61557;
var magnet = 61558;
var retweet = 61561;
var folder = 61563;
var key = 61572;
var gears = 61573;
var cogs = 61573;
var comments = 61574;
var trophy = 61585;
var upload = 61587;
var phone = 61589;
var twitter = 61593;
var facebook = 61594;
var github = 61595;
var unlock = 61596;
var feed = 61598;
var rss = 61598;
var bullhorn = 61601;
var bell = 61683;
var certificate = 61603;
var globe = 61612;
var wrench = 61613;
var tasks = 61614;
var filter = 61616;
var briefcase = 61617;
var group = 61632;
var users = 61632;
var chain = 61633;
var link = 61633;
var cloud = 61634;
var flask = 61635;
var cut = 61636;
var scissors = 61636;
var copy = 61637;
var paperclip = 61638;
var save = 61639;
var square = 61640;
var navicon = 61641;
var reorder = 61641;
var bars = 61641;
var strikethrough = 61644;
var underline = 61645;
var table = 61646;
var magic = 61648;
var truck = 61649;
var pinterest = 61650;
var money = 61654;
var columns = 61659;
var unsorted = 61660;
var sort = 61660;
var envelope = 61664;
var linkedin = 61665;
var undo = 61666;
var legal = 61667;
var gavel = 61667;
var dashboard = 61668;
var tachometer = 61668;
var flash = 61671;
var bolt = 61671;
var sitemap = 61672;
var umbrella = 61673;
var paste = 61674;
var clipboard = 61674;
var exchange = 61676;
var stethoscope = 61681;
var suitcase = 61682;
var coffee = 61684;
var cutlery = 61685;
var ambulance = 61689;
var medkit = 61690;
var beer = 61692;
var desktop = 61704;
var laptop = 61705;
var tablet = 61706;
var mobile = 61707;
var spinner = 61712;
var circle = 61713;
var reply = 61714;
var gamepad = 61723;
var terminal = 61728;
var code = 61729;
var crop = 61733;
var unlink = 61735;
var question = 61736;
var info = 61737;
var exclamation = 61738;
var superscript = 61739;
var subscript = 61740;
var eraser = 61741;
var microphone = 61744;
var shield = 61746;
var rocket = 61749;
var maxcdn = 61750;
var html5 = 61755;
var css3 = 61756;
var anchor = 61757;
var bullseye = 61760;
var ticket = 61765;
var compass = 61774;
var euro = 61779;
var eur = 61779;
var gbp = 61780;
var dollar = 61781;
var usd = 61781;
var rupee = 61782;
var inr = 61782;
var cny = 61783;
var rmb = 61783;
var yen = 61783;
var jpy = 61783;
var ruble = 61784;
var rouble = 61784;
var rub = 61784;
var won = 61785;
var krw = 61785;
var bitcoin = 61786;
var btc = 61786;
var file = 61787;
var youtube = 61799;
var xing = 61800;
var dropbox = 61803;
var instagram = 61805;
var flickr = 61806;
var adn = 61808;
var bitbucket = 61809;
var tumblr = 61811;
var apple = 61817;
var windows = 61818;
var android = 61819;
var linux = 61820;
var dribbble = 61821;
var skype = 61822;
var foursquare = 61824;
var trello = 61825;
var female = 61826;
var male = 61827;
var gittip = 61828;
var gratipay = 61828;
var archive = 61831;
var bug = 61832;
var vk = 61833;
var weibo = 61834;
var renren = 61835;
var pagelines = 61836;
var wheelchair = 61843;
var slack = 61848;
var wordpress = 61850;
var openid = 61851;
var institution = 61852;
var bank = 61852;
var university = 61852;
var yahoo = 61854;
var google = 61856;
var reddit = 61857;
var stumbleupon = 61860;
var delicious = 61861;
var digg = 61862;
var drupal = 61865;
var joomla = 61866;
var language = 61867;
var fax = 61868;
var building = 61869;
var child = 61870;
var paw = 61872;
var spoon = 61873;
var cube = 61874;
var cubes = 61875;
var behance = 61876;
var steam = 61878;
var recycle = 61880;
var automobile = 61881;
var car = 61881;
var cab = 61882;
var taxi = 61882;
var tree = 61883;
var spotify = 61884;
var deviantart = 61885;
var soundcloud = 61886;
var database = 61888;
var vine = 61898;
var codepen = 61899;
var jsfiddle = 61900;
var support = 61901;
var ra = 61904;
var resistance = 61904;
var rebel = 61904;
var ge = 61905;
var empire = 61905;
var git = 61907;
var qq = 61910;
var wechat = 61911;
var weixin = 61911;
var send = 61912;
var history = 61914;
var header = 61916;
var paragraph = 61917;
var sliders = 61918;
var bomb = 61922;
var tty = 61924;
var binoculars = 61925;
var plug = 61926;
var slideshare = 61927;
var twitch = 61928;
var yelp = 61929;
var wifi = 61931;
var calculator = 61932;
var paypal = 61933;
var trash = 61944;
var copyright = 61945;
var at = 61946;
var eyedropper = 61947;
var lastfm = 61954;
var bicycle = 61958;
var bus = 61959;
var ioxhost = 61960;
var angellist = 61961;
var cc = 61962;
var shekel = 61963;
var sheqel = 61963;
var ils = 61963;
var meanpath = 61964;
var buysellads = 61965;
var connectdevelop = 61966;
var dashcube = 61968;
var forumbee = 61969;
var leanpub = 61970;
var sellsy = 61971;
var shirtsinbulk = 61972;
var simplybuilt = 61973;
var skyatlas = 61974;
var diamond = 61977;
var ship = 61978;
var motorcycle = 61980;
var heartbeat = 61982;
var venus = 61985;
var mars = 61986;
var mercury = 61987;
var intersex = 61988;
var transgender = 61988;
var neuter = 61996;
var genderless = 61997;
var whatsapp = 62002;
var server = 62003;
var hotel = 62006;
var bed = 62006;
var viacoin = 62007;
var train = 62008;
var subway = 62009;
var medium = 62010;
var yc = 62011;
var opencart = 62013;
var expeditedssl = 62014;
var battery = 62016;
var clone = 62029;
var hourglass = 62036;
var trademark = 62044;
var registered = 62045;
var gg = 62048;
var tripadvisor = 62050;
var odnoklassniki = 62051;
var safari = 62055;
var chrome = 62056;
var firefox = 62057;
var opera = 62058;
var tv = 62060;
var television = 62060;
var contao = 62061;
var amazon = 62064;
var industry = 62069;
var map = 62073;
var commenting = 62074;
var houzz = 62076;
var vimeo = 62077;
var fonticons = 62080;
var edge = 62082;
var codiepie = 62084;
var modx = 62085;
var usb = 62087;
var mixcloud = 62089;
var scribd = 62090;
var hashtag = 62098;
var bluetooth = 62099;
var percent = 62101;
var gitlab = 62102;
var wpbeginner = 62103;
var wpforms = 62104;
var envira = 62105;
var blind = 62109;
var braille = 62113;
var deafness = 62116;
var deaf = 62116;
var glide = 62117;
var signing = 62119;
var viadeo = 62121;
var snapchat = 62123;
var yoast = 62129;
var themeisle = 62130;
var fa = 62132;
var linode = 62136;
var vcard = 62139;
var quora = 62148;
var telegram = 62150;
var thermometer = 62151;
var shower = 62156;
var bathtub = 62157;
var s15 = 62157;
var bath = 62157;
var podcast = 62158;
var bandcamp = 62165;
var grav = 62166;
var etsy = 62167;
var imdb = 62168;
var ravelry = 62169;
var eercast = 62170;
var microchip = 62171;
var superpowers = 62173;
var wpexplorer = 62174;
var meetup = 62176;
var glyphMap = {
	glass: glass,
	music: music,
	search: search,
	"envelope-o": 61443,
	heart: heart,
	star: star,
	"star-o": 61446,
	user: user,
	film: film,
	"th-large": 61449,
	th: th,
	"th-list": 61451,
	check: check,
	remove: remove,
	close: close,
	times: times,
	"search-plus": 61454,
	"search-minus": 61456,
	"power-off": 61457,
	signal: signal,
	gear: gear,
	cog: cog,
	"trash-o": 61460,
	home: home,
	"file-o": 61462,
	"clock-o": 61463,
	road: road,
	download: download,
	"arrow-circle-o-down": 61466,
	"arrow-circle-o-up": 61467,
	inbox: inbox,
	"play-circle-o": 61469,
	"rotate-right": 61470,
	repeat: repeat,
	refresh: refresh,
	"list-alt": 61474,
	lock: lock,
	flag: flag,
	headphones: headphones,
	"volume-off": 61478,
	"volume-down": 61479,
	"volume-up": 61480,
	qrcode: qrcode,
	barcode: barcode,
	tag: tag,
	tags: tags,
	book: book,
	bookmark: bookmark,
	print: print,
	camera: camera,
	font: font,
	bold: bold,
	italic: italic,
	"text-height": 61492,
	"text-width": 61493,
	"align-left": 61494,
	"align-center": 61495,
	"align-right": 61496,
	"align-justify": 61497,
	list: list,
	dedent: dedent,
	outdent: outdent,
	indent: indent,
	"video-camera": 61501,
	photo: photo,
	image: image,
	"picture-o": 61502,
	pencil: pencil,
	"map-marker": 61505,
	adjust: adjust,
	tint: tint,
	edit: edit,
	"pencil-square-o": 61508,
	"share-square-o": 61509,
	"check-square-o": 61510,
	arrows: arrows,
	"step-backward": 61512,
	"fast-backward": 61513,
	backward: backward,
	play: play,
	pause: pause,
	stop: stop,
	forward: forward,
	"fast-forward": 61520,
	"step-forward": 61521,
	eject: eject,
	"chevron-left": 61523,
	"chevron-right": 61524,
	"plus-circle": 61525,
	"minus-circle": 61526,
	"times-circle": 61527,
	"check-circle": 61528,
	"question-circle": 61529,
	"info-circle": 61530,
	crosshairs: crosshairs,
	"times-circle-o": 61532,
	"check-circle-o": 61533,
	ban: ban,
	"arrow-left": 61536,
	"arrow-right": 61537,
	"arrow-up": 61538,
	"arrow-down": 61539,
	"mail-forward": 61540,
	share: share,
	expand: expand,
	compress: compress,
	plus: plus,
	minus: minus,
	asterisk: asterisk,
	"exclamation-circle": 61546,
	gift: gift,
	leaf: leaf,
	fire: fire,
	eye: eye,
	"eye-slash": 61552,
	warning: warning,
	"exclamation-triangle": 61553,
	plane: plane,
	calendar: calendar,
	random: random,
	comment: comment,
	magnet: magnet,
	"chevron-up": 61559,
	"chevron-down": 61560,
	retweet: retweet,
	"shopping-cart": 61562,
	folder: folder,
	"folder-open": 61564,
	"arrows-v": 61565,
	"arrows-h": 61566,
	"bar-chart-o": 61568,
	"bar-chart": 61568,
	"twitter-square": 61569,
	"facebook-square": 61570,
	"camera-retro": 61571,
	key: key,
	gears: gears,
	cogs: cogs,
	comments: comments,
	"thumbs-o-up": 61575,
	"thumbs-o-down": 61576,
	"star-half": 61577,
	"heart-o": 61578,
	"sign-out": 61579,
	"linkedin-square": 61580,
	"thumb-tack": 61581,
	"external-link": 61582,
	"sign-in": 61584,
	trophy: trophy,
	"github-square": 61586,
	upload: upload,
	"lemon-o": 61588,
	phone: phone,
	"square-o": 61590,
	"bookmark-o": 61591,
	"phone-square": 61592,
	twitter: twitter,
	"facebook-f": 61594,
	facebook: facebook,
	github: github,
	unlock: unlock,
	"credit-card": 61597,
	feed: feed,
	rss: rss,
	"hdd-o": 61600,
	bullhorn: bullhorn,
	bell: bell,
	certificate: certificate,
	"hand-o-right": 61604,
	"hand-o-left": 61605,
	"hand-o-up": 61606,
	"hand-o-down": 61607,
	"arrow-circle-left": 61608,
	"arrow-circle-right": 61609,
	"arrow-circle-up": 61610,
	"arrow-circle-down": 61611,
	globe: globe,
	wrench: wrench,
	tasks: tasks,
	filter: filter,
	briefcase: briefcase,
	"arrows-alt": 61618,
	group: group,
	users: users,
	chain: chain,
	link: link,
	cloud: cloud,
	flask: flask,
	cut: cut,
	scissors: scissors,
	copy: copy,
	"files-o": 61637,
	paperclip: paperclip,
	save: save,
	"floppy-o": 61639,
	square: square,
	navicon: navicon,
	reorder: reorder,
	bars: bars,
	"list-ul": 61642,
	"list-ol": 61643,
	strikethrough: strikethrough,
	underline: underline,
	table: table,
	magic: magic,
	truck: truck,
	pinterest: pinterest,
	"pinterest-square": 61651,
	"google-plus-square": 61652,
	"google-plus": 61653,
	money: money,
	"caret-down": 61655,
	"caret-up": 61656,
	"caret-left": 61657,
	"caret-right": 61658,
	columns: columns,
	unsorted: unsorted,
	sort: sort,
	"sort-down": 61661,
	"sort-desc": 61661,
	"sort-up": 61662,
	"sort-asc": 61662,
	envelope: envelope,
	linkedin: linkedin,
	"rotate-left": 61666,
	undo: undo,
	legal: legal,
	gavel: gavel,
	dashboard: dashboard,
	tachometer: tachometer,
	"comment-o": 61669,
	"comments-o": 61670,
	flash: flash,
	bolt: bolt,
	sitemap: sitemap,
	umbrella: umbrella,
	paste: paste,
	clipboard: clipboard,
	"lightbulb-o": 61675,
	exchange: exchange,
	"cloud-download": 61677,
	"cloud-upload": 61678,
	"user-md": 61680,
	stethoscope: stethoscope,
	suitcase: suitcase,
	"bell-o": 61602,
	coffee: coffee,
	cutlery: cutlery,
	"file-text-o": 61686,
	"building-o": 61687,
	"hospital-o": 61688,
	ambulance: ambulance,
	medkit: medkit,
	"fighter-jet": 61691,
	beer: beer,
	"h-square": 61693,
	"plus-square": 61694,
	"angle-double-left": 61696,
	"angle-double-right": 61697,
	"angle-double-up": 61698,
	"angle-double-down": 61699,
	"angle-left": 61700,
	"angle-right": 61701,
	"angle-up": 61702,
	"angle-down": 61703,
	desktop: desktop,
	laptop: laptop,
	tablet: tablet,
	"mobile-phone": 61707,
	mobile: mobile,
	"circle-o": 61708,
	"quote-left": 61709,
	"quote-right": 61710,
	spinner: spinner,
	circle: circle,
	"mail-reply": 61714,
	reply: reply,
	"github-alt": 61715,
	"folder-o": 61716,
	"folder-open-o": 61717,
	"smile-o": 61720,
	"frown-o": 61721,
	"meh-o": 61722,
	gamepad: gamepad,
	"keyboard-o": 61724,
	"flag-o": 61725,
	"flag-checkered": 61726,
	terminal: terminal,
	code: code,
	"mail-reply-all": 61730,
	"reply-all": 61730,
	"star-half-empty": 61731,
	"star-half-full": 61731,
	"star-half-o": 61731,
	"location-arrow": 61732,
	crop: crop,
	"code-fork": 61734,
	unlink: unlink,
	"chain-broken": 61735,
	question: question,
	info: info,
	exclamation: exclamation,
	superscript: superscript,
	subscript: subscript,
	eraser: eraser,
	"puzzle-piece": 61742,
	microphone: microphone,
	"microphone-slash": 61745,
	shield: shield,
	"calendar-o": 61747,
	"fire-extinguisher": 61748,
	rocket: rocket,
	maxcdn: maxcdn,
	"chevron-circle-left": 61751,
	"chevron-circle-right": 61752,
	"chevron-circle-up": 61753,
	"chevron-circle-down": 61754,
	html5: html5,
	css3: css3,
	anchor: anchor,
	"unlock-alt": 61758,
	bullseye: bullseye,
	"ellipsis-h": 61761,
	"ellipsis-v": 61762,
	"rss-square": 61763,
	"play-circle": 61764,
	ticket: ticket,
	"minus-square": 61766,
	"minus-square-o": 61767,
	"level-up": 61768,
	"level-down": 61769,
	"check-square": 61770,
	"pencil-square": 61771,
	"external-link-square": 61772,
	"share-square": 61773,
	compass: compass,
	"toggle-down": 61776,
	"caret-square-o-down": 61776,
	"toggle-up": 61777,
	"caret-square-o-up": 61777,
	"toggle-right": 61778,
	"caret-square-o-right": 61778,
	euro: euro,
	eur: eur,
	gbp: gbp,
	dollar: dollar,
	usd: usd,
	rupee: rupee,
	inr: inr,
	cny: cny,
	rmb: rmb,
	yen: yen,
	jpy: jpy,
	ruble: ruble,
	rouble: rouble,
	rub: rub,
	won: won,
	krw: krw,
	bitcoin: bitcoin,
	btc: btc,
	file: file,
	"file-text": 61788,
	"sort-alpha-asc": 61789,
	"sort-alpha-desc": 61790,
	"sort-amount-asc": 61792,
	"sort-amount-desc": 61793,
	"sort-numeric-asc": 61794,
	"sort-numeric-desc": 61795,
	"thumbs-up": 61796,
	"thumbs-down": 61797,
	"youtube-square": 61798,
	youtube: youtube,
	xing: xing,
	"xing-square": 61801,
	"youtube-play": 61802,
	dropbox: dropbox,
	"stack-overflow": 61804,
	instagram: instagram,
	flickr: flickr,
	adn: adn,
	bitbucket: bitbucket,
	"bitbucket-square": 61810,
	tumblr: tumblr,
	"tumblr-square": 61812,
	"long-arrow-down": 61813,
	"long-arrow-up": 61814,
	"long-arrow-left": 61815,
	"long-arrow-right": 61816,
	apple: apple,
	windows: windows,
	android: android,
	linux: linux,
	dribbble: dribbble,
	skype: skype,
	foursquare: foursquare,
	trello: trello,
	female: female,
	male: male,
	gittip: gittip,
	gratipay: gratipay,
	"sun-o": 61829,
	"moon-o": 61830,
	archive: archive,
	bug: bug,
	vk: vk,
	weibo: weibo,
	renren: renren,
	pagelines: pagelines,
	"stack-exchange": 61837,
	"arrow-circle-o-right": 61838,
	"arrow-circle-o-left": 61840,
	"toggle-left": 61841,
	"caret-square-o-left": 61841,
	"dot-circle-o": 61842,
	wheelchair: wheelchair,
	"vimeo-square": 61844,
	"turkish-lira": 61845,
	"try": 61845,
	"plus-square-o": 61846,
	"space-shuttle": 61847,
	slack: slack,
	"envelope-square": 61849,
	wordpress: wordpress,
	openid: openid,
	institution: institution,
	bank: bank,
	university: university,
	"mortar-board": 61853,
	"graduation-cap": 61853,
	yahoo: yahoo,
	google: google,
	reddit: reddit,
	"reddit-square": 61858,
	"stumbleupon-circle": 61859,
	stumbleupon: stumbleupon,
	delicious: delicious,
	digg: digg,
	"pied-piper-pp": 61863,
	"pied-piper-alt": 61864,
	drupal: drupal,
	joomla: joomla,
	language: language,
	fax: fax,
	building: building,
	child: child,
	paw: paw,
	spoon: spoon,
	cube: cube,
	cubes: cubes,
	behance: behance,
	"behance-square": 61877,
	steam: steam,
	"steam-square": 61879,
	recycle: recycle,
	automobile: automobile,
	car: car,
	cab: cab,
	taxi: taxi,
	tree: tree,
	spotify: spotify,
	deviantart: deviantart,
	soundcloud: soundcloud,
	database: database,
	"file-pdf-o": 61889,
	"file-word-o": 61890,
	"file-excel-o": 61891,
	"file-powerpoint-o": 61892,
	"file-photo-o": 61893,
	"file-picture-o": 61893,
	"file-image-o": 61893,
	"file-zip-o": 61894,
	"file-archive-o": 61894,
	"file-sound-o": 61895,
	"file-audio-o": 61895,
	"file-movie-o": 61896,
	"file-video-o": 61896,
	"file-code-o": 61897,
	vine: vine,
	codepen: codepen,
	jsfiddle: jsfiddle,
	"life-bouy": 61901,
	"life-buoy": 61901,
	"life-saver": 61901,
	support: support,
	"life-ring": 61901,
	"circle-o-notch": 61902,
	ra: ra,
	resistance: resistance,
	rebel: rebel,
	ge: ge,
	empire: empire,
	"git-square": 61906,
	git: git,
	"y-combinator-square": 61908,
	"yc-square": 61908,
	"hacker-news": 61908,
	"tencent-weibo": 61909,
	qq: qq,
	wechat: wechat,
	weixin: weixin,
	send: send,
	"paper-plane": 61912,
	"send-o": 61913,
	"paper-plane-o": 61913,
	history: history,
	"circle-thin": 61915,
	header: header,
	paragraph: paragraph,
	sliders: sliders,
	"share-alt": 61920,
	"share-alt-square": 61921,
	bomb: bomb,
	"soccer-ball-o": 61923,
	"futbol-o": 61923,
	tty: tty,
	binoculars: binoculars,
	plug: plug,
	slideshare: slideshare,
	twitch: twitch,
	yelp: yelp,
	"newspaper-o": 61930,
	wifi: wifi,
	calculator: calculator,
	paypal: paypal,
	"google-wallet": 61934,
	"cc-visa": 61936,
	"cc-mastercard": 61937,
	"cc-discover": 61938,
	"cc-amex": 61939,
	"cc-paypal": 61940,
	"cc-stripe": 61941,
	"bell-slash": 61942,
	"bell-slash-o": 61943,
	trash: trash,
	copyright: copyright,
	at: at,
	eyedropper: eyedropper,
	"paint-brush": 61948,
	"birthday-cake": 61949,
	"area-chart": 61950,
	"pie-chart": 61952,
	"line-chart": 61953,
	lastfm: lastfm,
	"lastfm-square": 61955,
	"toggle-off": 61956,
	"toggle-on": 61957,
	bicycle: bicycle,
	bus: bus,
	ioxhost: ioxhost,
	angellist: angellist,
	cc: cc,
	shekel: shekel,
	sheqel: sheqel,
	ils: ils,
	meanpath: meanpath,
	buysellads: buysellads,
	connectdevelop: connectdevelop,
	dashcube: dashcube,
	forumbee: forumbee,
	leanpub: leanpub,
	sellsy: sellsy,
	shirtsinbulk: shirtsinbulk,
	simplybuilt: simplybuilt,
	skyatlas: skyatlas,
	"cart-plus": 61975,
	"cart-arrow-down": 61976,
	diamond: diamond,
	ship: ship,
	"user-secret": 61979,
	motorcycle: motorcycle,
	"street-view": 61981,
	heartbeat: heartbeat,
	venus: venus,
	mars: mars,
	mercury: mercury,
	intersex: intersex,
	transgender: transgender,
	"transgender-alt": 61989,
	"venus-double": 61990,
	"mars-double": 61991,
	"venus-mars": 61992,
	"mars-stroke": 61993,
	"mars-stroke-v": 61994,
	"mars-stroke-h": 61995,
	neuter: neuter,
	genderless: genderless,
	"facebook-official": 62000,
	"pinterest-p": 62001,
	whatsapp: whatsapp,
	server: server,
	"user-plus": 62004,
	"user-times": 62005,
	hotel: hotel,
	bed: bed,
	viacoin: viacoin,
	train: train,
	subway: subway,
	medium: medium,
	yc: yc,
	"y-combinator": 62011,
	"optin-monster": 62012,
	opencart: opencart,
	expeditedssl: expeditedssl,
	"battery-4": 62016,
	battery: battery,
	"battery-full": 62016,
	"battery-3": 62017,
	"battery-three-quarters": 62017,
	"battery-2": 62018,
	"battery-half": 62018,
	"battery-1": 62019,
	"battery-quarter": 62019,
	"battery-0": 62020,
	"battery-empty": 62020,
	"mouse-pointer": 62021,
	"i-cursor": 62022,
	"object-group": 62023,
	"object-ungroup": 62024,
	"sticky-note": 62025,
	"sticky-note-o": 62026,
	"cc-jcb": 62027,
	"cc-diners-club": 62028,
	clone: clone,
	"balance-scale": 62030,
	"hourglass-o": 62032,
	"hourglass-1": 62033,
	"hourglass-start": 62033,
	"hourglass-2": 62034,
	"hourglass-half": 62034,
	"hourglass-3": 62035,
	"hourglass-end": 62035,
	hourglass: hourglass,
	"hand-grab-o": 62037,
	"hand-rock-o": 62037,
	"hand-stop-o": 62038,
	"hand-paper-o": 62038,
	"hand-scissors-o": 62039,
	"hand-lizard-o": 62040,
	"hand-spock-o": 62041,
	"hand-pointer-o": 62042,
	"hand-peace-o": 62043,
	trademark: trademark,
	registered: registered,
	"creative-commons": 62046,
	gg: gg,
	"gg-circle": 62049,
	tripadvisor: tripadvisor,
	odnoklassniki: odnoklassniki,
	"odnoklassniki-square": 62052,
	"get-pocket": 62053,
	"wikipedia-w": 62054,
	safari: safari,
	chrome: chrome,
	firefox: firefox,
	opera: opera,
	"internet-explorer": 62059,
	tv: tv,
	television: television,
	contao: contao,
	"500px": 62062,
	amazon: amazon,
	"calendar-plus-o": 62065,
	"calendar-minus-o": 62066,
	"calendar-times-o": 62067,
	"calendar-check-o": 62068,
	industry: industry,
	"map-pin": 62070,
	"map-signs": 62071,
	"map-o": 62072,
	map: map,
	commenting: commenting,
	"commenting-o": 62075,
	houzz: houzz,
	vimeo: vimeo,
	"black-tie": 62078,
	fonticons: fonticons,
	"reddit-alien": 62081,
	edge: edge,
	"credit-card-alt": 62083,
	codiepie: codiepie,
	modx: modx,
	"fort-awesome": 62086,
	usb: usb,
	"product-hunt": 62088,
	mixcloud: mixcloud,
	scribd: scribd,
	"pause-circle": 62091,
	"pause-circle-o": 62092,
	"stop-circle": 62093,
	"stop-circle-o": 62094,
	"shopping-bag": 62096,
	"shopping-basket": 62097,
	hashtag: hashtag,
	bluetooth: bluetooth,
	"bluetooth-b": 62100,
	percent: percent,
	gitlab: gitlab,
	wpbeginner: wpbeginner,
	wpforms: wpforms,
	envira: envira,
	"universal-access": 62106,
	"wheelchair-alt": 62107,
	"question-circle-o": 62108,
	blind: blind,
	"audio-description": 62110,
	"volume-control-phone": 62112,
	braille: braille,
	"assistive-listening-systems": 62114,
	"asl-interpreting": 62115,
	"american-sign-language-interpreting": 62115,
	deafness: deafness,
	"hard-of-hearing": 62116,
	deaf: deaf,
	glide: glide,
	"glide-g": 62118,
	signing: signing,
	"sign-language": 62119,
	"low-vision": 62120,
	viadeo: viadeo,
	"viadeo-square": 62122,
	snapchat: snapchat,
	"snapchat-ghost": 62124,
	"snapchat-square": 62125,
	"pied-piper": 62126,
	"first-order": 62128,
	yoast: yoast,
	themeisle: themeisle,
	"google-plus-circle": 62131,
	"google-plus-official": 62131,
	fa: fa,
	"font-awesome": 62132,
	"handshake-o": 62133,
	"envelope-open": 62134,
	"envelope-open-o": 62135,
	linode: linode,
	"address-book": 62137,
	"address-book-o": 62138,
	vcard: vcard,
	"address-card": 62139,
	"vcard-o": 62140,
	"address-card-o": 62140,
	"user-circle": 62141,
	"user-circle-o": 62142,
	"user-o": 62144,
	"id-badge": 62145,
	"drivers-license": 62146,
	"id-card": 62146,
	"drivers-license-o": 62147,
	"id-card-o": 62147,
	quora: quora,
	"free-code-camp": 62149,
	telegram: telegram,
	"thermometer-4": 62151,
	thermometer: thermometer,
	"thermometer-full": 62151,
	"thermometer-3": 62152,
	"thermometer-three-quarters": 62152,
	"thermometer-2": 62153,
	"thermometer-half": 62153,
	"thermometer-1": 62154,
	"thermometer-quarter": 62154,
	"thermometer-0": 62155,
	"thermometer-empty": 62155,
	shower: shower,
	bathtub: bathtub,
	s15: s15,
	bath: bath,
	podcast: podcast,
	"window-maximize": 62160,
	"window-minimize": 62161,
	"window-restore": 62162,
	"times-rectangle": 62163,
	"window-close": 62163,
	"times-rectangle-o": 62164,
	"window-close-o": 62164,
	bandcamp: bandcamp,
	grav: grav,
	etsy: etsy,
	imdb: imdb,
	ravelry: ravelry,
	eercast: eercast,
	microchip: microchip,
	"snowflake-o": 62172,
	superpowers: superpowers,
	wpexplorer: wpexplorer,
	meetup: meetup
};

var iconSet=createIconSet(glyphMap,'FontAwesome','FontAwesome.ttf');var Button=iconSet.Button;var TabBarItem=iconSet.TabBarItem;var TabBarItemIOS=iconSet.TabBarItemIOS;var ToolbarAndroid=iconSet.ToolbarAndroid;var getImageSource=iconSet.getImageSource;

var _jsxFileName$4="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\actions.js";var knownActions=new Map();var _singleValueFactory=closureValue_1(),getDefaultFontFamily=_singleValueFactory.get,setDefaultFontFamily=_singleValueFactory.set;setDefaultFontFamily(iconSet);var createAction=function createAction(type,iconName){var color=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'#FFF';var title=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'';var iconFontFamily=arguments.length>4&&arguments[4]!==undefined?arguments[4]:getDefaultFontFamily();return {type:type,iconFontFamily:iconFontFamily,iconName:iconName,color:color,title:title};};var registerAction=function registerAction(){for(var _len=arguments.length,actions=new Array(_len),_key=0;_key<_len;_key++){actions[_key]=arguments[_key];}actions.forEach(function(action){var type=action.type,iconName=action.iconName,color=action.color,title=action.title,iconFontFamily=action.iconFontFamily;if(knownActions.has(type)){throw new Error("Action with type \""+type+"\" is already registered.");}knownActions.set(type,objectSpread({},action,createAction(type,iconName,color,title,iconFontFamily)));});};var registerActions=function registerActions(actions){return registerAction.apply(void 0,toConsumableArray(actions));};var isknownAction=function isknownAction(type){return knownActions.has(type);};var getActionByType=function getActionByType(type){var action=knownActions.get(type);if(!action){throw new Error("Unknown action with type \""+type+"\".");}return action;};var getAction=function getAction(typeOrAction){var action=typeOrAction;if(typeof typeOrAction==='string'){action=getActionByType(typeOrAction);}return action;};var renderIconFromAction=function renderIconFromAction(type){var size=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined;var style=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var _getAction=getAction(type),FontFamily=_getAction.iconFontFamily,iconName=_getAction.iconName,color=_getAction.color;if(!FontFamily){throw new Error("Action with type \""+type+"\" does not define iconFontFamily.");}return React__default.createElement(FontFamily,{name:iconName,color:color,size:size,style:style,__source:{fileName:_jsxFileName$4,lineNumber:94}});};var ActionPropType=PropTypes.oneOfType([PropTypes.string,PropTypes.shape({type:PropTypes.string.isRequired})]);

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck$1 = _classCallCheck$1;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var createClass$1 = _createClass$1;

var _typeof_1$1 = createCommonjsModule(function (module) {
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

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized$1 = _assertThisInitialized$1;

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof_1$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized$1(self);
}

var possibleConstructorReturn$1 = _possibleConstructorReturn$1;

var getPrototypeOf$1 = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf$1 = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits$1(subClass, superClass) {
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
  if (superClass) setPrototypeOf$1(subClass, superClass);
}

var inherits$1 = _inherits$1;

var getButtonStyle=function getButtonStyle(_ref){var normal=_ref.normal,disabled=_ref.disabled,selected=_ref.selected,selectedDisabled=_ref.selectedDisabled;var isDisabled=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var isSelected=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(isSelected){return isDisabled?selectedDisabled:selected;}return isDisabled?disabled:normal;};

var ACTIVE_BACKGROUND_COLOR=0x272727ff;var ELEMENT_MIN_SIZE=32;var TEXT_COLOR=0xccccccff;var TEXT_ACTIVE_COLOR=0xffffffff;var TEXT_DISABLED_COLOR=0x5a5a5aff;var LIGHT_BORDER_COLOR=0x5b5b5bff;var DISABLED_BORDER_COLOR=0x404040ff;var DARK_BORDER_COLOR=0x141414ff;var PLACEMENT_LEFT='left';var PLACEMENT_RIGHT='right';var PLACEMENT_TOP='top';var PLACEMENT_BOTTOM='bottom';

var BUTTON_HIGHLIGHT_COLOR=0x666666ff;var BUTTON_SELECTED_HIGHLIGHT_COLOR=0x5b5b5bff;var highlightStyles=reactNative.StyleSheet.create({normal:{backgroundColor:0x505050ff,borderColor:LIGHT_BORDER_COLOR,borderWidth:1},disabled:{backgroundColor:0x3a3a3aff,borderColor:0x5d5d5dff,borderWidth:1},selected:{backgroundColor:0x1a1a1aff,borderColor:0x515151ff,borderWidth:1},selectedDisabled:{backgroundColor:0x232323ff,borderColor:0x3a3a3aff,borderWidth:1}});var highlightContainerStyles=reactNative.StyleSheet.create({normal:{flex:1,borderWidth:1,borderColor:DARK_BORDER_COLOR},disabled:{flex:1,borderWidth:1,borderColor:0x333333ff},selected:{flex:1,borderWidth:1,borderColor:0x1b1b1bff},selectedDisabled:{flex:1,borderWidth:1,borderColor:0x1b1b1bff}});var buttonStyles=reactNative.StyleSheet.create({button:{flex:0,height:ELEMENT_MIN_SIZE,borderRadius:2},buttonContainer:{borderRadius:2,alignItems:'center',justifyContent:'center'}});var RADIO_EXT_DIAMETER=20;var RADIO_INT_DIAMETER=14.2;var radioStyles=reactNative.StyleSheet.create({highlight:{width:ELEMENT_MIN_SIZE,height:ELEMENT_MIN_SIZE,borderRadius:ELEMENT_MIN_SIZE,alignItems:'center',justifyContent:'center'},outerCircle:{flex:0,width:RADIO_EXT_DIAMETER,height:RADIO_EXT_DIAMETER,borderRadius:RADIO_EXT_DIAMETER,margin:(ELEMENT_MIN_SIZE-RADIO_EXT_DIAMETER)/2,borderWidth:1},innerCircle:{flex:0,margin:1.6,width:RADIO_INT_DIAMETER,height:RADIO_INT_DIAMETER,borderRadius:RADIO_INT_DIAMETER,borderWidth:4}});var radioOuterStyles=reactNative.StyleSheet.create({normal:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},disabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:DISABLED_BORDER_COLOR},selected:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},selectedDisabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:DISABLED_BORDER_COLOR}});var radioInnerStyles=reactNative.StyleSheet.create({normal:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:0x1d1d1dff},disabled:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR},selected:{borderColor:0x505050ff,backgroundColor:TEXT_ACTIVE_COLOR},selectedDisabled:{borderColor:ACTIVE_BACKGROUND_COLOR,backgroundColor:TEXT_DISABLED_COLOR}});var CHECKBOX_EXT_DIAMETER=22;var CHECKBOX_INT_DIAMETER=16;var CHECKBOX_BORDER_RADIUS=2;var checkBoxStyles=reactNative.StyleSheet.create({highlight:{width:ELEMENT_MIN_SIZE,height:ELEMENT_MIN_SIZE,borderRadius:CHECKBOX_BORDER_RADIUS,alignItems:'center',justifyContent:'center'},outerCircle:{flex:0,width:CHECKBOX_EXT_DIAMETER,height:CHECKBOX_EXT_DIAMETER,borderRadius:CHECKBOX_BORDER_RADIUS,margin:(ELEMENT_MIN_SIZE-CHECKBOX_EXT_DIAMETER)/2,borderWidth:1},innerCircle:{flex:0,left:2,top:2,width:CHECKBOX_INT_DIAMETER,height:CHECKBOX_INT_DIAMETER,borderRadius:CHECKBOX_BORDER_RADIUS},icon:{width:16,height:16,left:3,top:-14}});var checkBoxOuterStyles=reactNative.StyleSheet.create({normal:{borderColor:LIGHT_BORDER_COLOR,backgroundColor:DARK_BORDER_COLOR},disabled:{borderColor:DISABLED_BORDER_COLOR,backgroundColor:ACTIVE_BACKGROUND_COLOR}});var checkBoxInnerStyles=reactNative.StyleSheet.create({normal:{backgroundColor:ACTIVE_BACKGROUND_COLOR},disabled:{backgroundColor:ACTIVE_BACKGROUND_COLOR}});var linkStyles=reactNative.StyleSheet.create({highlight:{borderRadius:2,height:ELEMENT_MIN_SIZE,alignItems:'center',justifyContent:'center'},normal:{margin:2,color:TEXT_ACTIVE_COLOR,textDecorationLine:'underline',textDecorationColor:TEXT_ACTIVE_COLOR},disabled:{margin:2,color:TEXT_DISABLED_COLOR,textDecorationLine:'underline',textDecorationColor:TEXT_DISABLED_COLOR}});

var _jsxFileName$5="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\Button.js";var Button$1=function Button(props){var selected=props.selected,disabled=props.disabled,style=props.style,contentContainerStyle=props.contentContainerStyle,children=props.children,highlightProps=objectWithoutProperties(props,["selected","disabled","style","contentContainerStyle","children"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},highlightProps,{style:[getButtonStyle(highlightStyles,disabled,selected),buttonStyles.button,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$5,lineNumber:60}}),React__default.createElement(reactNative.View,{style:[getButtonStyle(highlightContainerStyles,disabled,selected),buttonStyles.buttonContainer,contentContainerStyle],__source:{fileName:_jsxFileName$5,lineNumber:70}},children));};

var _jsxFileName$6="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\IconButton.js";var defaultIconRenderer=function defaultIconRenderer(_ref){var icon=_ref.icon;return icon;};var IconButton=function IconButton(props){var iconRenderer=props.iconRenderer;return React__default.createElement(Button$1,_extends_1({},props,{__source:{fileName:_jsxFileName$6,lineNumber:10}}),iconRenderer(props));};IconButton.propTypes={iconRenderer:PropTypes.func,icon:PropTypes.any};IconButton.defaultProps={iconRenderer:defaultIconRenderer,icon:null};

var _jsxFileName$7="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\withStyleInheritance.js";var WrapperPropTypes={style:PropTypes.any,inheritStyle:PropTypes.bool};var WrapperDefaultProps={style:undefined,inheritStyle:false};var withStyleInheritance=function withStyleInheritance(Component,defaultStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(_ref){var style=_ref.style,inheritStyle=_ref.inheritStyle,props=objectWithoutProperties(_ref,["style","inheritStyle"]);return React__default.createElement(Component,_extends_1({},props,{style:inheritStyle?style:[defaultStyle,style],__source:{fileName:_jsxFileName$7,lineNumber:16}}));};Wrapper.propTypes=WrapperPropTypes;Wrapper.defaultProps=WrapperDefaultProps;Wrapper.displayName=displayName||"withStyleInheritance("+Component.name+")";return Wrapper;};

var styles$1 = reactNative.StyleSheet.create({text:{fontSize:16,lineHeight:22,color:TEXT_COLOR},italic:{fontStyle:'italic'},strong:{fontWeight:'600'},underline:{textDecorationLine:'underline'},small:{fontSize:12,textAlignVertical:'bottom'},sub:{fontSize:10,lineHeight:10,marginBottom:-11},sup:{fontSize:10,lineHeight:10,marginTop:-11}});

var _jsxFileName$8="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Text\\Text.js";var Text=function Text(props){return React__default.createElement(reactNative.Text,_extends_1({},props,{__source:{fileName:_jsxFileName$8,lineNumber:9}}));};var Text$1 = withStyleInheritance(Text,styles$1.text,'Text');

var _jsxFileName$9="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withStyle.js";var WrapperPropTypes$1={style:PropTypes.any};var WrapperDefaultProps$1={style:undefined};var withStyle=function withStyle(Component,componentStyle){var displayName=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var Wrapper=function Wrapper(props){return React__default.createElement(Component,_extends_1({},props,{style:props.style?[componentStyle,props.style]:componentStyle,__source:{fileName:_jsxFileName$9,lineNumber:15}}));};Wrapper.propTypes=WrapperPropTypes$1;Wrapper.defaultProps=WrapperDefaultProps$1;Wrapper.displayName=displayName||"withStyle("+Component.name+")";return Wrapper;};

withStyle(Text$1,styles$1.strong,'Strong');

withStyle(Text$1,styles$1.italic,'Italic');

withStyle(Text$1,styles$1.underline,'Underline');

withStyle(Text$1,styles$1.small,'Small');

withStyle(Text$1,styles$1.sup,'Sup');

withStyle(Text$1,styles$1.sub,'Sub');

var _jsxFileName$a="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\TextButton.js";var TextButton=function TextButton(_ref){var label=_ref.label,labelStyle=_ref.labelStyle,selected=_ref.selected,disabled=_ref.disabled,props=objectWithoutProperties(_ref,["label","labelStyle","selected","disabled"]);return React__default.createElement(Button$1,_extends_1({},props,{selected:selected,disabled:disabled,__source:{fileName:_jsxFileName$a,lineNumber:18}}),React__default.createElement(Text$1,{style:[styles$2.base,getButtonStyle(styles$2,disabled,selected),labelStyle],__source:{fileName:_jsxFileName$a,lineNumber:19}},label));};TextButton.propTypes={label:PropTypes.string.isRequired};TextButton.defaultProps={};var styles$2=reactNative.StyleSheet.create({base:{paddingHorizontal:6},normal:{color:TEXT_COLOR},disabled:{color:TEXT_DISABLED_COLOR},selected:{color:TEXT_ACTIVE_COLOR},selectedDisabled:{color:TEXT_DISABLED_COLOR}});

var _jsxFileName$c="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\withLabel.js";var ContainerPropTypes={placement:PropTypes.oneOf([PLACEMENT_LEFT,PLACEMENT_RIGHT,PLACEMENT_TOP,PLACEMENT_BOTTOM]),contentContainerStyle:PropTypes.any,disabled:PropTypes.bool,label:PropTypes.string,children:PropTypes.node,onPress:PropTypes.func,onLabelPress:PropTypes.func,onLongPress:PropTypes.func,onLabelLongPress:PropTypes.func};var ContainerDefaultProps={placement:PLACEMENT_LEFT,contentContainerStyle:null,disabled:false,label:'',children:undefined,onPress:undefined,onLabelPress:undefined,onLongPress:undefined,onLabelLongPress:undefined};var getPlacementStyle=function getPlacementStyle(placement){switch(placement){case PLACEMENT_RIGHT:return styles$3.containerRight;case PLACEMENT_TOP:return styles$3.containerTop;case PLACEMENT_BOTTOM:return styles$3.containerBottom;}return styles$3.containerLeft;};var withLabel=function withLabel(Component){var displayName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var Container=function Container(_ref){var contentContainerStyle=_ref.contentContainerStyle,placement=_ref.placement,disabled=_ref.disabled,label=_ref.label,children=_ref.children,onPress=_ref.onPress,onLabelPress=_ref.onLabelPress,onLongPress=_ref.onLongPress,onLabelLongPress=_ref.onLabelLongPress,props=objectWithoutProperties(_ref,["contentContainerStyle","placement","disabled","label","children","onPress","onLabelPress","onLongPress","onLabelLongPress"]);var labelNode=null;if(label){labelNode=React__default.createElement(Text$1,{style:getButtonStyle(styles$3,disabled),onPress:onLabelPress||onPress,onLongPress:onLabelLongPress||onLongPress,__source:{fileName:_jsxFileName$c,lineNumber:75}},label);}return React__default.createElement(reactNative.View,{style:[getPlacementStyle(placement),contentContainerStyle],__source:{fileName:_jsxFileName$c,lineNumber:86}},React__default.createElement(Component,_extends_1({},props,{onPress:onPress,onLongPress:onLongPress,__source:{fileName:_jsxFileName$c,lineNumber:87}})),labelNode,children);};Container.propTypes=ContainerPropTypes;Container.defaultProps=ContainerDefaultProps;Container.displayName=displayName||"withLabel("+Component.name+")";return Container;};var styles$3=reactNative.StyleSheet.create({normal:{marginHorizontal:5,color:TEXT_ACTIVE_COLOR},disabled:{marginHorizontal:5,color:TEXT_DISABLED_COLOR},containerLeft:{flexDirection:'row-reverse',justifyContent:'flex-start',alignItems:'center'},containerRight:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},containerTop:{flexDirection:'column-reverse',justifyContent:'flex-start',alignItems:'center'},containerBottom:{flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}});

var _jsxFileName$d="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\Radio.js";var RadioButton=function RadioButton(_ref){var selected=_ref.selected,disabled=_ref.disabled,style=_ref.style,props=objectWithoutProperties(_ref,["selected","disabled","style"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[radioStyles.highlight,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$d,lineNumber:34}}),React__default.createElement(reactNative.View,{style:[radioStyles.outerCircle,getButtonStyle(radioOuterStyles,disabled,selected)],__source:{fileName:_jsxFileName$d,lineNumber:40}},React__default.createElement(reactNative.View,{style:[radioStyles.innerCircle,getButtonStyle(radioInnerStyles,disabled,selected)],__source:{fileName:_jsxFileName$d,lineNumber:46}})));};RadioButton.propTypes={disabled:PropTypes.bool,selected:PropTypes.bool};RadioButton.defaultProps={disabled:false,selected:false};var Radio=withLabel(RadioButton,'Radio');

var _jsxFileName$e="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\assets\\CheckIcon.js";var CheckIcon=function CheckIcon(props){return React__default.createElement(reactNative.Image,_extends_1({},props,{source:require('./check.png'),__source:{fileName:_jsxFileName$e,lineNumber:5}}));};var CheckDisabledIcon=function CheckDisabledIcon(props){return React__default.createElement(reactNative.Image,_extends_1({},props,{source:require('./check_disabled.png'),__source:{fileName:_jsxFileName$e,lineNumber:13}}));};

var _jsxFileName$f="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\Button\\CheckBox.js";var CheckBoxButton=function CheckBoxButton(_ref){var selected=_ref.selected,disabled=_ref.disabled,style=_ref.style,props=objectWithoutProperties(_ref,["selected","disabled","style"]);var highlightColor=selected?BUTTON_SELECTED_HIGHLIGHT_COLOR:BUTTON_HIGHLIGHT_COLOR;var icon=null;if(selected){var Icon=disabled?CheckDisabledIcon:CheckIcon;icon=React__default.createElement(Icon,{style:checkBoxStyles.icon,__source:{fileName:_jsxFileName$f,lineNumber:39}});}return React__default.createElement(reactNative.TouchableHighlight,_extends_1({},props,{style:[checkBoxStyles.highlight,style],disabled:disabled,underlayColor:highlightColor,__source:{fileName:_jsxFileName$f,lineNumber:43}}),React__default.createElement(reactNative.View,{style:[checkBoxStyles.outerCircle,getButtonStyle(checkBoxOuterStyles,disabled)],__source:{fileName:_jsxFileName$f,lineNumber:49}},React__default.createElement(reactNative.View,{style:[checkBoxStyles.innerCircle,getButtonStyle(checkBoxInnerStyles,disabled)],__source:{fileName:_jsxFileName$f,lineNumber:55}}),icon));};CheckBoxButton.propTypes={disabled:PropTypes.bool,selected:PropTypes.bool};CheckBoxButton.defaultProps={disabled:false,selected:false};var CheckBox=withLabel(CheckBoxButton,'CheckBox');

var _jsxFileName$g="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\ActionIconButton.js";var ActionIconButton=function(_Component){inherits$1(ActionIconButton,_Component);function ActionIconButton(props){var _getPrototypeOf2;var _this;classCallCheck$1(this,ActionIconButton);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}_this=possibleConstructorReturn$1(this,(_getPrototypeOf2=getPrototypeOf$1(ActionIconButton)).call.apply(_getPrototypeOf2,[this,props].concat(args)));_this.renderIcon=function(_ref){var action=_ref.action,iconSize=_ref.iconSize,iconStyle=_ref.iconStyle;return renderIconFromAction(action,iconSize,iconStyle);};_this.onPress=function(event){var _this$props=_this.props,onPress=_this$props.onPress,onAction=_this$props.onAction;if(onPress){onPress(event);}if(onAction){onAction(_this.state.action);}};_this.state={action:getAction(props.action)};return _this;}createClass$1(ActionIconButton,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref2){var action=_ref2.action;this.setState({action:getAction(action)});}},{key:"render",value:function render(){return React__default.createElement(IconButton,_extends_1({},this.props,{onPress:this.onPress,iconRenderer:this.renderIcon,__source:{fileName:_jsxFileName$g,lineNumber:56}}));}}]);return ActionIconButton;}(React.Component);ActionIconButton.propTypes={onAction:PropTypes.func.isRequired,action:ActionPropType.isRequired,iconSize:PropTypes.number,iconStyle:PropTypes.any};ActionIconButton.defaultProps={iconSize:20,iconStyle:undefined};

var _jsxFileName$h="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\ToggleActionButton.js";var defaultButtonRenderer=function defaultButtonRenderer(action,onAction,props){return React__default.createElement(ActionIconButton,_extends_1({},props,{action:action,onAction:onAction,__source:{fileName:_jsxFileName$h,lineNumber:26}}));};var ToggleActionButton=function(_Component){inherits$1(ToggleActionButton,_Component);function ToggleActionButton(props){var _getPrototypeOf2;var _this;classCallCheck$1(this,ToggleActionButton);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}_this=possibleConstructorReturn$1(this,(_getPrototypeOf2=getPrototypeOf$1(ToggleActionButton)).call.apply(_getPrototypeOf2,[this,props].concat(args)));_this.onPress=function(event){var _this$props=_this.props,onPress=_this$props.onPress,onAction=_this$props.onAction;if(onPress){onPress(event);}if(onAction){onAction(_this.state.action);}};_this.onAction=function(action){var onAction=_this.props.onAction;if(onAction){var result=onAction(action,_this.state.actions);if(result===false){return;}}_this.next();};var actions=props.actions.map(getAction);_this.state={actions:actions,currentAction:actions[0]};return _this;}createClass$1(ToggleActionButton,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref){var actions=_ref.actions;if(actions!==this.props.actions){var _actions=props.actions.map(getAction);this.setState({actions:_actions,currentAction:_actions[0]});}}},{key:"next",value:function next(){var _this$state=this.state,actions=_this$state.actions,currentAction=_this$state.currentAction;var nextAction=actions[(actions.indexOf(currentAction)+1)%actions.length];this.setState({currentAction:nextAction});}},{key:"render",value:function render(){var _this$props2=this.props,actions=_this$props2.actions,buttonRenderer=_this$props2.buttonRenderer,props=objectWithoutProperties(_this$props2,["actions","buttonRenderer"]);var currentAction=this.state.currentAction;return buttonRenderer(currentAction,this.onAction,props);}}]);return ToggleActionButton;}(React.Component);ToggleActionButton.propTypes={actions:PropTypes.arrayOf(ActionPropType).isRequired,buttonRenderer:PropTypes.func.isRequired,onAction:PropTypes.func.isRequired};ToggleActionButton.defaultProps={buttonRenderer:defaultButtonRenderer};

var _jsxFileName$i="d:\\www\\my\\playground\\RNTestApp\\source\\components\\source\\actions\\ActionGroup.js";var getKeyFromAction=function getKeyFromAction(action){return typeof action==='string'?action:action.type;};var defaultButtonRenderer$1=function defaultButtonRenderer(action,onAction,props){return React__default.createElement(ActionIconButton,_extends_1({},props,{key:getKeyFromAction(action),action:action,onAction:onAction,__source:{fileName:_jsxFileName$i,lineNumber:12}}));};var ActionGroup=function ActionGroup(_ref){var actions=_ref.actions,onAction=_ref.onAction,buttonRenderer=_ref.buttonRenderer,props=objectWithoutProperties(_ref,["actions","onAction","buttonRenderer"]);return actions.map(function(toggleActions){if(toggleActions instanceof Array){return React__default.createElement(ToggleActionButton,_extends_1({},props,{key:toggleActions.map(function(action){return getKeyFromAction(action);}).join('/'),onAction:onAction,buttonRenderer:buttonRenderer,actions:toggleActions,__source:{fileName:_jsxFileName$i,lineNumber:24}}));}return buttonRenderer(toggleActions,onAction,props);});};ActionGroup.propTypes={actions:PropTypes.arrayOf(PropTypes.oneOfType([ActionPropType,PropTypes.arrayOf(ActionPropType)])).isRequired,onAction:PropTypes.func.isRequired,buttonRenderer:PropTypes.func};ActionGroup.defaultProps={buttonRenderer:defaultButtonRenderer$1};

exports.ActionGroup = ActionGroup;
exports.ActionIconButton = ActionIconButton;
exports.createAction = createAction;
exports.getAction = getAction;
exports.getActionByType = getActionByType;
exports.getDefaultFontFamily = getDefaultFontFamily;
exports.setDefaultFontFamily = setDefaultFontFamily;
exports.isknownAction = isknownAction;
exports.registerAction = registerAction;
exports.registerActions = registerActions;
exports.renderIconFromAction = renderIconFromAction;
//# sourceMappingURL=actions.js.map
