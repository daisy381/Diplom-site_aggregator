//library
import React from 'react';

//style
import {HomeContainer} from "./style";
import {ImgContainer, ImgSC} from "../Profile/style";
import bg from "../../img/pages/bg-profile.jpg";

function Home() {
    return (
        <HomeContainer>
            <ImgContainer>
                <ImgSC src={bg}/>
            </ImgContainer>
        </HomeContainer>
    );
}

export default Home;