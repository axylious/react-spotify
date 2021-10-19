import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Sidebar = ({className}) => {
   return (
      <div className={className}>
         <div className='sideGroup'>
            <Link to='/'>
               <HomeOutlinedIcon sx={{
                  position: 'relative',
                  top: 5,
                  mr: 1.5,
               }}/>
               Home
            </Link>

            <Link to='/search'>
               <SearchIcon sx={{
                  position: 'relative',
                  top: 5,
                  mr: 1.5,
               }}/>
               Search
            </Link>

            <Link to='/library'>
               <LibraryMusicOutlinedIcon sx={{
                  position: 'relative',
                  top: 5,
                  mr: 1.5,
               }}/>
               Your Library
            </Link>
         </div>
         
         
         <Link to='/create-playlist'>
            <AddBoxIcon sx={{
               position: 'relative',
               top: 5,
               mr: 1.5,
            }}/>
            Create Playlist
         </Link>

         <Link to='/liked-songs'>
            <FavoriteBorderIcon sx={{
               position: 'relative',
               top: 5,
               mr: 1.5,
            }}/>
            Liked Songs
         </Link>

         <div className='sidePlaylists'>
            <Link to='/playlist' className='playlists'>Playlist</Link>
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