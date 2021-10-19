import PropTypes from 'prop-types'
import {NavLink, Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Sidebar = ({className}) => {
   return (
      <div className={className}>
         <div className='sideGroup'>
            <NavLink exact to='/'>
               <HomeOutlinedIcon sx={{
                  position: 'relative',
                  mr: 1.5,
               }}/>
               Home
            </NavLink>

            <NavLink to='/search'>
               <SearchIcon sx={{
                  position: 'relative',
                  mr: 1.5,
               }}/>
               Search
            </NavLink>

            <NavLink to='/library'>
               <LibraryMusicOutlinedIcon sx={{
                  position: 'relative',
                  mr: 1.5,
               }}/>
               Your Library
            </NavLink>
         </div>
         
         
         <Link to='/create-playlist'>
            <AddBoxIcon sx={{
               position: 'relative',
               mr: 1.5,
            }}/>
            Create Playlist
         </Link>

         <Link to='/liked-songs'>
            <FavoriteBorderIcon sx={{
               position: 'relative',
               mr: 1.5,
            }}/>
            Liked Songs
         </Link>

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