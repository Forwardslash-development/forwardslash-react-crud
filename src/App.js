import './App.css';
import Create from './components/crud/create';
import Read from './components/crud/read';
import Update from './components/crud/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="main">
     <h2 className="main-header">Forwardslash React CRUD</h2>
     <div>
     <Route exact path='/create' component={Create} />
     </div>
     <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <Route path='/update' component={Update} />
    </div>
    </Router>
  );
}

export default App;
