import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter city"
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-light btn-outline-secondary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Oslo</h1>
      <ul>
        <li>Wednessday 19:30</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="icon-temp-display">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              className="float-left"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 30%</li>
            <li>Windspeed: 4 km/h</li>
            <li>Percipitation: 15%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
