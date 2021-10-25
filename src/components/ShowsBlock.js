import PropTypes from 'prop-types'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import Tile from './Tile'

class ShowsBlock extends Component {
   constructor() {
      super()
      this.state={
         tiles: [
            {
               title: 'Simple Programmer',
               src: 'images/simple-programmer.png',
               desc: 'John Sonmez',
               className: 'tile podcast',
               pathname: '/podcast',
            },
            {
               title: 'Choose FI | Financial Independence Podcast',
               src: 'images/chooseFI.png',
               desc: 'Jonathan Mendonsa & Brad Barrett | Choose FI',
               className: 'tile podcast',
               pathname: '/podcast',
            },
            {
               title: 'Learn to Code',
               src: 'images/one-month.png',
               desc: 'One Month',
               className: 'tile podcast',
               pathname: '/podcast',
            },
            {
               title: 'JavaScript Jabber',
               src: 'images/javascript-jabber.png',
               desc: 'Top End Devs',
               className: 'tile podcast',
               pathname: '/podcast',
            },
            {
               title: 'Developer Tea',
               src: 'images/developer-tea.png',
               desc: 'Jonathan Cutrell',
               className: 'tile podcast',
               pathname: '/podcast',
            },
            {
               title: 'Coding Blocks',
               src: 'images/coding-blocks.png',
               desc: 'Coding Blocks',
               className: 'tile podcast',
               pathname: '/podcast',
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

ShowsBlock.defaultProps = {
   className: '',
   title: '',
}

ShowsBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default ShowsBlock
