import logo from './logo.svg';
import './App.css';
import { Provider, observer, useLocalStore } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { MainPage } from './pages'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <Provider>
      <Router history={browserHistory}>
        <div className="App">
          <MainPage />
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
