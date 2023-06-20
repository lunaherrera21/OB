import logo from './logo.svg';
import './App.css';

import ClockHook from './hooks/ejercicio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Ejericio 4_5_6</h1>
      {<ClockHook></ClockHook>}

    </div>
  );
}

export default App;
