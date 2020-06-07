import React from 'react';
import {LandingPage} from "../landingPage/landingPage";
import {About} from "../about/aboutSection";
import {Project} from "../projects/project";
import {followTheAlpha, noOnesShoes, portfolioPage} from "../projects/projectsData";
import {ContactSection} from "../contact/contactSection";
import {Element} from "react-scroll";

export const MobileTemplate = () => {
    return (
        <>
            <div id={"mobileTemplate"}>
                <LandingPage />
                <About />
                <Element name={"noOnesShoes"} />
                <Project project={noOnesShoes} />
                <Element name={"followTheAlpha"} />
                <Project project={followTheAlpha} />
                <Element name={"portfolioPage"} />
                <Project project={portfolioPage} />
                <ContactSection />
            </div>
        </>
    )
};
