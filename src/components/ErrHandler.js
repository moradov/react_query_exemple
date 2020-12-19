import React from 'react';

const ErrHandler = ({ tryAgainClicked }) => {
  return (
    <div className='card-body text-center ' style={{ marginTop: '200px' }}>
      <h4 className='card-title mt-2'>Some thing wen wrong</h4>
      <button className='card-btn btn btn-primary' onClick={tryAgainClicked}>
        Try Again
      </button>
    </div>
  );
};

export default ErrHandler;
