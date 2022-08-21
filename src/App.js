import { Button, Spinner } from 'react-bootstrap';


import './App.css';
function App() {
  return (
    <div className="App">
      <h2>React Bootstrap.</h2>
      <Button variant='secondary'>my btn</Button>
      <br /> <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="border" />
      <Spinner animation="grow" />
    </div>
  );
}

export default App;
