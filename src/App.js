import React from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";
import {Projects} from "./components/projects/projects";


function App() {
  return (
      <>
          <Header/>

        <ReactPageScroller>
          <LandingPage />
          <Projects />
        </ReactPageScroller>
          <Footer/>
      </>
  );
}

export default App;
