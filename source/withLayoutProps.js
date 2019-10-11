import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { getComponentName } from './utils';

const FLEX_PROPS = {
  flex1: { flex: 1 },
  widthFull: { width: '100%' },
  heightFull: { height: '100%' },
  shrink0: { flexShrink: 0 },
  wrap: { flexWrap: 'wrap' },
  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  columnReverse: { flexDirection: 'column-reverse' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifySpaceBetween: { justifyContent: 'flex-start' },
  justifySpaceAround: { justifyContent: 'flex-end' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  alignCenter: { alignItems: 'center' },
  alignStretch: { alignItems: 'stretch' },
  alignSelfStart: { alignSelf: 'flex-start' },
  alignSelfEnd: { alignSelf: 'flex-end' },
  alignSelfCenter: { alignSelf: 'center' },
  alignSelfStretch: { alignSelf: 'stretch' },
  marginAuto: { margin: 'auto' },
  marginLeftAuto: { marginLeft: 'auto' },
  marginAuto: { margin: 'auto' },
  marginBottomAuto: { marginBottom: 'auto' },
  marginEndAuto: { marginEnd: 'auto' },
  marginHorizontalAuto: { marginHorizontal: 'auto' },
  marginLeftAuto: { marginLeft: 'auto' },
  marginRightAuto: { marginRight: 'auto' },
  marginStartAuto: { marginStart: 'auto' },
  marginTopAuto: { marginTop: 'auto' },
  marginVerticalAuto: { marginVertical: 'auto' },
  margin5: { margin: 5 },
  marginBottom5: { marginBottom: 5 },
  marginEnd5: { marginEnd: 5 },
  marginHorizontal5: { marginHorizontal: 5 },
  marginLeft5: { marginLeft: 5 },
  marginRight5: { marginRight: 5 },
  marginStart5: { marginStart: 5 },
  marginTop5: { marginTop: 5 },
  marginVertical5: { marginVertical: 5 },
  margin10: { margin: 10 },
  marginBottom10: { marginBottom: 10 },
  marginEnd10: { marginEnd: 10 },
  marginHorizontal10: { marginHorizontal: 10 },
  marginLeft10: { marginLeft: 10 },
  marginRight10: { marginRight: 10 },
  marginStart10: { marginStart: 10 },
  marginTop10: { marginTop: 10 },
  marginVertical10: { marginVertical: 10 },
  padding5: { padding: 5 },
  paddingBottom5: { paddingBottom: 5 },
  paddingEnd5: { paddingEnd: 5 },
  paddingHorizontal5: { paddingHorizontal: 5 },
  paddingLeft5: { paddingLeft: 5 },
  paddingRight5: { paddingRight: 5 },
  paddingStart5: { paddingStart: 5 },
  paddingTop5: { paddingTop: 5 },
  paddingVertical5: { paddingVertical: 5 },
  padding10: { padding: 10 },
  paddingBottom10: { paddingBottom: 10 },
  paddingEnd10: { paddingEnd: 10 },
  paddingHorizontal10: { paddingHorizontal: 10 },
  paddingLeft10: { paddingLeft: 10 },
  paddingRight10: { paddingRight: 10 },
  paddingStart10: { paddingStart: 10 },
  paddingTop10: { paddingTop: 10 },
  paddingVertical10: { paddingVertical: 10 },
};

const FLEX_PROPS_UNSET = Object.keys(FLEX_PROPS).reduce((result, name) => {
  result[name] = undefined;

  return result;
}, {});

const buildStyleFromProps = (props) => {
  const style = {};

  Object.keys(props).forEach((name) => {
    const styleProps = FLEX_PROPS[name];

    if (styleProps) {
      Object.assign(style, styleProps);
    }
  });

  return style;
};

const withLayoutProps = (
  ContentComponent,
  hasOwnStyle = true,
  staticStyles = true,
  displayName = undefined,
) => {
  const Wrapper = (props) => {
    const [combinedStyle, setStyle] = useState(null);

    const effectHandler = () => {
      const { style } = props;
      let layoutStyle = buildStyleFromProps(props);

      if (staticStyles) {
        if (hasOwnStyle && style) {
          layoutStyle = StyleSheet.create({ self: StyleSheet.flatten([layoutStyle, style]) }).self;
        } else {
          layoutStyle = StyleSheet.create({ self: layoutStyle }).self;
        }
      } else if (hasOwnStyle && style) {
        layoutStyle = [layoutStyle, style];
      }

      setStyle(layoutStyle);
    };

    if (staticStyles) {
      useEffect(effectHandler, []);
    } else {
      useEffect(effectHandler);
    }

    if (!combinedStyle) {
      return null;
    }

    // {...FLEX_PROPS_UNSET}
    return <ContentComponent {...props} style={combinedStyle} />;
  };

  Wrapper.displayName = displayName || `withLayoutProps(${getComponentName(ContentComponent)})`;

  Wrapper.propTypes = ContentComponent.propTypes;
  Wrapper.defaultProps = ContentComponent.defaultProps;

  return Wrapper;
};

export default withLayoutProps;
