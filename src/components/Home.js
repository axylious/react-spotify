import PropTypes from 'prop-types'
import LongBlock from './LongBlock'

const Home = ({className}) => {
   return (
      <div className={className}>
         <LongBlock title='Good' className='longBlock' />
      </div>
   )
}

Home.defaultProps = {
   className: 'home',
}

Home.propTypes = {
   className: PropTypes.string,
}

export default Home
