import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <footer>
          <a
            href="https://github.com/soflil/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , hosted on{" "}
          <a
            href="https://startling-chebakia-9795cf.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          , by{" "}
          <a
            href="https://www.linkedin.com/in/sophie-schou-166b85278/"
            target="_blank"
            rel="noreferrer"
          >
            Sophie Schou
          </a>
        </footer>
      </div>
    </div>
  );
}
