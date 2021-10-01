import PropTypes from 'prop-types'
import GetPlaylist from './GetPlaylist'


const Sidebar = ({className}) => {
   return (
      <div className={className}>
         
         <h2>Your Playlists</h2>

         <GetPlaylist />
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