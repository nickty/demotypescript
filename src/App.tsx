/** @format */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

// let name: string = 'mizan';

// let age: number = 4;

// let hobies: string[];

// let role: [number, string];

// role = [1, 'sk'];

// type Person = {
//   name: string;
//   age?: number;
// };
// let person: Person = {
//   name: 'dfjdf',
// };

// let lotsOfPeople : Person[]

// let age: number | string;

// let printName: (name: string) => void;

// function printName(name: string) {
//   console.log(name);
// }

// printName('name');

// interface Persons extends Person {
//   name: string;
//   age?: number;
// }

const App: React.FC = () => {
  const [todo, settodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      settodo('');
    }
  };
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>

      <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />

      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
