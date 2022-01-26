import PropTypes from 'prop-types'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import './hideFriend.css'

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
