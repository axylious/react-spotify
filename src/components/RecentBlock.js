import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from './Tile'

const RecentBlock = ({className, title, recent}) => {
   return (
      <>
      <h2>{title}</h2>
      <div className={className}>
         <Link to={{
            pathname: '/playlist',
            state: {title: 'Mike Irish'}
         }}><Tile className='tile artist' title='Mike Irish' desc='Artist'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Dan + Axel'}
         }}><Tile className='tile' title='Dan+Axel' desc='A blend of music for Dan and Axel. Updates daily.'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Simple Programmer Podcast'}
         }}><Tile className='tile podcast' title='Simple Programmer Podcast' desc='John Sonmez'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'LIKE THAT'}
         }}><Tile className='tile' title='LIKE THAT' desc='LORD$OFDOGTOWN'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Up in Flames'}
         }}><Tile className='tile' title='Up in Flames' desc='Łaszewo'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Choose FI | Financial Independence Podcast'}
         }}><Tile className='tile podcast' title='Choose FI | Financial Independence Podcast' desc='Jonathan Mendonsa & Brad Barrett | Choose FI'/>
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
