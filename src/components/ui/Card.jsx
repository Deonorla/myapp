
import './Card.css';
const Card =(props)=>{
    return(
        <div className="card__view">
            {props.children}
        </div>
    )

}
export default Card;