import React from 'react';
import './meetupitem.css';
import Card from '../ui/Card';
function Meetupitem(props) {
  return (
       <Card>
            <div className='meetup__container'>
            
            <div className='meetup__img-container'>
              
                <img src={props.image} alt={props.title} className=" meetup__img"/>
            </div>
            <div className='meetup__data'>
                <h3 className='meetup__title'>{props.title}</h3>
                <address className='meetup__address'>{props.address}</address>
                <p className='meetup__description'>{props.description}</p>
            </div>
            <div className='meetup__button-container'> 
                <button className='meetup__button'>To Favourites</button>
            </div>
         
    </div>
       </Card>
      
    
    
  )
}

export default Meetupitem;