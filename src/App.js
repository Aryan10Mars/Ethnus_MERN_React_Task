import './App.css';
import Task1 from './ReactTasks/Task1';
import { Task2 } from './ReactTasks/Task2';
import { Task3 } from './ReactTasks/Task3';


function App() {
  return (
    <div className="App">
     {/* <Task1/> */}
     {/* <div className='main'>
        <Task2/>
  </div> */}

      <div style={{minHeight: "100vh", backgroundColor: "#A7A1D3"}}>
        <Task3 colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'gray', 'black', 'white', 'violet', 'indigo', 'teal', 'magenta', 'olive', 'maroon', 'navy', 'lime', 'fuchsia', 'aqua', 'silver', 'gold']} />
      </div>

    </div>
  );
}

export default App;
