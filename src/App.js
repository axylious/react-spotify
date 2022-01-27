import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import FriendActivity from './components/FriendActivity/FriendActivity'
import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Search from './pages/Search/Search'
import Library from './pages/Library/Library'
import CreatePlaylist from './pages/CreatePlaylist/CreatePlaylist';
import LikedSongs from './pages/LikedSongs/LikedSongs';
import Playlist from './pages/Playlist/Playlist'
import SeeAll from './components/SeeAll/SeeAll'
import Nav from './components/Nav/Nav';
import {getParams} from './pages/Login/Login'


const App = () => {
  useEffect(() => {
    if(window.location.hash) {
      const {access_token, token_type} = getParams(window.location.hash)

      sessionStorage.clear()
      sessionStorage.setItem('accessToken', access_token)
      sessionStorage.setItem('tokenType', token_type)
    }
  })

  const token = sessionStorage.getItem('accessToken')

  return (
    <div className='App'>
      <Sidebar className='sidebar' />
      <Nav className='nav' token={token}/>
      {token ?
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
      : console.log('no token') 
      }
      <FriendActivity className='friendSidebar' />
    </div>
  );
}

export default App;