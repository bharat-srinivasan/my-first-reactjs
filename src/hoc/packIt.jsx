import React, { Component } from 'react';

/**
 * Wraps a stateful component
 * @param {*} WrappedComponent 
 */
const packIt = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
};