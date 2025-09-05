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
        <a href="https://apps.apple.com/us/app/lost-in-the-gardens/id6751761489">
          <img src={iosAppStoreButton} />
        </a>
      </div>
      <div>
        Copyright ©️ 2025 Scott Odle | <Link to="/privacy">Privacy Policy</Link>{" "}
        |{" "}
        <a href="https://github.com/sodle/lost_in_the_gardens" target="_blank">
          Source Code (iOS)
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/sodle/lostinthegardens-backend"
          target="_blank"
        >
          Source Code (website/backend)
        </a>
      </div>
    </>
  );
}

export default App;
