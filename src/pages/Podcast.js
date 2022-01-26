import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

const Podscast = ({className}) => {
   let location = useLocation();

   return (
      <div className={className}>
         <h1>{location.state.title}</h1>
      </div>
   )
}

Podscast.defaultProps = {
   className: '',
   title: '',
}

Podscast.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default Podscast