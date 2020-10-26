import React from 'react';
import { useState } from 'react';
import DropdownView from './DropdownView';

const DropdownContainer = () => {
  const [input, setInput] = useState('');
  const onChangeHandler = (event) => setInput(event.target.value);
  return <DropdownView onChangeHandler={onChangeHandler} value={input} />;
};

export default DropdownContainer;
