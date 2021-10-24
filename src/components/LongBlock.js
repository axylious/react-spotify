import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import LongTile from './LongTile'

const LongBlock = ({className}) => {
   return (
      <div className={className}>
         <Link to={{
            pathname: '/playlist',
            state: {title: 'Liked Songs'}
         }}><LongTile className='longTile' title='Liked Songs' src='images/liked-songs.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {
               title: 'Simple Programmer Podcast',}
         }}><LongTile className='longTile podcast' title='Simple Programmer Podcast 058: Statue of Liberty' src='images/simple-programmer.png' />
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'ChooseFi | Financial Independence Podcast'}
         }}><LongTile className='longTile podcast' title='How Did You Calculate That Return?' src='images/chooseFI.png' />
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Learn to Code'}
         }}><LongTile className='longTile podcast' title='Coding Bootcamp 101: An Honest Review of FullStack Academy with Buddy Galletti' src='images/one-month.png' />
         </Link>
         
         <Link to={{
            pathname: '/podcast',
            state: {title: 'JavaScript Jabber'}
         }}><LongTile className='longTile podcast' title='Creeds of Craftsmanship - JSJ 505' src='images/javascript-jabber.png' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'The House is Burning'}
         }}><LongTile className='longTile' title='The House is Burning' src='images/thib-Isaiah-Rashad.png' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 1'}
         }}><LongTile className='longTile' title='Daily Mix 1' src='images/daily-mix-1.png' />
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'The Melodic Blue'}
         }}><LongTile className='longTile' title='The Melodic Blue' src='images/the-melodic-blue-Baby-Keem.png' />
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
