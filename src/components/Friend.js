import PropTypes from 'prop-types'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Friend = ({className}) => {
   return (
      <div className={className}>
         <div className='img'>
            <PersonOutlinedIcon sx={{
               position: 'relative',
               top: 7,
               left: 8,
               color: 'white',
               }} />
         </div>
         <button className='friendName'>Friends Name</button>
         <p className='lastPlayed'>2 hr</p>
         <div className='songInfo'>
            <button className='friendPlay' id='track'>Current Track </button>
            <button className='friendPlay' id='artist'>Artist</button>
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
