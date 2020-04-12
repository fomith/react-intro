import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

function App(props) {

  let contentElement = props.state.contentPage.userData.map(p => <Route path={"/" + p.userId} render={
    () => <Content 
    userId={p.userId} 
    name={p.name} 
    avatar={p.avatar}
    lastName={p.lastName} 
    state={props.state.contentPage} 
    dispatch={props.dispatch} />} />)

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main>
          <Navbar />
          <content className="content top">
            <Route path="/profile"
              render={() => <Content

                state={props.state.contentPage}
                dispatch={props.dispatch} />} />

            <Route path="/dialogs"
              render={() => <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch} />} />

            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/setting" render={() => <Setting />} />

            {contentElement}

          </content >
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;