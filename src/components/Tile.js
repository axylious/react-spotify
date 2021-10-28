import PropTypes from 'prop-types'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const Tile = ({title, className, desc, src}) => {
   return (
      <div className={className}>
      <div>
         <img src={src} alt={title} className='tilePic' />
         <PlayCircleIcon />
      </div>
         <h2>{title}</h2>
         <p>{desc}</p>
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