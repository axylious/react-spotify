import PropTypes from 'prop-types'
import {useLocation, Link} from 'react-router-dom'
import Tile from './Tile'

const SeeAll = ({className}) => {
   let location = useLocation()
   let tiles = location.state.tiles

   return (
      <div className={className}>
      <div className='blockHead'>
         <h2>{location.state.title}</h2>
         <Link to='/' className='seeAll-btn'>HOME</Link>
      </div>
      <div className='block'>
      {
         tiles.map(tile => {
            return(
               <Link to={{
                  pathname: tile.pathname,
                  state: {title: tile.title}
               }}><Tile className={tile.className} title={tile.title} src={tile.src} desc={tile.desc} />
               </Link>
            )
         })
      }
      </div>
   </div>
   )
}

SeeAll.defaultProps = {
   className: '',
   title: '',
}

SeeAll.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default SeeAll