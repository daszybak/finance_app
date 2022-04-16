import {Routes, Route} from 'react-router';
import {MainContent} from './containers';
import {Dashboard} from './routes/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index={true} element={<MainContent />} />
      </Route>
    </Routes>
  );
}

export default App;
