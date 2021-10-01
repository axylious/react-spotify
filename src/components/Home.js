import PropTypes from 'prop-types'

const Home = ({className}) => {
   return (
      <div className={className}>
         
      </div>
   )
}

Home.defaultProps = {
   className: '',
}

Home.propTypes = {
   className: PropTypes.string,
}

export default Home
