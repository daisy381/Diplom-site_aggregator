//library
import React from 'react';

//Style
import {
    ButtonContainer,
    ImgSC
} from "../../mainStyle";
import {
    ButtonGhostContainer,
    ButtonGroup,
    DescContainer,
    ImgContainer,
    TextContainer,
    TitleContainer,
    WelcomeContainer
} from "./style";

//Images
import bg from "../../../img/pages/Home/bg.svg";

function WelcomeSection() {
    return (
        <WelcomeContainer>
            <TextContainer>
                <ButtonGhostContainer
                    type="primary">
                    Easily community
                </ButtonGhostContainer>
                <TitleContainer>
                    Your Solutions For Community!
                </TitleContainer>
                <DescContainer>
                    More than 2 billion people in over countries use socibook
                    to stay in touch with friends & family.
                </DescContainer>
                <ButtonGroup>
                    <ButtonContainer
                        type="primary">
                        About More
                    </ButtonContainer>
                    <ButtonGhostContainer
                        type="primary">
                        Invite Friend
                    </ButtonGhostContainer>
                </ButtonGroup>
            </TextContainer>
            <ImgContainer>
                <ImgSC src={bg}/>
            </ImgContainer>
        </WelcomeContainer>
    );
}

export default WelcomeSection;