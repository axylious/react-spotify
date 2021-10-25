import PropTypes from 'prop-types'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import Tile from './Tile'

class RecentBlock extends Component {
   constructor() {
      super()
      this.state={
         tiles: [
            {
               title: 'Mike Irish',
               src: 'images/Mike-Irish.png',
               desc: 'Artist',
               className: 'tile artist',
               pathname: '/playlist',
            },
            {
               title: 'Dan+Axel',
               src: 'images/blend.png',
               desc: 'A blend of music for Dan and Axel. Updates daily.',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Simple Programmer Podcast',
               src: 'images/simple-programmer.png',
               desc: 'John Sonmez',
               className: 'tile podcast',
               pathname: '/podcast',
            },
            {
               title: 'LIKE THAT',
               src: 'images/LORD$OFDOGTOWN.png',
               desc: 'LORD$OFDOGTOWN',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Up in Flames',
               src: 'images/up-in-flames-Laszewo.png',
               desc: 'Łaszewo',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Choose FI | Financial Independence Podcast',
               src: 'images/chooseFi.png',
               desc: 'Jonathan Mendonsa & Brad Barrett | Choose FI',
               className: 'tile podcast',
               pathname: '/playlist',
            },
         ],
         seeAll: true,
      }
   }

   render() {
      return (
         <>
         <h2>{this.props.title}</h2>
         <div className={this.props.className}>
         {
            this.state.tiles.map(tile => {
               return(
                  <Link to={{
                  pathname: tile.pathname,
                  state: {title: tile.title}
                  }}><Tile className={tile.className} title={tile.title} src={tile.src} desc={tile.desc}/>
                  </Link>
               )
            })
         }
         </div>
         </>
      )
   }
}

RecentBlock.defaultProps = {
   className: '',
   title: '',
}

RecentBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default RecentBlock
