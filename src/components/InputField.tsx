/** @format */

import React from 'react';
import './style.css';

const InputField = () => {
  return (
    <form className='input'>
      <input
        type='text'
        name=''
        id=''
        placeholder='Enter a task name'
        className='input__box'
      />
      <button className='submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
