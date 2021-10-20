import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import LongTile from './LongTile'

const LongBlock = ({className}) => {
   return (
      <div className={className}>
         <Link to={{
            pathname: '/playlist',
            state: {title: 'Liked Songs'}
         }}><LongTile className='longTile' title='Liked Songs' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Your Favorite Album'}
         }}><LongTile className='longTile' title='Your Favorite Album' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Liked Songs'}
         }}><LongTile className='longTile' title='Liked Songs' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Your Favorite Album'}
         }}><LongTile className='longTile' title='Your Favorite Album' />
         </Link>
         
         <Link to={{
            pathname: '/playlist',
            state: {title: 'Liked Songs'}
         }}><LongTile className='longTile' title='Liked Songs' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Your Favorite Album'}
         }}><LongTile className='longTile' title='Your Favorite Album' />
         </Link>
      </div>
   )
}

LongBlock.defaultProps = {
   className: '',
}

LongBlock.propTypes = {
   className: PropTypes.string,
}

export default LongBlock
