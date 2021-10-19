import PropTypes from 'prop-types'

const Playlist = ({className}) => {
   return (
      <div className={className}>
         <h1>Playlist</h1>
      </div>
   )
}

Playlist.defaultProps = {
   className: '',
}

Playlist.propTypes = {
   className: PropTypes.string,
}

export default Playlist