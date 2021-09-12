import './App.css';
import { Home } from './components/Home';
import { Provider } from 'react';

function App() {
  return (
    <div className="App">
      <Provider>

      <Home/>
      </Provider>
    </div>
  );
}

export default App;
