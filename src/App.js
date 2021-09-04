import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './containers/client/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}
export default App;
