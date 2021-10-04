import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Success from './components/Success/Success';
import Courses from './components/Courses/Courses';
import Notfound from './components/Notfound/Notfound';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/success">
          <Success></Success>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
