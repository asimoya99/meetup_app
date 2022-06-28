import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetups'
import FavoritePage from './pages/Favorites'
import Layout from './components/layout/Layout'
const App = () => {
  return (
    <Layout>
      <Switch>
        {' '}
        <Route path='/' component={AllMeetupsPage} exact />
        <Route path='/new-meetup' component={NewMeetupPage} />
        <Route path='/favorites' component={FavoritePage} />
      </Switch>
    </Layout>
  )
}

export default App
