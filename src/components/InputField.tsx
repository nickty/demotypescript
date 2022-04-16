/** @format */

import React, { useRef } from 'react';
import './style.css';

interface Props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, settodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}>
      <input
        ref={inputRef}
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
