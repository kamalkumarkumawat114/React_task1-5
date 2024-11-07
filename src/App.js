// import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import SearchFilter from './Components/SearchFilter';
import CustomerDataGrid from './Components/CustomerDataGrid';
import DragDropTask from './Components/DragDropTask';
import Calculator from './Components/Calculator';
import Additems from './Components/Additems';
import Binding from './Components/Binding';
import Button from './Components/Button';
import Toggle from './Components/Toggle';
import DisplyRecord from './Components/DisplyRecord';

function App() {

  return (
  <>
    <div className="App">
      <h1>React-Task</h1>
      <DisplyRecord/>
      <Toggle/>
      <Button/>
      <Binding/>
      <Additems/>
      <Calculator/>
      <Counter/>
      <SearchFilter/>
      <CustomerDataGrid/>
      <DragDropTask/>
    </div>
    </>
  );
}

export default App;
