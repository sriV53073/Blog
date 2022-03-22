import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./TopBar/TopBar";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const user = false;
function App() {
  return (
   <Router>
  <TopBar/>
  <Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route exact path="/register">
    {user ? <Home/> :<Register />}
  </Route>
  <Route exact path="/login">
  {user ? <Home/> :<Login />}
  </Route>
  <Route exact path="/write">
  {user ? <Write/> :<Register />}
  </Route>
  <Route exact path="/settings">
  {user ? <Setting/> :<Register />}
  </Route>
  <Route exact path="/post/:postId">
    <Single />
  </Route>
  </Switch>
   </Router>

   
  );
}

export default App;
