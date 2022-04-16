/** @format */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';

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

let age: number | string;

let printName: (name: string) => void;

// function printName(name: string) {
//   console.log(name);
// }

// printName('name');

// interface Persons extends Person {
//   name: string;
//   age?: number;
// }

const App: React.FC = () => {
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>

      <InputField />
    </div>
  );
};

export default App;
