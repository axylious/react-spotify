import PropTypes from 'prop-types'

const LikedSongs = ({className}) => {
   return (
      <div className={className}>
         <h1>Liked Songs</h1>
      </div>
   )
}

LikedSongs.defaultProps = {
   className: '',
}

LikedSongs.propTypes = {
   className: PropTypes.string,
}

export default LikedSongs