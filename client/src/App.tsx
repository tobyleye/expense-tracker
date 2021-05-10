import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import Login from "./components/Login"
import Register from "./components/Register";
import './styles/index.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
