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
            },
            {
               title: 'Choose FI | Financial Independence Podcast',
               src: 'images/chooseFI.png',
               desc: 'Jonathan Mendonsa & Brad Barrett | Choose FI',
            },
            {
               title: 'Learn to Code',
               src: 'images/one-month.png',
               desc: 'One Month',
            },
            {
               title: 'JavaScript Jabber',
               src: 'images/javascript-jabber.png',
               desc: 'Top End Devs',
            },
            {
               title: 'Developer Tea',
               src: 'images/developer-tea.png',
               desc: 'Jonathan Cutrell',
            },
            {
               title: 'Coding Blocks',
               src: 'images/coding-blocks.png',
               desc: 'Coding Blocks',
            },
         ],
         className: 'tile podcast',
         pathname: '/podcast',      
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

ShowsBlock.defaultProps = {
   className: '',
   title: '',
}

ShowsBlock.propTypes = {
   className: PropTypes.string,
   title: PropTypes.string,
}

export default ShowsBlock
