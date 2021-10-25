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
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Daily Mix 2',
               src: 'images/daily-mix-2.png',
               desc: 'Ear Ringers, Souly Had, Nieman and more',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Daily Mix 3',
               src: 'images/daily-mix-3.png',
               desc: 'Parcels, RAC, Matt DiMona and more',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Daily Mix 4',
               src: 'images/daily-mix-4.png',
               desc: 'AUDREY NUNA, Afrojack, binki and more',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Daily Mix 5',
               src: 'images/daily-mix-5.png',
               desc: 'Abhi The Nomad, Cemetery Drive, Ibra and more',
               className: 'tile',
               pathname: '/playlist',
            },
            {
               title: 'Daily Mix 6',
               src: 'images/daily-mix-6.png',
               desc: 'Ryan Leahan, Still Woozy, CHROMA and more',
               className: 'tile',
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

ForYouBlock.defaultProps = {
   className: '',
   title: '',
}

ForYouBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default ForYouBlock
