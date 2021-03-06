import PropTypes from 'prop-types'
import './search.css'

const Search = ({className}) => {
   return (
      <div className={className}>
         <h2>Top Genres</h2>
      </div>
   )
}

Search.defaultProps = {
   className: 'search',
}

Search.propTypes = {
   className: PropTypes.string,
}

export default Search
