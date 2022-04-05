import Meetupitem from './Meetupitem';
import './meetuplist.css'
function MeetupList(props){
 return(
     <div className='meetuplist__container'>
         {props.meetups.map((meetup) => {
             return(
                <Meetupitem 
                key={meetup.id}
                id={meetup.id} 
                image={meetup.image}
                title={meetup.title}
                address ={meetup.address}
                description ={meetup.description}  
            />
             )
         })}
           
     </div>
    
 )
}
export default MeetupList;