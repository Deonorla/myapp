import { useEffect, useState } from "react";
import MeetupList  from "../components/meetups/MeetupList";
import classes from './allmeetups.module.css';

function AllMeetupsPage(){
 const [isLoading, setIsLoading ] = useState(true);
 const [loadedMeetups, setLoadedMeetups ] = useState([]);

 useEffect(() =>{

   fetch(
      'https://my-meetups-4ad57-default-rtdb.firebaseio.com/meetups.json'
   ).then(response => {
    return response.json(); 
   }).then( (data) =>{
      const meetups = [];

      for( const key in data){
      const meetup = {
         id:key,
         ...data[key]
      };
       meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups); 
   })
 }, []);
  

   if(isLoading){
      return <section>
         <h3>Loading.........</h3>
      </section>
   }

 return(
    <section> 
     <h1 className={classes.meetup__page__header}>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
      
    </section>
 )
     
 
}
export default AllMeetupsPage;  