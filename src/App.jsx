// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ColorPicker from "./ColorPicker/ColorPicker";
// import DigitalClock from "./DigitalClock/DigitalClock";
// import ToDoList from "./ToDoList/ToDoList";
// import Card from "./Card/Card";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/clock" component={DigitalClock} />
//           <Route path="/list" component={ToDoList} />
//           <Route path="/color" component={ColorPicker} />
//           <Route path="/" element={
//             <div>
//               <Card
//                 toyTitle='Digital Clock'
//                 toyDescription='This is a digital clock made with React featuring useState and useEffect, styled with CSS.'
//                 route='/clock'
//               />
//             </div>
//             <div>
//               <Card
//                 toyTitle='To Do List'
//                 toyDescription='This is a to-do list made with React featuring useState and useEffect, styled with CSS.'
//                 route='/list'
//               />
//             </div>
//             <div>
//               <Card
//                 toyTitle='Color Picker'
//                 toyDescription='This is a color picker made with React featuring useState and useEffect, styled with CSS.'
//                 route='/color'
//               />
//             </div>
//               }/>
//           </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ColorPicker from "./ColorPicker/ColorPicker";
import DigitalClock from "./DigitalClock/DigitalClock";
import ToDoList from "./ToDoList/ToDoList";
import Card from "./Card/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/list" element={<ToDoList />} />
        <Route path="/color" element={<ColorPicker />} />
        <Route path="/" element={
          <div>
            <Card 
              toyTitle='Digital Clock'
              toyDescription='This is a digital clock made with React featuring useState and useEffect, styled with CSS.'
              route='/clock'
            />
            <Card 
              toyTitle='To Do List'
              toyDescription='This is a to-do list made with React featuring useState and useEffect, styled with CSS.'
              route='/list'
            />
            <Card 
              toyTitle='Color Picker'
              toyDescription='This is a color picker made with React featuring useState and useEffect, styled with CSS.'
              route='/color'
            />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
