import React from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";
import {Projects} from "./components/projects/projects";
import {FollowTheAlpha} from "./components/projects/followTheAlpha";
import {NoOnesShoes} from "./components/projects/noOnesShoes";


function App() {
  return (
      <>
          <Header/>

        <ReactPageScroller>
          <LandingPage />
          <FollowTheAlpha/>
          <NoOnesShoes/>
        </ReactPageScroller>
          <Footer/>
      </>
  );
}

export default App;
