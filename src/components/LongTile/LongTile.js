import PropTypes from 'prop-types'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './longTile.css'


const LongTile = ({title, className, src}) => {
   return (
      <div className={className}>
         <div className='tileWrapper'>
            <img src={src} alt={title} className='tilePic' />
            <h2>{title}</h2>
         </div>
         <PlayCircleIcon />
      </div>   
   )
}

LongTile.defaultProps = {
   className: '',
   title: '',
   src: '',
}

LongTile.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
   src: PropTypes.string,
}

export default LongTile