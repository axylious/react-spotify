import PropTypes from 'prop-types'
import LongBlock from './LongBlock'

const Home = ({className}) => {
   return (
      <div className={className}>
         <h1>
            Good
            {dayOrNight()}
         </h1>
         <LongBlock className='longBlock' />
      </div>
   )
}

function dayOrNight() {
   let hour = new Date().getHours();
   let ampm = hour <= 12 ? ' morning' : 
      (hour >= 18) ? ' evening' : ' afternoon';

   return ampm 
}

Home.defaultProps = {
   className: '',
}

Home.propTypes = {
   className: PropTypes.string,
}

export default Home
