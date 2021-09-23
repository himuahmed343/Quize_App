import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Quiz from "./Components/Pages/Quiz/Quiz";
import Results from "./Components/Pages/Results/Results";
import Signup from "./Components/Pages/Signup/Signup";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRouter/PublicRouter";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz:id" component={Quiz} />
            <PrivateRoute exact path="/result" component={Results} />
            <Home />
            <Signup />
            <Login />
            <Quiz />
            <Results />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>

    // <Quiz />
  );
}

export default App;
