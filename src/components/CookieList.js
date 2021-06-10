import cookies from "../cookies"
import "../App.css";
import CookieItem from "./CookieItem";

function CookieList(){
    const cookieList = cookies.map((cookie) =>{
        return <CookieItem cookie={cookie}/>;
      });

      return <div className="list-wrapper">{cookieList}</div>;
}

export default CookieList;