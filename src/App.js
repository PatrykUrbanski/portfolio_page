import React from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";
import {Project} from "./components/projects/project";
import {followTheAlpha, noOnesShoes} from "./components/projects/projectsData";
import {About} from "./components/about/aboutSection";


function App() {
  return (
      <>
          <Header/>
        <ReactPageScroller>
            <LandingPage />
            <About />
            <Project project={followTheAlpha} />
            <Project project={noOnesShoes} />
        </ReactPageScroller>
          <Footer/>
      </>
  );
}

export default App;
