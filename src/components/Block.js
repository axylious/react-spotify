import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from './Tile'

const Block = (props) => {
   return (
      <>
      <h2>{props.title}</h2>
      <div className={props.className}>
      <Link to={{
         pathname: props.pathname,
         state: {title: props.title}
         }}><Tile className={props.className} title={props.title} src={props.src} desc={props.desc}/>
      </Link>
      </div>
      </>
   )
}


Block.defaultProps = {
   className: '',
   title: '',
   tiles: {},
}

Block.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
   tiles: PropTypes.object
}

export default Block
