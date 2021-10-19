import PropTypes from 'prop-types'

const LongBlock = ({title, className}) => {
   return (
      <div className={className}>
         <h1>
            {title}
            {dayOrNight()}
         </h1>
      </div>
   )
}


function dayOrNight() {
   let hour = new Date().getHours();
   let ampm = hour <= 12 ? ' morning' : 
      (hour >= 18) ? ' evening' : ' afternoon';

   return ampm 
}

LongBlock.defaultProps = {
   title: '',
   className: '',
}

LongBlock.propTypes = {
   title: PropTypes.string,
   className: PropTypes.string,
}

export default LongBlock
