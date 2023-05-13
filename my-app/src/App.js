import logo from './logo.svg';
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import { NestingComponents } from './components/NestingComponents';


function App() {
  return (
    <div className="App">
      {/* <ConditionalRenderingClass /> */}
      <ConditionalRenderingFunctional connected={false} />
      <NestingComponents />
   
    </div>
  );
}

export default App;
