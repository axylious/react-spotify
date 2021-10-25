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

            <Link to={{
               pathname: this.state.tiles[0].pathname,
               state: {title: this.state.tiles[0].title}
            }}><LongTile className={this.state.tiles[0].className} title={this.state.tiles[0].title} src={this.state.tiles[0].src}/>
            </Link>
   
            <Link to={{
               pathname: this.state.tiles[1].pathname,
               state: {title: this.state.tiles[1].title,}
            }}><LongTile className={this.state.tiles[1].className} title={this.state.tiles[1].title} src={this.state.tiles[1].src}/>
            </Link>
   
            <Link to={{
               pathname: this.state.tiles[2].pathname,
               state: {title: this.state.tiles[2].title}
            }}><LongTile className={this.state.tiles[2].className} title={this.state.tiles[2].title} src={this.state.tiles[2].src}/>
            </Link>
   
            <Link to={{
               pathname: this.state.tiles[3].pathname,
               state: {title: this.state.tiles[3].title}
            }}><LongTile className={this.state.tiles[3].className} title={this.state.tiles[3].title} src={this.state.tiles[3].src}/>
            </Link>
            
            <Link to={{
               pathname: this.state.tiles[4].pathname,
               state: {title: this.state.tiles[4].title}
            }}><LongTile className={this.state.tiles[4].className} title={this.state.tiles[4].title} src={this.state.tiles[4].src}/>
            </Link>
   
            <Link to={{
               pathname: this.state.tiles[5].pathname,
               state: {title: this.state.tiles[5].title}
            }}><LongTile className={this.state.tiles[5].className} title={this.state.tiles[5].title} src={this.state.tiles[5].src}/>
            </Link>
   
            <Link to={{
               pathname: this.state.tiles[6].pathname,
               state: {title: this.state.tiles[6].title}
            }}><LongTile className={this.state.tiles[6].className} title={this.state.tiles[6].title} src={this.state.tiles[6].src}/>
            </Link>
   
            <Link to={{
               pathname: this.state.tiles[7].pathname,
               state: {title: this.state.tiles[7].title}
            }}><LongTile className={this.state.tiles[7].className} title={this.state.tiles[7].title} src={this.state.tiles[7].src}/>
            </Link>
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
