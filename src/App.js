import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          <Route path="Profil">

          </Route>

          <Route path="/chat/:person">
            <Header backButton="/"></Header>
            <ChatScreen></ChatScreen>
          </Route>
            
          <Route path="/chat">
            <Header backButton="/"></Header>
            <Chats></Chats>
          </Route>


          <Route path="/">
            <Header></Header>
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
