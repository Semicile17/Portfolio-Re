import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/main";
import Terminal from './components/terminal'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/terminal" element={<Terminal/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
