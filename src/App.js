import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesDetails from './pages/Home';
import WatchMovie from './pages/watchMovies';
import NavBar from './components/navBar';
import Favourites from './pages/Favourites';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={"/"} exact component={MoviesDetails} />
          <Route path={"/Home"} exact component={MoviesDetails} />
          <Route path={"/Favourites"} exact component={Favourites} />
          <Route path={"/LoginForm"} exact component={LoginForm} />
          <Route path={"/RegisterForm"} exact component={RegisterForm} />
          <Route path={"/watchMovies/:id"} exact component={WatchMovie} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
