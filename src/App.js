import './App.css';
import Input from './input';
import Details from './details';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="Todo-Main-Box">
        <h4><u>Todo List</u></h4>
        <Input/>
        <hr></hr>
        <Details />
        <Details />
        <Details />
        <Details />
      </div>
    </div>
  );
}

export default App;
