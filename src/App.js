
import { Suspense, lazy } from 'react';
import './App.css';
// import TestComponent from './components/TestComponent';


const TestComponent = lazy(() => import('./components/TestComponent'));



function App() {

  return (
    <div className="App">
      <h4>React App</h4>
     <Suspense fallback={'Loading...'}>
     <TestComponent />
     </Suspense>
    </div>
  );
}

export default App;
