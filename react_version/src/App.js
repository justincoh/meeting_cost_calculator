import './App.css';
import ConfigurationPanel from './ConfigurationPanel';
import ResultsPanel from './ResultsPanel';
import ContextProvider from './meetingContext';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center">How much do your meetings really cost?</h1>
      <div className="flex flex-wrap">
        <ContextProvider>
          <ConfigurationPanel />
          <ResultsPanel />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
