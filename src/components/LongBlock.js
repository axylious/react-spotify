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
               src: 'images/liked-songs.png'
            },
            {
               className: 'longTile podcast',
               title: 'Simple Programmer Podcast 058: Statue of Liberty',
               src: 'images/simple-programmer.png'
            },
            {
               className: 'longTile podcast',
               title: 'How Did You Calculate That Return?',
               src: 'images/chooseFI.png'
            },
            {
               className: 'longTile podcast',
               title: 'Simple Programmer Podcast 058: Statue of Liberty',
               src: 'images/simple-programmer.png'
            },
            {
               className: 'longTile podcast',
               title: 'Simple Programmer Podcast 058: Statue of Liberty',
               src: 'images/simple-programmer.png'
            },
         ],         
         seeAll: true,
      }
   }


   render() {
      return (
         <div className={this.props.className}>

            <Link to={{
               pathname: '/playlist',
               state: {title: this.state.tiles[0].title}
            }}><LongTile className={this.state.tiles[0].className} title={this.state.tiles[0].title} src={this.state.tiles[0].src}/>
            </Link>
   
            <Link to={{
               pathname: '/podcast',
               state: {title: this.state.tiles[1].title,}
            }}><LongTile className={this.state.tiles[1].className} title={this.state.tiles[1].title} src={this.state.tiles[1].src}/>
            </Link>
   
            <Link to={{
               pathname: '/podcast',
               state: {title: 'ChooseFi | Financial Independence Podcast'}
            }}><LongTile className={this.state.tiles[2].className} title={this.state.tiles[2].title} src={this.state.tiles[2].src}/>
            </Link>
   
            <Link to={{
               pathname: '/podcast',
               state: {title: 'Learn to Code'}
            }}><LongTile className='longTile podcast' title='Coding Bootcamp 101: An Honest Review of FullStack Academy with Buddy Galletti' src='images/one-month.png' />
            </Link>
            
            <Link to={{
               pathname: '/podcast',
               state: {title: 'JavaScript Jabber'}
            }}><LongTile className='longTile podcast' title='Creeds of Craftsmanship - JSJ 505' src='images/javascript-jabber.png' />
            </Link>
   
            <Link to={{
               pathname: '/playlist',
               state: {title: 'The House is Burning'}
            }}><LongTile className='longTile' title='The House is Burning' src='images/thib-Isaiah-Rashad.png' />
            </Link>
   
            <Link to={{
               pathname: '/playlist',
               state: {title: 'Daily Mix 1'}
            }}><LongTile className='longTile' title='Daily Mix 1' src='images/daily-mix-1.png' />
            </Link>
   
            <Link to={{
               pathname: '/playlist',
               state: {title: 'The Melodic Blue'}
            }}><LongTile className='longTile' title='The Melodic Blue' src='images/the-melodic-blue-Baby-Keem.png' />
            </Link>
         </div>
      )
   }
}

// const LongBlock = ({className}) => {
//    return (
//       <div className={className}>
//          <Link to={{
//             pathname: '/playlist',
//             state: {title: 'Liked Songs'}
//          }}><LongTile className='longTile' title='Liked Songs' src='images/liked-songs.png'/>
//          </Link>

//          <Link to={{
//             pathname: '/podcast',
//             state: {
//                title: 'Simple Programmer Podcast',}
//          }}><LongTile className='longTile podcast' title='Simple Programmer Podcast 058: Statue of Liberty' src='images/simple-programmer.png' />
//          </Link>

//          <Link to={{
//             pathname: '/podcast',
//             state: {title: 'ChooseFi | Financial Independence Podcast'}
//          }}><LongTile className='longTile podcast' title='How Did You Calculate That Return?' src='images/chooseFI.png' />
//          </Link>

//          <Link to={{
//             pathname: '/podcast',
//             state: {title: 'Learn to Code'}
//          }}><LongTile className='longTile podcast' title='Coding Bootcamp 101: An Honest Review of FullStack Academy with Buddy Galletti' src='images/one-month.png' />
//          </Link>
         
//          <Link to={{
//             pathname: '/podcast',
//             state: {title: 'JavaScript Jabber'}
//          }}><LongTile className='longTile podcast' title='Creeds of Craftsmanship - JSJ 505' src='images/javascript-jabber.png' />
//          </Link>

//          <Link to={{
//             pathname: '/playlist',
//             state: {title: 'The House is Burning'}
//          }}><LongTile className='longTile' title='The House is Burning' src='images/thib-Isaiah-Rashad.png' />
//          </Link>

//          <Link to={{
//             pathname: '/playlist',
//             state: {title: 'Daily Mix 1'}
//          }}><LongTile className='longTile' title='Daily Mix 1' src='images/daily-mix-1.png' />
//          </Link>

//          <Link to={{
//             pathname: '/playlist',
//             state: {title: 'The Melodic Blue'}
//          }}><LongTile className='longTile' title='The Melodic Blue' src='images/the-melodic-blue-Baby-Keem.png' />
//          </Link>
//       </div>
//    )
// }

LongBlock.defaultProps = {
   className: '',
}

LongBlock.propTypes = {
   className: PropTypes.string,
}

export default LongBlock
