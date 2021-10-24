import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from './Tile'

const ForYouBlock = ({className, title}) => {
   return (
      <>
      <h2>{title}</h2>
      <div className={className}>
         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 1'}
         }}><Tile className='tile' title='Daily Mix 1' desc='Isaiah Rashad, Jaden, MAVI and more' src='images/daily-mix-1.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 2'}
         }}><Tile className='tile' title='Daily Mix 2' desc='Ear Ringers, Souly Had, Nieman and more' src='images/daily-mix-2.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 3'}
         }}><Tile className='tile' title='Daily Mix 3' desc='Parcels, RAC, Matt DiMona and more' src='images/daily-mix-3.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 4'}
         }}><Tile className='tile' title='Daily Mix 4' desc='AUDREY NUNA, Afrojack, binki and more' src='images/daily-mix-4.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 5'}
         }}><Tile className='tile' title='Daily Mix 5' desc='Abhi The Nomad, Cemetery Drive, Ibra and more' src='images/daily-mix-5.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Daily Mix 6'}
         }}><Tile className='tile' title='Daily Mix 6' desc='Ryan Leahan, Still Woozy, CHROMA and more' src='images/daily-mix-6.png'/>
         </Link>
      </div>
      </>
   )
}

ForYouBlock.defaultProps = {
   className: '',
   title: '',
}

ForYouBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default ForYouBlock
