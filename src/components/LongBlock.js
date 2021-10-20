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
            pathname: '/podcast',
            state: {
               title: 'Simple Programmer Podcast',}
         }}><LongTile className='longTile podcast' title='Simple Programmer Podcast 058: Statue of Liberty' />
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'ChooseFi | Financial Independence Podcast'}
         }}><LongTile className='longTile podcast' title='How Did You Calculate That Return?' />
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Learn to Code'}
         }}><LongTile className='longTile podcast' title='Coding Bootcamp 101: An Honest Review of FullStack Academy with Buddy Galletti' />
         </Link>
         
         <Link to={{
            pathname: '/podcast',
            state: {title: 'JavaScript Jabber'}
         }}><LongTile className='longTile podcast' title='Creeds of Craftsmanship - JSJ 505' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'The House is Burning'}
         }}><LongTile className='longTile' title='The House is Burning' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 1'}
         }}><LongTile className='longTile' title='Daily Mix 1' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'The Melodic Blues'}
         }}><LongTile className='longTile' title='The Melodic Blues' />
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
