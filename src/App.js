import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Quiz from "./Components/Pages/Quiz/Quiz";
import Results from "./Components/Pages/Results/Results";
import Signup from "./Components/Pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Results} />
          <Home />
          <Signup />
          <Login />
          <Quiz />
          <Results />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
