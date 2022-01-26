import PropTypes from 'prop-types'
import './library.css'

const Library = ({className}) => {
   return (
      <div className={className}>
         <h1>Your Library</h1>
      </div>
   )
}

Library.defaultProps = {
   className: 'library',
}

Library.propTypes = {
   className: PropTypes.string,
}

export default Library