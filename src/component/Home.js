import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Image from "../images/model-s.jpg";
import Image2 from "../images/model-y.jpg";
import Image3 from "../images/model-3.jpg";
import Image4 from "../images/model-x.jpg";
import Image5 from "../images/solar-panel.jpg";
import Image6 from "../images/solar-roof.jpg";
import Image7 from "../images/accessories.jpg";

const Container = styled.div `
height:100vh;
`

function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg={Image}
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            />
            <Section
            title="Model Y"
            description="Order Online For Touchless Delivery"
            backgroundImg={Image2}
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            />
            <Section
            title="Model 3"
            description="Order Online For Touchless Delivery"
            backgroundImg={Image3}
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            />
            <Section
            title="Model X"
            description="Order Online For Touchless Delivery"
            backgroundImg={Image4}
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            /> 
            <Section
            title="Lowest Cost Solar Panels In America"
            description="Money-back guarantee"
            backgroundImg={Image5}
            leftBtnText = "Custom Order"
            rightBtnText = "Learn more"
            /> 
            <Section
            title="Lowest For New Roofs"
            description="Money-back guarantee"
            backgroundImg={Image6}
            leftBtnText = "Custom Order"
            rightBtnText = "Learn more"
            /> 
            <Section
            title="Accessories"
            description="Money-back guarantee"
            backgroundImg={Image7}
            leftBtnText = "Shop now"
            /> 
        </Container>
    )
}

export default Home
