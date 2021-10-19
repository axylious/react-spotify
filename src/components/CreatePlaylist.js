import PropTypes from 'prop-types'

const CreatePlaylist = ({className}) => {
   return (
      <div className={className}>
         <h1>Create Playlist</h1>
      </div>
   )
}

CreatePlaylist.defaultProps = {
   className: '',
}

CreatePlaylist.propTypes = {
   className: PropTypes.string,
}

export default CreatePlaylist