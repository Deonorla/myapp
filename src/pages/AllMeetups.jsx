import MeetupList  from "../components/meetups/MeetupList";
import classes from './allmeetups.module.css';
const dummy__data =[
   {
      id:1,
      title:'This is the first meetup',
      image: '../assets/dribble1.png',
      address: 'lekki toll gate, lagos',
      description: 'This is a first , amazing meetup which you definitely shouls not miss.'
   },
   {
      id:2,
      title:'This is the second meetup',
      image: '../assets/Atricks-min.png',
      address: 'maitama, cresent street, Abuja',
      description: 'This is a second , amazing meetup which you definitely shouls not miss.'
   }
];

function AllMeetupsPage(){
 return(
    <section> 
     <h1 className={classes.meetup__page__header}>All Meetups</h1>
      <MeetupList meetups={dummy__data}/>
      
    </section>
 )
     
 
}
export default AllMeetupsPage;  