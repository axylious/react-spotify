import PropTypes from 'prop-types'
import { Component } from 'react'
import Friend from './Friend'
import HideFriend from './HideFriend'

class FriendActivity extends Component {
   constructor() {
      super()
      this.state = {
         'screen': 0
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
      return(
         this.state.screen <= 874 ?
         (
            <div className='hidden'>
               <HideFriend className='hideFriend' />
               <HideFriend className='hideFriend' />
               <HideFriend className='hideFriend' />
               <HideFriend className='hideFriend' />
            </div>
         ) 
         :
         (
            <div className={this.props.className}>
               <h2>Friend Activity</h2>
               <Friend className='friend' />
               <Friend className='friend' />
               <Friend className='friend' />
               <Friend className='friend' />
            </div>
         )
      )
   }
}

FriendActivity.defaultProps = {
   className: '',
}

FriendActivity.propTypes = {
   className: PropTypes.string,
}

export default FriendActivity