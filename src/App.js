import logo from './logo.svg';
import './App.css';
import LandingPage from './landingPage.js';
import Filter from './filter.js';

function App() {
  return (
    <div className="App">
      <h1>Double Sessions</h1>
      <Filter />
      <LandingPage />
    </div>
  );
}

export default App;
