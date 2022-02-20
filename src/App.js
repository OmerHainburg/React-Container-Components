import './App.css';
import { GuineaPigs } from './GuineaPigs';
import { GuineaPigsContainer } from './containers/GuineaPigsContainer';

function App() {
  const h1 = <h1>Separate Container Components From Presentational Components</h1>
  const h1CreateComponent = <h1>Create Container Component</h1>
  return (
    <div className="App">
      <header className="App-header">
        {h1}
        <GuineaPigs />
        {h1CreateComponent}
        <GuineaPigsContainer />
      </header>
    </div>
  );
}

export default App;
