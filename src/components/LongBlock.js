import PropTypes from 'prop-types'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import LongTile from './LongTile'

class LongBlock extends Component {
   constructor() {
      super()
      this.state={
         tiles: [
            {
               className: 'longTile',
               title: 'Liked Songs',
               src: 'images/liked-songs.png',
               pathname: '/playlist',
            },
            {
               className: 'longTile podcast',
               title: 'Simple Programmer Podcast 058: Statue of Liberty',
               src: 'images/simple-programmer.png',
               pathname: '/podcast',
            },
            {
               className: 'longTile podcast',
               title: 'How Did You Calculate That Return?',
               src: 'images/chooseFI.png',
               pathname: '/podcast',
            },
            {
               className: 'longTile podcast',
               title: 'Coding Bootcamp 101: An Honest Review of FullStack Academy with Buddy Galletti',
               src: 'images/one-month.png',
               pathname: '/podcast',
            },
            {
               className: 'longTile podcast',
               title: 'Creeds of Craftsmanship - JSJ 505',
               src: 'images/javascript-jabber.png',
               pathname: '/podcast',
            },
            {
               className: 'longTile',
               title: 'The House is Burning',
               src: 'images/thib-Isaiah-Rashad.png',
               pathname: '/playlist',
            },
            {
               className: 'longTile',
               title: 'Daily Mix 1',
               src: 'images/daily-mix-1.png',
               pathname: '/playlist',
            },
            {
               className: 'longTile',
               title: 'The Melodic Blue',
               src: 'images/the-melodic-blue-Baby-Keem.png',
               pathname: '/playlist',
            },
         ],         
         seeAll: true,
      }
   }


   render() {
      return (
         <div className={this.props.className}>
         {
            this.state.tiles.map(tile => {
               return(
                  <Link to={{
                  pathname: tile.pathname,
                  state: {title: tile.title}
                  }}><LongTile className={tile.className} title={tile.title} src={tile.src}/>
                  </Link>
               )
            })
         }
         </div>
      )
   }
}


LongBlock.defaultProps = {
   className: '',
}

LongBlock.propTypes = {
   className: PropTypes.string,
}

export default LongBlock
