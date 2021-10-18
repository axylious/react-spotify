import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = ({className}) => {
   return (
      <div className={className}>
         <Link to='/'><HomeOutlinedIcon />Home</Link>
         <Link to='/search'><SearchIcon />Search</Link>
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