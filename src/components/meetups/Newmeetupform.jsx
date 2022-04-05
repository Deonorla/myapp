import Card from "../ui/Card";
import './Newmeetupform.css'
import  { useRef} from 'react';

const Newmeetupform =()=>{
    const titleInputRef = useRef();
    const imageInputRef =useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

function submitHandler(event){
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription
    };

    console.log(meetupData);
}

    return(
        
            <form className="form__page"  onSubmit={submitHandler} >
               <Card>
                <div className="form__container">
                    
                    <input className='form__input' placeholder="Meetup Title" type="text" required ref={titleInputRef}/>

                </div> 

                <div className="form__container">
                    
                    <input className='form__input'  type="text" required placeholder="Meetup Image" ref={imageInputRef}/>

                </div>

                <div className="form__container">
                    
                    <input  className='form__input' type="text" required placeholder="Address" ref={addressInputRef}/>

                </div>

                <div className="form__container">
                    
                    <textarea className='form__input' placeholder="Description" required id="description" row="7" ref={descriptionInputRef}/>

                </div>

                <div className="button__container">
                    <button className='button'>Add Meetup</button>
                </div>
                 </Card>
            </form>
        
    )
}
export default Newmeetupform;