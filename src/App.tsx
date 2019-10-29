import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, BrowserRouter} from 'react-router-dom'; 
import Add from "./comps/Add";
import { Nav } from "./comps/Nav";
import Game from "./comps/Game";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/add" component={Add} />
          <Route component={Game} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
