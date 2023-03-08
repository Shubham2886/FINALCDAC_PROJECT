
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage'
import ListBookComponent from './components/ListBookComponent'
import AddBookComponent from './components/AddBookComponent';
import RegisterComponent from './components/RegisterComponent';
import Footer from './components/Footer';
import SelectBookComponent from './components/SelectBookComponent';
import TopbarComponent from './components/TopbarComponent';
import ExchangeComponent from './components/ExchangeComponent';
import OfferComponent from './components/OfferComponent';
import FileUpload from './components/FileUpload';
import About from './components/AboutUsComponent'


function App() {
  return (
    <Router>
      <TopbarComponent />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/addbook">
          <AddBookComponent />
        </Route>
        <Route path="/books">
          <ListBookComponent />
        </Route>
        <Route path="/login">
          <Homepage />
        </Route>
        <Route path="/register">
          <RegisterComponent />
        </Route>
        <Route path="/exchange">
          <ExchangeComponent />
        </Route>
        <Route path="/offer">
          <OfferComponent />
        </Route>
        <Route path="/upload">
          <FileUpload />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
        <Route path="/book/:id" component={SelectBookComponent}></Route>

      </Switch>
      <Route path="/Footer" component={Footer} />
    </Router>
  );
}

export default App;
