import React from 'react'
import { create } from 'mobx-persist'
import { Provider, observer, useLocalStore } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { MainPage, SamplePage } from './pages'
import { stores } from 'stores'

const browserHistory = createBrowserHistory()
const hydrate = create()

const App = observer(() => {
  const store = useLocalStore(() => ({
    storeLoaded: false,
    setStoreLoaded: (load) => store.storeLoaded = load
  }))

  React.useEffect(() => {
    const load = async () => {
      await hydrate('userStore', stores.userStore).then(() => {
        store.setStoreLoaded(true)
      })
    }
    load()
  }, [])

  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        <div className={'text-center'}>
          {store.storeLoaded ? (
            <Switch>
              <Route exact path={'/'} component={MainPage} />
              <Route path={'/sample'} component={SamplePage} />
            </Switch>
          ) : null}
        </div>
      </Router>
    </Provider>
  );
})

export default App;
