import PropTypes from 'prop-types'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import Tile from './Tile'

class ForYouBlock extends Component {
   constructor() {
      super()
      this.state={
         tiles: [
            {
               title: 'Daily Mix 1',
               src: 'images/daily-mix-1.png',
               desc: 'Isaiah Rashad, Jaden, MAVI and more',
            },
            {
               title: 'Daily Mix 2',
               src: 'images/daily-mix-2.png',
               desc: 'Ear Ringers, Souly Had, Nieman and more',
            },
            {
               title: 'Daily Mix 3',
               src: 'images/daily-mix-3.png',
               desc: 'Parcels, RAC, Matt DiMona and more',
            },
            {
               title: 'Daily Mix 4',
               src: 'images/daily-mix-4.png',
               desc: 'AUDREY NUNA, Afrojack, binki and more',
            },
            {
               title: 'Daily Mix 5',
               src: 'images/daily-mix-5.png',
               desc: 'Abhi The Nomad, Cemetery Drive, Ibra and more',
            },
            {
               title: 'Daily Mix 6',
               src: 'images/daily-mix-6.png',
               desc: 'Ryan Leahan, Still Woozy, CHROMA and more',
            },
         ],
         className: 'tile',
         pathname: '/playlist',      
         seeAll: true,
      }
   }

   render() {
      return (
         <>
         <h2>{this.props.title}</h2>
         <div className={this.props.className}>
            <Link to={{
               pathname: this.state.pathname,
               state: {title: this.state.tiles[0].title}
            }}><Tile className={this.state.className} title={this.state.tiles[0].title} src={this.state.tiles[0].src} desc={this.state.tiles[0].desc}/>
            </Link>
   
            <Link to={{
               pathname: this.state.pathname,
               state: {title: this.state.tiles[1].title}
            }}><Tile className={this.state.className} title={this.state.tiles[1].title} src={this.state.tiles[1].src} desc={this.state.tiles[1].desc}/>
            </Link>
   
            <Link to={{
               pathname: this.state.pathname,
               state: {title: this.state.tiles[2].title}
            }}><Tile className={this.state.className} title={this.state.tiles[2].title} src={this.state.tiles[2].src} desc={this.state.tiles[2].desc}/>
            </Link>
   
            <Link to={{
               pathname: this.state.pathname,
               state: {title: this.state.tiles[3].title}
            }}><Tile className={this.state.className} title={this.state.tiles[3].title} src={this.state.tiles[3].src} desc={this.state.tiles[3].desc}/>
            </Link>
   
            <Link to={{
               pathname: this.state.pathname,
               state: {title: this.state.tiles[4].title}
            }}><Tile className={this.state.className} title={this.state.tiles[4].title} src={this.state.tiles[4].src} desc={this.state.tiles[4].desc}/>
            </Link>
   
            <Link to={{
               pathname: this.state.pathname,
               state: {title: this.state.tiles[5].title}
            }}><Tile className={this.state.className} title={this.state.tiles[5].title} src={this.state.tiles[5].src} desc={this.state.tiles[5].desc}/>
            </Link>
         </div>
         </>
      )
   }
}

ForYouBlock.defaultProps = {
   className: '',
   title: '',
}

ForYouBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default ForYouBlock
