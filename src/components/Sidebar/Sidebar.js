import PropTypes from 'prop-types'
import {useState} from 'react'
import axios from 'axios'
import {NavLink, Link} from 'react-router-dom'
import { HomeOutlined, Search, LibraryMusicOutlined, AddBox, FavoriteBorder } from '@mui/icons-material';
import './sidebar.css'

const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'

const Sidebar = ({className, token}) => {
   console.log(token)
   const DemoSidebar = () => {
      return (
         <div className='sidePlaylists'>
            <Link to={{
               pathname: '/playlist',
               state: {title: 'Playlist #1'},
            }} className='playlists'> Playlist #1
            </Link>

            <Link to={{
               pathname: '/playlist',
               state: {title: 'RapCaviar'},
            }} className='playlists'>RapCaviar</Link>
            <Link to={{
               pathname: '/playlist',
               state: {title: 'Liked from Radio'},
            }} className='playlists'>Liked from Radio</Link>
            <Link to={{
               pathname: '/playlist',
               state: {title: 'Discover Weekly'},
            }} className='playlists'>Discover Weekly</Link>
         </div>
      )
   }

   const UserSidebar = (token) => {
      const [data, setData] = useState({})

      const handleGetPlaylists = async () => {
         return axios.get(PLAYLIST_ENDPOINT, {
            headers: {
               Accept: 'application/json',
               Authorization: 'Bearer ' + token,
               'Content-Type': 'application/json',
            },
         }).then((res) => {
            setData(res.data)
            console.log(data)
         }).catch((err) => {
            console.log(err)
         })
      }

      handleGetPlaylists()

      return (
         <>
            {data?.items ? data.items.map((item) => <a href={item.href}>{item.name}</a>) : null}
         </>
      )
   }

   return (
      <div className={className}>
         <div className='sideGroup'>
            <NavLink exact to='/'>
               <HomeOutlined sx={{
                  position: 'relative',
                  mr: 1.5,
               }}/>
               Home
            </NavLink>

            <NavLink to='/search'>
               <Search sx={{
                  position: 'relative',
                  mr: 1.5,
               }}/>
               Search
            </NavLink>

            <NavLink to='/library'>
               <LibraryMusicOutlined sx={{
                  position: 'relative',
                  mr: 1.5,
               }}/>
               Your Library
            </NavLink>
         </div>
         
         
         <Link to='/create-playlist'>
            <AddBox sx={{
               position: 'relative',
               mr: 1.5,
            }}/>
            Create Playlist
         </Link>

         <Link to='/liked-songs'>
            <FavoriteBorder sx={{
               position: 'relative',
               mr: 1.5,
            }}/>
            Liked Songs
         </Link>
         <hr/>
         {token ? <UserSidebar /> : <DemoSidebar />}
      </div>
   )
}

Sidebar.defaultProps = {
   className: '',
}

Sidebar.propTypes = {
   className: PropTypes.string,
}

export default Sidebar