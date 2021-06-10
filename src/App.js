import ShopImage from "./ShopImage.png"
import './App.css';
import cookies from "./cookies"

function App() {
  const cookieList = cookies.map((cookie) =>{
    return(
      <div className="cookie-container" key={cookie.id}>
        <img src={cookie.image} alt={cookie.name} className="cookie-image"/>
        <p>{cookie.name}</p>
        <p>{cookie.price} KWD</p>
      </div>
    );
  });
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
    <div className="list-wrapper">{cookieList}</div>
  </div>
  );
}

export default App;
