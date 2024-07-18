import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DigitalClock from "./DigitalClock/DigitalClock";
import ToDoList from "./ToDoList/ToDoList";
import RandomTrivia from "./RandomTrivia/RandomTrivia";
import Card from "./Card/Card";
import './App.css';
import ColorPalette from './ColorPicker/ColorPalette';
import DigitalClockImg from './assets/digitalclock.png';
import ToDoListImg from './assets/todolist.png';
import ColorPaletteImg from './assets/colorpalette.png';
import TriviaGameImg from './assets/triviagame.png';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/list" element={<ToDoList />} />
        <Route path="/color" element={<ColorPalette />} />
        <Route path="/trivia" element={ <RandomTrivia /> } />
        <Route path="/" element={
          <div className='container'>
            <Card 
              toyTitle='Digital Clock'
              toyDescription='This is a digital clock made with React featuring useState and useEffect, styled with CSS.'
              route='/clock'
              image={DigitalClockImg}
              // className="card"
            />
            <Card 
              toyTitle='To Do List'
              toyDescription='This is a to-do list made with React featuring useState and styled with CSS.'
              route='/list'
              image={ToDoListImg}
              // className="card"
            />
            <Card 
              toyTitle='Color Palette'
              toyDescription='This is a color picker made with React featuring useState and styled with CSS.'
              route='/color'
              image={ColorPaletteImg}
              // className="card"
            />
            <Card 
              toyTitle='Trivia Game'
              toyDescription='This is a trivia game made with React featuring useState and styled with CSS.'
              route='/trivia'
              image={TriviaGameImg}
              // className="card"
            />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

