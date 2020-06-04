import React, {useEffect, useState} from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";
import {Project} from "./components/projects/project";
import {followTheAlpha, noOnesShoes} from "./components/projects/projectsData";
import {About} from "./components/about/aboutSection";
import {ContactSection} from "./components/contact/contactSection";


export const App = () => {
    const [currentPage, setCurrentPage] = useState("");

    const handlePageChange = (number) => {
        setCurrentPage(number)
    };

    const pageChanger = (number) => {
        setCurrentPage(number)
    };

    return (
      <>
          <Header pageChanger={pageChanger} />
            <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
                <LandingPage />
                <About />
                <Project project={followTheAlpha} />
                <Project project={noOnesShoes} />
                <ContactSection />
            </ReactPageScroller>
          <Footer/>
      </>
    );
};


