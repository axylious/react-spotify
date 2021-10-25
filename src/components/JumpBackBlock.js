import PropTypes from 'prop-types'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import Tile from './Tile'

class JumpBackBlock extends Component {
   constructor() {
      super()
      this.state={
         tiles: [
            {
               title: 'AG Club Mix',
               src: 'images/AG-Club-mix.png',
               desc: 'Zaia, Omar Apollo, IDK and more',
               className: 'tile',
               pathname: '/playlist', 
            },
            {
               title: 'Isaiah Rashad Radio',
               src: 'images/Isaiah-Rashad-radio.png',
               desc: 'By Spotify',
               className: 'tile',
               pathname: '/playlist', 
            },
            {
               title: 'Platinum Green',
               src: 'images/platinum-green-Ryan-Leahan.png',
               desc: 'Ryan Leahan',
               className: 'tile',
               pathname: '/playlist', 
            },
            {
               title: 'Abhi The Nomad',
               src: 'images/Abhi-the-Nomad.png',
               desc: 'Artist',
               className: 'tile artist',
               pathname: '/playlist', 
            },
            {
               title: 'The Melodic Blue',
               src: 'images/the-melodic-blue-Baby-Keem.png',
               desc: 'Baby Keem',
               className: 'tile',
               pathname: '/playlist', 
            },
            {
               title: 'Get Turnt',
               src: 'images/get-turnt.png',
               desc: 'Mode: Turnt',
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

JumpBackBlock.defaultProps = {
   className: '',
   title: '',
}

JumpBackBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default JumpBackBlock
