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

function Home() {
    return (
        <MainContainer>
            <WelcomeSection/>
            <AboutUsSection/>
            <AchievementSection/>
        </MainContainer>
    );
}

export default Home;