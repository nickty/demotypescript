/** @format */

import React from 'react';
import './style.css';

interface Props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, settodo }) => {
  return (
    <form className='input'>
      <input
        type='text'
        name=''
        id=''
        placeholder='Enter a task name'
        className='input__box'
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button className='submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
