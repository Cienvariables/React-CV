import { useState } from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import More from "./components/More/More";

import { CV } from "./CV/CV";
const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (

    <div className="App">
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>

      <Hero hero={hero} />
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <About hero={hero} />
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
