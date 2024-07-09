import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ColorPicker from "./ColorPicker/ColorPicker";
import DigitalClock from "./DigitalClock/DigitalClock";
import ToDoList from "./ToDoList/ToDoList";
import Card from "./Card/Card";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/list" element={<ToDoList />} />
        <Route path="/color" element={<ColorPicker />} />
        <Route path="/" element={
          <div className='container'>
            <Card 
              toyTitle='Digital Clock'
              toyDescription='This is a digital clock made with React featuring useState and useEffect, styled with CSS.'
              route='/clock'
              className="card"
            />
            <Card 
              toyTitle='To Do List'
              toyDescription='This is a to-do list made with React featuring useState and useEffect, styled with CSS.'
              route='/list'
              className="card"
            />
            <Card 
              toyTitle='Color Picker'
              toyDescription='This is a color picker made with React featuring useState and useEffect, styled with CSS.'
              route='/color'
              className="card"
            />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
