import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import DigitalClock from "./DigitalClock/DigitalClock";
import ToDoList from "./ToDoList/ToDoList";
import RandomTrivia from "./RandomTrivia/RandomTrivia";
import Card from "./Card/Card";
import './App.css';
import ColorPalette from './ColorPicker/ColorPalette';

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <Header /> : ''}
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
              // className="card"
            />
            <Card 
              toyTitle='To Do List'
              toyDescription='This is a to-do list made with React featuring useState and styled with CSS.'
              route='/list'
              // className="card"
            />
            <Card 
              toyTitle='Color Palette'
              toyDescription='This is a color picker made with React featuring useState and styled with CSS.'
              route='/color'
              // className="card"
            />
            <Card 
              toyTitle='Trivia Game'
              toyDescription='This is a trivia game made with React featuring useState and styled with CSS.'
              route='/trivia'
              // className="card"
            />
          </div>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

