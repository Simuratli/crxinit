

import "./scss/app.scss";

function App() {
  return (
    <div className="chromify-container">
      <img
        src="/assets/icon48.png"
        alt="Chromify Logo"
        className="chromify-logo"
      />
      <h1 className="chromify-title">Welcome!</h1>
      <p className="chromify-desc">
        I am <b>Chromify</b>, your extension boilerplate.<br />Let's build something awesome!
      </p>
    </div>
  );
}

export default App;