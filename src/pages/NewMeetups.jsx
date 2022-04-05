import Newmeetupform from "../components/meetups/Newmeetupform";
import './Addnewmeetup.css';
function NewMeetups(){
   return(
       <div>
             <h2 className=" newmeetup__header-title" >Add New Meetup</h2>
             <Newmeetupform/>
             
       </div>
   )
}
export default NewMeetups;