import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import ContentContainer from "./components/Content/ContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Navbar />
        <content className="content top">
          <Route path="/profile" render={() => <ContentContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
        </content>
      </main>
    </div>
  );
}

export default App;
