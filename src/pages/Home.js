import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tile from '../components/Tile'
import LongTile from '../components/LongTile'
import { Component } from 'react'

class Home extends Component {
   constructor() {
      super()
      this.state = {
         blocks: [
            {
               'tiles': [
                  {
                     'className': 'longTile',
                     'title': 'Liked Songs',
                     'src': 'images/liked-songs.png',
                     'pathname': '/playlist',
                     'desc': ''
                  },
                  {
                     'className': 'longTile podcast',
                     'title': 'Simple Programmer Podcast 058: Statue of Liberty',
                     'src': 'images/simple-programmer.png',
                     'pathname': '/podcast',
                     'desc': ''
                  },
                  {
                     'className': 'longTile podcast',
                     'title': 'How Did You Calculate That Return?',
                     'src': 'images/chooseFI.png',
                     'pathname': '/podcast',
                     'desc': ''
                  },
                  {
                     'className': 'longTile podcast',
                     'title': 'Coding Bootcamp 101: An Honest Review of FullStack Academy with Buddy Galletti',
                     'src': 'images/one-month.png',
                     'pathname': '/podcast',
                     'desc': ''
                  },
                  {
                     'className': 'longTile podcast',
                     'title': 'Creeds of Craftsmanship - JSJ 505',
                     'src': 'images/javascript-jabber.png',
                     'pathname': '/podcast',
                     'desc': ''
                  },
                  {
                     'className': 'longTile',
                     'title': 'The House is Burning',
                     'src': 'images/thib-Isaiah-Rashad.png',
                     'pathname': '/playlist',
                     'desc': ''
                  },
                  {
                     'className': 'longTile',
                     'title': 'Daily Mix 1',
                     'src': 'images/daily-mix-1.png',
                     'pathname': '/playlist',
                     'desc': ''
                  },
                  {
                     'className': 'longTile',
                     'title': 'The Melodic Blue',
                     'src': 'images/the-melodic-blue-Baby-Keem.png',
                     'pathname': '/playlist',
                     'desc': ''
                  },
               ],
               'className': 'longBlock'
            },
            {
               'tiles': [
                  {
                     'title': 'Daily Mix 1',
                     'src': 'images/daily-mix-1.png',
                     'desc': 'Isaiah Rashad, Jaden, MAVI and more',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Mix 2',
                     'src': 'images/daily-mix-2.png',
                     'desc': 'Ear Ringers, Souly Had, Nieman and more',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Mix 3',
                     'src': 'images/daily-mix-3.png',
                     'desc': 'Parcels, RAC, Matt DiMona and more',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Mix 4',
                     'src': 'images/daily-mix-4.png',
                     'desc': 'AUDREY NUNA, Afrojack, binki and more',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Mix 5',
                     'src': 'images/daily-mix-5.png',
                     'desc': 'Abhi The Nomad, Cemetery Drive, Ibra and more',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Mix 6',
                     'src': 'images/daily-mix-6.png',
                     'desc': 'Ryan Leahan, Still Woozy, CHROMA and more',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Discover Weekly',
                     'src': 'images/discover-weekly.png',
                     'desc': 'Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Drive',
                     'src': 'images/daily-drive.png',
                     'desc': 'A mix of news and music made for you',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Daily Wellness',
                     'src': 'images/daily-wellness.png',
                     'desc': 'A mix of music and wellness to guide you through your entire day',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Release Radar',
                     'src': 'images/release-radar.png',
                     'desc': 'Catch all the latest music from artists you follow, plus nuew singles picked for you. Updates every Friday.',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
               ],
               'title': 'Made for You',
               'className': 'block',
            },
            {
               'tiles': [
                  {
                     'title': 'Simple Programmer',
                     'src': 'images/simple-programmer.png',
                     'desc': 'John Sonmez',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'Choose FI | Financial Independence Podcast',
                     'src': 'images/chooseFI.png',
                     'desc': 'Jonathan Mendonsa & Brad Barrett | Choose FI',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'Learn to Code',
                     'src': 'images/one-month.png',
                     'desc': 'One Month',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'JavaScript Jabber',
                     'src': 'images/javascript-jabber.png',
                     'desc': 'Top End Devs',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'Developer Tea',
                     'src': 'images/developer-tea.png',
                     'desc': 'Jonathan Cutrell',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'Coding Blocks',
                     'src': 'images/coding-blocks.png',
                     'desc': 'Coding Blocks',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
               ],
               'title': 'Your shows',
               'className': 'block',
            },
            {
               'tiles': [
                  {
                     'title': 'AG Club Mix',
                     'src': 'images/AG-Club-mix.png',
                     'desc': 'Zaia, Omar Apollo, IDK and more',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Isaiah Rashad Radio',
                     'src': 'images/Isaiah-Rashad-radio.png',
                     'desc': 'By Spotify',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Platinum Green',
                     'src': 'images/platinum-green-Ryan-Leahan.png',
                     'desc': 'Ryan Leahan',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Abhi The Nomad',
                     'src': 'images/Abhi-the-Nomad.png',
                     'desc': 'Artist',
                     'className': 'tile artist',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'A-Wall',
                     'src': 'images/A-Wall.png',
                     'desc': 'Artist',
                     'className': 'tile artist',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'The Melodic Blue',
                     'src': 'images/the-melodic-blue-Baby-Keem.png',
                     'desc': 'Baby Keem',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Get Turnt',
                     'src': 'images/get-turnt.png',
                     'desc': 'Mode: Turnt',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Parcels',
                     'src': 'images/Parcels.png',
                     'desc': 'Artist',
                     'className': 'tile artist',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': "The Sun's Tirade",
                     'src': 'images/TST-Isaiah-Rashad.png',
                     'desc': 'Isaiah Rashad',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Liquid',
                     'src': 'images/liquid-Tommy-Newport.png',
                     'desc': 'Tommy Newport',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Cilvia Demo',
                     'src': 'images/cilvia-demo-Isaiah-Rashad.png',
                     'desc': 'Isaiah Rashad',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Isaiah Rashad Mix',
                     'src': 'images/Isaiah-Rashad-mix.png',
                     'desc': 'AG Club, Buddy, Bas, and more',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Leo',
                     'src': 'images/leo-cosmic.png',
                     'desc': 'Tracks for The Lion',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
               ],
               'title': 'Jump back in',
               'className': 'block',
            },
            {
               'tiles': [
                  {
                     'title': 'Mike Irish',
                     'src': 'images/Mike-Irish.png',
                     'desc': 'Artist',
                     'className': 'tile artist',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Dan+Axel',
                     'src': 'images/blend.png',
                     'desc': 'A blend of music for Dan and Axel. Updates daily.',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Simple Programmer Podcast',
                     'src': 'images/simple-programmer.png',
                     'desc': 'John Sonmez',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'LIKE THAT',
                     'src': 'images/LORD$OFDOGTOWN.png',
                     'desc': 'LORD$OFDOGTOWN',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Up in Flames',
                     'src': 'images/up-in-flames-Laszewo.png',
                     'desc': 'Łaszewo',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Choose FI | Financial Independence Podcast',
                     'src': 'images/chooseFi.png',
                     'desc': 'Jonathan Mendonsa & Brad Barrett | Choose FI',
                     'className': 'tile podcast',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Learn to Code',
                     'src': 'images/one-month.png',
                     'desc': 'One Month',
                     'className': 'tile podcast',
                     'pathname': '/podcast',
                  },
                  {
                     'title': 'AG Club',
                     'src': 'images/AG-Club.png',
                     'desc': 'Artist',
                     'className': 'tile artist',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Theworstthing',
                     'src': 'images/theworstthing-Parcels.png',
                     'desc': 'Parcels',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Long Term Effects of SUFFERING',
                     'src': 'images/LTEoS-$uicideboy$.png',
                     'desc': '$uicideboy$',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'Liquid',
                     'src': 'images/liquid-Tommy-Newport.png',
                     'desc': 'Tommy Newport',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': "I Don't Want to Talk",
                     'src': 'images/IDWtT-Wallows.png',
                     'desc': 'Wallows',
                     'className': 'tile',
                     'pathname': '/playlist',
                  },
                  {
                     'title': 'The Melodic Blue',
                     'src': 'images/the-melodic-blue-Baby-Keem.png',
                     'desc': 'Baby Keem',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'The House Is Burning',
                     'src': 'images/THIB-Isaiah-Rashad.png',
                     'desc': 'Isaiah Rashad',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': "The Sun's Tirade",
                     'src': 'images/TST-Isaiah-Rashad.png',
                     'desc': 'Isaiah Rashad',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Cilvia Demo',
                     'src': 'images/cilvia-demo-Isaiah-Rashad.png',
                     'desc': 'Isaiah Rashad',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Abhi vs The Universe',
                     'src': 'images/AvTU-Abhi-The-Nomad.png',
                     'desc': 'Abhi The Nomad',
                     'className': 'tile',
                     'pathname': '/playlist', 
                  },
                  {
                     'title': 'Isaiah Rashad',
                     'src': 'images/Isaiah-Rashad.png',
                     'desc': 'Isaiah Rashad',
                     'className': 'tile artist',
                     'pathname': '/playlist', 
                  },
               ],
               'title': 'Recently played',
               'className': 'block',
            }
         ],
         'screen': 0,
      }

      this.updateScreenWidth = this.updateScreenWidth.bind(this)
   }

   componentDidMount() {
      this.updateScreenWidth()
      window.addEventListener('resize', this.updateScreenWidth)
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.updateScreenWidth)
   }

   updateScreenWidth() {
      this.setState({'screen': window.innerWidth})
   }



   render() {
      return (
         <div className={this.props.className}>
            <h1>
               Good
               {dayOrNight()}
            </h1>
            {
               this.state.blocks.map((block, i) => {
                  return(
                     i < 1 ? 
                     <div className={block.className}>
                        {
                           block.tiles.slice(0, (
                              this.state.screen < 1920 ?
                              this.state.screen <= 1024 ?
                              4 :
                              6 : block.tiles.length
                              )).map(tile => {
                              return(
                                 <Link to={{
                                    pathname: tile.pathname,
                                    state: {title: tile.title}
                                 }}><LongTile className={tile.className} title={tile.title} src={tile.src} />                                    
                                 </Link>
                              )
                           })
                        }
                     </div>
                     :
                     <>
                     <div className='blockHead'>
                        <h2>{block.title}</h2>
                        <Link className='seeAll-btn' to={{
                           pathname: '/see-all',
                           state: {
                              title: block.title,
                              tiles: block.tiles
                           }
                        }}>SEE ALL</Link>
                     </div>
                     <div className={block.className}>
                        {
                           block.tiles.slice(0, (
                              this.state.screen < 1920 ? 
                              this.state.screen <= 1440 ? 
                              this.state.screen < 1280 ?
                              this.state.screen < 1080 ?
                              this.state.screen <= 768 ?
                              2 : 4 :
                              3 : 4 :
                              5 : 6 
                           )).map(tile => {
                              return(
                                 <Link to={{
                                    pathname: tile.pathname,
                                    state: {title: tile.title}
                                 }}><Tile className={tile.className} title={tile.title} src={tile.src} desc={tile.desc} />
                                 </Link>
                              )
                           })
                        }
                     </div>
                     </>
                  )
               })
            }
         </div>
      )
   }
}

function dayOrNight() {
   let hour = new Date().getHours();
   let ampm = hour <= 12 ? ' morning' : 
      (hour >= 18) ? ' evening' : ' afternoon';

   return ampm 
}

Home.defaultProps = {
   className: '',
}

Home.propTypes = {
   className: PropTypes.string,
}

export default Home
