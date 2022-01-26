import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import './playlist.css'

const Playlist = ({className}) => {
   let location = useLocation();

   return (
      <div className={className}>
         <h1>{location.state.title}</h1>
      </div>
   )
}

Playlist.defaultProps = {
   className: '',
   title: '',
}

Playlist.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default Playlist