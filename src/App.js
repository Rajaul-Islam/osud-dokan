import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Footer from './Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div  className='app'>
      <AuthProvider>
        <Router>
          <Header>
          </Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>

            <Route exact path='/service'>
              <Services></Services>
            </Route>


            <PrivateRoute path='/service/:serviceId'>
              <Service></Service>
            </PrivateRoute>




            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
