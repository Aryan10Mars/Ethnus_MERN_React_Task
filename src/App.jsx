import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Task1 from './ReactTasks/Task1';
import { Task2 } from './ReactTasks/Task2';
import { Task3 } from './ReactTasks/Task3';
import { Task4 } from './ReactTasks/Task4';
import { Task5 } from './ReactTasks/Task5';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Task1' element={<Task1 />} />

          <Route path='/Task2' element={<div className='main'>
            <Task2 />
          </div>} />

          <Route path='/Task3' element={<div style={{ minHeight: "100vh", backgroundColor: "#A7A1D3" }}>
            <Task3 colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'gray', 'black', 'white', 'violet', 'indigo', 'teal', 'magenta', 'olive', 'maroon', 'navy', 'lime', 'fuchsia', 'aqua', 'silver', 'gold']} />
          </div>} />

          <Route path='/Task4' element={<div className='bg-dark pb-4' style={{ backgroundColor: "#000" }}>
            <Task4 />
          </div>} />
          <Route path='/Task5' element={<Task5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
