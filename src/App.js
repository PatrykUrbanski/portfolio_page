import React from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";


function App() {
  return (
      <>
          <Header/>
        <ReactPageScroller>
          <LandingPage />
          <LandingPage />
        </ReactPageScroller>
          <Footer/>
      </>
  );
}

export default App;
