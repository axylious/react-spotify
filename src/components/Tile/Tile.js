import PropTypes from 'prop-types'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './tile.css'


const Tile = ({title, className, desc, src}) => {
   return (
      <div className={className}>
      <div className='imgWrapper'>
         <img src={src} alt={title} className='tilePic' />
         <PlayCircleIcon />
      </div>
      <div className='textWrapper'>
         <h2>{title}</h2>
         <p>{desc}</p>
      </div>
      </div>   
   )
}

Tile.defaultProps = {
   className: '',
   title: '',
   desc: '',
}

Tile.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
   desc: PropTypes.string,
}

export default Tile