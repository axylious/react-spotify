import PropTypes from 'prop-types'
import LongBlock from './LongBlock'
import RecentBlock from './RecentBlock'
import ForYouBlock from './ForYouBlock'
import ShowsBlock from './ShowsBlock'
import JumpBackBlock from './JumpBackBlock'

const Home = ({className}) => {
   return (
      <div className={className}>
         <h1>
            Good
            {dayOrNight()}
         </h1>
         <LongBlock className='longBlock' />
         <ForYouBlock className='block' title='Made For You' />
         <ShowsBlock className='block' title='Your shows' />
         <JumpBackBlock className='block' title='Jump back in' />
         <RecentBlock className='block' title='Recently Played' />
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
