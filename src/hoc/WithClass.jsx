import React from 'react';

const withClass = (props) => {
  return (
    <div>
      <div className={props.classes}>
        {props.children}
      </div>
    </div>
  );
};

export default withClass;