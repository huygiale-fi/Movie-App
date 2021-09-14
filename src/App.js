import './App.css';
import React,{Suspense } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Register from 'containers/client/Auth/Register/Register';
import { Toaster } from 'react-hot-toast';
import Userinfo from 'containers/client/Auth/Info/Userinfo';
import History from 'containers/client/Auth/History/History';
import  createBrowserHistory  from "history/createBrowserHistory"
import Moviedetail from 'containers/client/Moviedetail/Moviedetail';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import Theater from 'containers/client/Theater/Theater';
export const history = createBrowserHistory()
const Header = React.lazy(()=>import('./components/Header/Header'))
const Home = React.lazy(()=>import('./containers/client/Home/Home'))
const Login = React.lazy(()=>import('containers/client/Auth/Login/Login'))
function App() {
  return (
    <div className="App">
      <Toaster/>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/theater" component={Theater}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/userinfo" component={Userinfo}></Route>
          <Route exact path="/history" component={History}></Route>
          <Route exact path="/movie-detail/:id" component={Moviedetail}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
        <Footer/>
        </Suspense>
      </Router>
    </div>
  )
}
export default App;
