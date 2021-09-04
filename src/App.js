import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './containers/client/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
