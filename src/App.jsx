
// import ColorPicker from "./ColorPicker/ColorPicker";
import DigitalClock from "./DigitalClock/DigitalClock";
import ToDoList from "./ToDoList/ToDoList";
// import Button from "./Button/Button";
import Card from "./Card/Card";


function App() {
  return (
    <>
      <Card toyTitle='Digital Clock' toyDescription='This is a digital clock made with React featuring useState and useEffect, styled with CSS.' />
      <Card toyTitle='To Do List' toyDescription='This is a to-do list made with React featuring useState, styled with CSS.' />
      <Card toyTitle='Color Picker' toyDescription='This is a color picker made with React featuring useState, styled with CSS.' />
      <DigitalClock />
      <ToDoList/>
    </>
  );
}

export default App
