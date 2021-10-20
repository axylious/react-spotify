import PropTypes from 'prop-types'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const LongTile = ({title, className}) => {
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

LongTile.defaultProps = {
   className: '',
   title: '',
}

LongTile.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default LongTile