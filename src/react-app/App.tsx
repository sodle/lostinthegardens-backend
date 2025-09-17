// src/App.tsx
import { Link } from "react-router";
import "./App.css";
import iosAppStoreButton from "./assets/ios-appstore-button.svg";

function App() {
  return (
    <>
      <div>
        <img
          src="litg_logo.png"
          className="app-logo-hero"
          alt="Lost in the Gardens app logo"
        />
      </div>
      <h1>Lost in the Gardens</h1>
      <h2>Explore the Denver Botanic Gardens with confidence.</h2>
      <div>
        <h3>Get the app</h3>
        <p>
          <a href="https://apps.apple.com/us/app/lost-in-the-gardens/id6751761489">
            <img src={iosAppStoreButton} />
          </a>
        </p>
      </div>
      <div>
        <h3>Source code</h3>
        <p>
          <a href="https://github.com/sodle/lost_in_the_gardens">iOS app</a> |{" "}
          <a href="https://github.com/sodle/lostinthegardens-android">
            Android app
          </a>{" "}
          (work in progress) |{" "}
          <a href="https://github.com/sodle/lostinthegardens-backend">
            Website/Backend
          </a>
        </p>
      </div>
      <div>
        Copyright ©️ 2025 Scott Odle | <Link to="/privacy">Privacy Policy</Link>
      </div>
    </>
  );
}

export default App;
