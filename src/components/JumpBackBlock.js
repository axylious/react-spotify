import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from './Tile'

const JumpBackBlock = ({className, title}) => {
   return (
      <>
      <h2>{title}</h2>
      <div className={className}>
         <Link to={{
            pathname: '/playlist',
            state: {title: 'AG Club Mix'}
         }}><Tile className='tile' title='AG Club Mix' desc='Yeek, Isaiah Rashad, IDK and more' src='images/AG-Club-mix.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Isaiah Rashad Radio'}
         }}><Tile className='tile' title='Isaiah Rashad Radio' desc='By Spotify' src='images/Isaiah-Rashad-radio.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Platinum Green'}
         }}><Tile className='tile' title='Platinum Green' desc='Ryan Leahan' src='images/platinum-green-Ryan-Leahan.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Abhi The Nomad'}
         }}><Tile className='tile artist' title='Abhi The Nomad' desc='Artist' src='images/Abhi-the-Nomad.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'The Melodic Blue'}
         }}><Tile className='tile' title='The Melodic Blue' desc='Baby Keem' src='images/the-melodic-blue-Baby-Keem.png'/>
         </Link>

         <Link to={{
            pathname: '/playlist',
            state: {title: 'Get Turnt'}
         }}><Tile className='tile' title='Get Turnt' desc='Mode: Turnt' src='images/get-turnt.png'/>
         </Link>
      </div>
      </>
   )
}

JumpBackBlock.defaultProps = {
   className: '',
   title: '',
}

JumpBackBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default JumpBackBlock
