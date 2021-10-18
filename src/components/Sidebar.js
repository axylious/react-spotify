import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = ({className}) => {
   return (
      <div className={className}>
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
         <h2>Your Playlists</h2>

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