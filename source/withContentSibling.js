import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { getComponentName } from './utils';

/*
  Main idea of this component is to delegate control of displaying additional
  data outside. For example, displaying modal with more content.

  Additionally, if "showContent" prop is passed, control over content display
  may passed to parent components and displayed elewhere in the React DOM.
  Modal with content, for example may be delegated to top-most parent.

  PS: Will be used with ModalHost to delegate displaying Modals to outer layers
  of React components tree.
*/
const withContentSibling = (ControlComponent, contentRenderer, displayName) => {
  class ContentSibling extends Component {
    static propTypes = {
      showContent: PropTypes.func,
      mapContentProps: PropTypes.func,
      forwardedRef: PropTypes.any,
    };

    static defaultProps = {
      showContent: undefined,
      mapContentProps: undefined,
    };

    state = { visible: false, contentProps: null };

    showContent = (contentProps = {}) => {
      const { showContent, mapContentProps } = this.props;

      if (showContent) {
        showContent(contentRenderer, contentProps);
        return;
      }

      if (mapContentProps) {
        mapContentProps(contentProps, (props) => {
          this.setState({
            visible: true,
            contentProps: props,
          });
        });
      } else {
        this.setState({
          visible: true,
          contentProps,
        });
      }
    };

    hideContent = () => {
      this.setState({ visible: false, contentProps: null });
    };

    render() {
      const { forwardedRef, ...props } = this.props;
      const { visible, contentProps } = this.state;

      return (
        <>
          <ControlComponent {...props} ref={forwardedRef} showContent={this.showContent} />
          {visible ? contentRenderer(contentProps, this.hideContent) : null}
        </>
      );
    }
  }

  const RefForward = forwardRef((props, ref) => <ContentSibling {...props} forwardedRef={ref} />);

  RefForward.displayName =
    displayName || `withContentSibling(${getComponentName(ControlComponent)})`;

  return RefForward;
};

export default withContentSibling;
