import React, {useState} from 'react';
import {Header} from "./components/header/header";
import {LandingPage} from "./components/landingPage/landingPage";
import ReactPageScroller from "react-page-scroller";
import {Footer} from "./components/footer/footer";
import {Project} from "./components/projects/project";
import {followTheAlpha, noOnesShoes, portfolioPage} from "./components/projects/projectsData";
import {About} from "./components/about/aboutSection";
import {ContactSection} from "./components/contact/contactSection";
import {MobileTemplate} from "./components/mobileTemplate/mobileTemplate";
import {useMediaQuery} from 'react-responsive';


export const App = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (number) => {
        setCurrentPage(number)
    };

    const pageChanger = (number) => {
        setCurrentPage(Number(number))
    };

    const isMobile = useMediaQuery({query: "(max-device-width: 1224px)"});

    return (
        <>
        {isMobile
        ? <>
            <Header isMobile={isMobile}/>
            <MobileTemplate />
            <Footer />
            </>
            : <>
                <Header pageChanger={pageChanger} />
               <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
                   <LandingPage />
                   <About />
                   <Project project={noOnesShoes} />
                   <Project project={followTheAlpha} />
                   <Project project={portfolioPage} />
                   <ContactSection />
               </ReactPageScroller>
                <Footer/>
            </>
        }
        </>
    )
};


