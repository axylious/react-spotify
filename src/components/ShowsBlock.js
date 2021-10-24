import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from './Tile'

const ShowsBlock = ({className, title}) => {
   return (
      <>
      <h2>{title}</h2>
      <div className={className}>
         <Link to={{
            pathname: '/podcast',
            state: {title: 'Simple Programmer'}
         }}><Tile className='tile podcast' title='Simple Programmer' desc='John Sonmez' src='images/simple-programmer.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Choose FI | Financial Independence Podcast'}
         }}><Tile className='tile podcast' title='Choose FI | Financial Independence Podcast' desc='Jonathan Mendonsa & Brad Barrett | Choose FI' src='images/chooseFI.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Learn to Code'}
         }}><Tile className='tile podcast' title='Learn to Code' desc='One Month' src='images/one-month.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'JavaScript Jabber'}
         }}><Tile className='tile podcast' title='JavaScript Jabber' desc='Top End Devs' src='images/javascript-jabber.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Developer Tea'}
         }}><Tile className='tile podcast' title='Developer Tea' desc='Jonathan Cutrell' src='images/developer-tea.png'/>
         </Link>

         <Link to={{
            pathname: '/podcast',
            state: {title: 'Coding Blocks'}
         }}><Tile className='tile podcast' title='Coding Blocks' desc='Coding Blocks' src='images/coding-blocks.png'/>
         </Link>
      </div>
      </>
   )
}

ShowsBlock.defaultProps = {
   className: '',
   title: '',
}

ShowsBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default ShowsBlock
