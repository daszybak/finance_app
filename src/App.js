import {Routes, Route} from 'react-router';
import {Dashboard} from './routes/index';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
