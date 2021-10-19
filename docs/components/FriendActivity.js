import PropTypes from 'prop-types'
import Friend from './Friend'

const FriendActivity = ({className}) => {
   return (
      <div className={className}>
         <h2>Friend Activity</h2>
         <Friend className='friend' />
         <Friend className='friend' />
         <Friend className='friend' />
         <Friend className='friend' />
      </div>
   )
}

FriendActivity.defaultProps = {
   className: '',
}

FriendActivity.propTypes = {
   className: PropTypes.string,
}

export default FriendActivity