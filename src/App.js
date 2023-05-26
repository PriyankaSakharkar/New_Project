import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';

function App() {
  return (
    <div>
       <h1>First React Project</h1>
       <p> Test p tag</p>

       <Add a= '8' b= '2'></Add>
       <Sub a= '5' b= '2'/>

    </div>
  );
}

export default App;
