import PropTypes from 'prop-types'

const Friend = ({className}) => {
   return (
      <div className={className}>
         {/* <img /> */}
         <button id='friendName'>Friends Name</button>
         <p className='lastPlayed'>2 hr</p>
         <div className='songInfo'>
            <button className='friendPlayTrack'>Current Track </button>
            <button className='friendPlayTrack'>Artist</button>
         </div>
         <button className='friendPlayAlbum'>Current Album</button>
      </div>
   )
}

Friend.defaultProps = {
   className: '',
}

Friend.propTypes = {
   className: PropTypes.string,
}

export default Friend
