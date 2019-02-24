import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  Controlled component for hosting modals. Must be placed in top layers of
  application component tree to present Modals as top-most components.
  Needs to be wired with data layer, example with redux.

  Accepts props
  # list - list of currently visible modals. Each modal is represented by an
           object with id, renderer and props properties:
           * id - unique identifier string
           * renderer() - renderer function that returns modal component
           * props - object with props to pass into renderer()
  # close() - callback to close

  renderer() function accepts two arguments -- props object and close() callback.

  Example with react-redux:

const ConnectedModalHost = connect(
  (store) => ({
    list: getModalsList(store),
  }),
  {
    close: closeModal,
  },
)(ModalHost);
*/
class ModalHost extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        renderer: PropTypes.func.isRequired,
        props: PropTypes.shape({}).isRequired,
        promise: PropTypes.instanceOf(Promise),
        resolve: PropTypes.func,
        reject: PropTypes.func,
      }),
    ).isRequired,
    close: PropTypes.func.isRequired,
  };

  state = { currentList: [] };

  static getDerivedStateFromProps({ list }, { currentList }) {
    if (list === currentList) {
      return null;
    }

    return {
      currentList: list,
    };
  }

  handleCloseModal = (targetId, data) => {
    const { close } = this.props;
    const modal = this.state.currentList.find(({ id }) => id === targetId) || {};

    close(modal);

    const { resolve } = modal;

    if (resolve) {
      resolve(data);
    }
  };

  renderModals() {
    const { currentList } = this.state;

    return currentList.map(({ id, renderer, props }) =>
      renderer({ key: id, ...props }, (data) => this.handleCloseModal(id, data)),
    );
  }

  render() {
    return <>{this.renderModals()}</>;
  }
}

export default ModalHost;
