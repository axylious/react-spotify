import { Route, Switch } from 'react-router';
import FriendActivity from './components/FriendActivity'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Search from './pages/Search'
import Library from './pages/Library'
import CreatePlaylist from './pages/CreatePlaylist';
import LikedSongs from './pages/LikedSongs';
import Playlist from './pages/Playlist'
import SeeAll from './components/SeeAll'


const App = () => {
  return (
    <div className='App'>
      <Sidebar className='sidebar' />
      <Switch>
        <Route path='/' exact>
          <Home className='home'/>
        </Route>
        <Route path='/search'>
          <Search className='search' />
        </Route>
        <Route path='/library'>
          <Library className='library' />
        </Route>
        <Route path='/create-playlist'>
          <CreatePlaylist className='createPlaylist' />
        </Route>
        <Route path='/liked-songs'>
          <LikedSongs className='songs' />
        </Route>
        <Route path='/playlist'>
          <Playlist className='songs' />
        </Route>
        <Route path='/podcast'>
          <Playlist className='songs' />
        </Route>
        <Route path='/see-all'>
          <SeeAll className='seeAll'/>
        </Route>
      </Switch>
      <FriendActivity className='friendSidebar' />
    </div>
  );
}

export default App;