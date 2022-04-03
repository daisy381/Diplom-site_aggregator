//library
import React from 'react';
import {Link} from "react-router-dom";

//style
import {
    NotFoundContainer,
    CardContainer,
    H1Container,
    PContainer,
    ButtonContainer
} from "./style";

function NotFound() {
    return (
        <NotFoundContainer>
            <CardContainer/>
            <H1Container>Page Not Found</H1Container>
            <PContainer>Oops! Looks like you followed a bad link.
                If you think this is a problem with us, please tell us.
            </PContainer>
            <ButtonContainer as={Link} to={"/"}>
                Go back Home
            </ButtonContainer>

        </NotFoundContainer>
    );
}

export default NotFound;