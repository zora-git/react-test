import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <header>
        <form classNAme="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            className="search-form-input"
            id="search-form-input"
            required
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 id="city">Seoul</h1>
            <p>
              <span id="time">Saturday 18:51</span>
              <span id="weather-description">clear sky</span>
              <br />
              Humidity: <strong id="humidity">60</strong>, Wind:
              <strong id="wind-speed">3.6km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div className="weather-app-emoji" id="weather-emoji">
              🌥️
            </div>
            <div className="weather-app-temperature" id="temperature">
              3
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>
      <footer>
        Coded by <a href="https://github.com/zora-git">HJ Park</a>, code hosted
        on
        <a href="https://github.com/zora-git/react-test">GitHub</a>
        and website hosted on
        <a href="https://react-test-weather-dummy.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
