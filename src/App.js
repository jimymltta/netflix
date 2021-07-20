// Imports

import "./App.css";
import Section from "./components/Section";
import Netflix from "./Netflix_2015_logo.svg";
import data from "./movies_vze0mn.json";

// App

function App() {
  return (
    <div className="app">
      {/* Header of the app */}
      <div className="header">
        <img src={Netflix} alt="" />
      </div>

      {/* Main part of the app */}
      <div className="container">
        <ul>
          {data.map((elem, index) => {
            return <Section title={elem.title} image={elem.list} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
