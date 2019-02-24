import React, { Component } from 'react';
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
    };

    static defaultProps = {
      showContent: undefined,
    };

    state = { visible: false, contentProps: null };

    showContent = (contentProps = {}) => {
      const { showContent } = this.props;

      if (showContent) {
        showContent(contentRenderer, contentProps);
        return;
      }

      this.setState({ visible: true, contentProps });
    };

    hideContent = () => {
      this.setState({ visible: false, contentProps: null });
    };

    render() {
      const { visible, contentProps } = this.state;

      return (
        <>
          <ControlComponent {...this.props} showContent={this.showContent} />
          {visible ? contentRenderer(contentProps, this.hideContent) : null}
        </>
      );
    }
  }

  ContentSibling.displayName = displayName || `withContentSibling(${getComponentName(ControlComponent)})`;

  return ContentSibling;
};

export default withContentSibling;
