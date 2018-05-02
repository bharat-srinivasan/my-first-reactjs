import React from 'react';

/**
 * Wraps a stateless component
 * @param {*} WrappedComponent 
 */
const wrapIt = (WrappedComponent) => {
  return (props) => (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default wrapIt;