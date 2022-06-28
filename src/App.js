import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetups'
import FavoritePage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'
const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        {' '}
        <Route path='/' component={AllMeetupsPage} exact />
        <Route path='/new-meetup' component={NewMeetupPage} />
        <Route path='/favorites' component={FavoritePage} />
      </Switch>
    </div>
  )
}

export default App
