
function CookieItem(props){

    return(
        <div className="cookie-container" key={props.cookie.id}>
        <img src={props.cookie.image} alt={props.cookie.name} className="cookie-image"/>
        <p>{props.cookie.name}</p>
        <p>{props.cookie.price} KWD</p>
      </div>
    );
}

export default CookieItem;