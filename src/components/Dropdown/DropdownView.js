import React from 'react';

const DropdownView = ({ onChangeHandler, input }) => {
  return (
    <div>
      <input type='text' onChange={onChangeHandler} value={input} />
    </div>
  );
};

export default DropdownView;
