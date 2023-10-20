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
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-light btn-outline-secondary"
            />
          </div>
        </div>
      </form>
      <h1>Oslo</h1>
      <ul>
        <li>Friday 19:30</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
          />
          <h2>6°C</h2>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 30%</li>
            <li>Windspeed: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
