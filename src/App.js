import React from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";
import {Project} from "./components/projects/project";
import {followTheAlpha, noOnesShoes} from "./components/projects/projectsData";


function App() {
  return (
      <>
          <Header/>
        <ReactPageScroller>
          <LandingPage />
          <Project project={followTheAlpha} />
          <Project project={noOnesShoes} />
        </ReactPageScroller>
          <Footer/>
      </>
  );
}

export default App;
