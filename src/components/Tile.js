import PropTypes from 'prop-types'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const Tile = ({title, className}) => {
   return (
      <div className={className}>
         <div className='tileWrapper'>
            <div className='tilePic'></div>
            <h2>{title}</h2>
         </div>
         <PlayCircleIcon />
      </div>   
   )
}

Tile.defaultProps = {
   className: '',
   title: '',
}

Tile.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default Tile