import './App.css';
import ConfigurationPanel from './ConfigurationPanel';
import ResultsPanel from './ResultsPanel';
import ContextProvider from './meetingContext';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center">How much does this meeting really cost?</h1>
      <div className="flex flex-wrap">
        <ContextProvider>
          <ResultsPanel />
          <ConfigurationPanel />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
