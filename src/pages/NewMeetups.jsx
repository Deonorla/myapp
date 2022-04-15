import { useNavigate } from 'react-router-dom';
import Newmeetupform from "../components/meetups/Newmeetupform";
import './Addnewmeetup.css';
function NewMeetups(){
  const Navigate = useNavigate();
    function onAddmeetupHandler(meetupData){
        fetch(
            'https://my-meetups-4ad57-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type':'appplication/json'
                }

            }
        ).then(()=>{
            Navigate('/');
        });
    }

   return(
       <div>
             <h2 className=" newmeetup__header-title" >Add New Meetup</h2>
             <Newmeetupform onAddmeetup={onAddmeetupHandler}/>
             
       </div>
   )
}
export default NewMeetups;