import PropTypes from 'prop-types'

const Search = ({className}) => {
   return (
      <div className={className}>
         <h1>Search</h1>
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
