import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from './Tile'

const RecentBlock = ({className, title}) => {
   return (
      <>
      <h2>{title}</h2>
      <div className={className}>
         <Link to={{
            pathname: '/playlist',
            state: {title: 'Mike Irish'}
         }}><Tile className='tile artist' title='Mike Irish' desc='Artist' src='images/Mike-Irish.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Dan + Axel'}
         }}><Tile className='tile' title='Dan+Axel' desc='A blend of music for Dan and Axel. Updates daily.' src='images/blend.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Simple Programmer Podcast'}
         }}><Tile className='tile podcast' title='Simple Programmer Podcast' desc='John Sonmez' src='images/simple-programmer.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'LIKE THAT'}
         }}><Tile className='tile' title='LIKE THAT' desc='LORD$OFDOGTOWN' src='images/LORD$OFDOGTOWN.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Up in Flames'}
         }}><Tile className='tile' title='Up in Flames' desc='Łaszewo' src='images/up-in-flames-Laszewo.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Choose FI | Financial Independence Podcast'}
         }}><Tile className='tile podcast' title='Choose FI | Financial Independence Podcast' desc='Jonathan Mendonsa & Brad Barrett | Choose FI' src='images/chooseFi.png'/>
         </Link>
      </div>
      </>
   )
}

RecentBlock.defaultProps = {
   className: '',
   title: '',
}

RecentBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default RecentBlock
