import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, BrowserRouter} from 'react-router-dom'; 
import Add from "./comps/Add";
import { Nav } from "./comps/Nav";
import Game from "./comps/Game";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Popup from './comps/PopupApp';
//import PopupApp from './comps/PopupApp';
class App extends React.Component {
//const App: React.FC = () => {
  public render() {
  return (
      <BrowserRouter>
      <div>
        <Nav />        
        <div className="App">
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/add" component={Add} />
            <Route component={Game} />
            {/* Toast code does not work at this spot, though db is updated*/}
          </Switch>
          {/*<ToastContainer className={"toaster"} autoClose={3500} /> */}
        </div>
      </div>
      </BrowserRouter>
  );
}
}
export default App;
