import { Route, Switch } from 'react-router';
import FriendActivity from './components/FriendActivity'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Search from './components/Search'


const App = () => {
  return (
    <div className='App'>
      <Sidebar className='sidebar' />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/search' component={Search} />
      </Switch>
      <FriendActivity className='friendSidebar' />
    </div>
  );
}

export default App;