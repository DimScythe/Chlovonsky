import ShopImage from "../ShopImage.png"
import "../App.css";
import CookieList from "./CookieList";


function Home(){
      return (
      <div>
        <div>
          <h1>Chlovonsky</h1>
          <h2>How I got the recipe:</h2>
          <p>One day I was watching a British Twitch Streamer
             and he was baking some cookies and I asked for the
             recipe and I got it from him and I started selling it
             :D
          </p>
          <img 
            src={ShopImage} alt="Cookie Shop front store" class="center"
            height={350}
            width={350}/>
        </div>
        <CookieList/>
      </div>
      );
}

export default Home;
