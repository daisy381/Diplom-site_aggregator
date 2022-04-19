//library
import React from 'react';

//Sections
import WelcomeSection from "./WelcomeSection";
import AboutUsSection from "./AboutUsSection";
import AchievementSection from "./AchievementSection";

//Styles
import {
    MainContainer,
} from "./style";
import Footer from "../../components/Footer";

function Home() {
    return (
        <MainContainer>
            <WelcomeSection/>
            <AboutUsSection/>
            <AchievementSection/>
            <Footer/>
        </MainContainer>
    );
}

export default Home;