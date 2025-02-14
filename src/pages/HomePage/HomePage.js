// import { useState } from "react";
import styled from "styled-components";
// import CarouselEl from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const HomePageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border-radius: 20px;
    padding: 1rem 5rem 15rem 5rem;
    max-width: 80vw;
    margin: 0 auto;
    background-image: url("https://images.unsplash.com/photo-1526510335242-248dc3765086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: left;
    background-clip: border-box;
    border-radius: 20px;  
    @media (max-width: 768px) {
        max-width: 50vw;
        padding: 1rem 2rem 5rem 2rem;
        background-color: var(--green-pretty-color);
        background-image: none;
    }
    @media (max-width: 500px) {
        gap: 0.5rem;
        padding: 0;
    }
    @media (max-width: 399px) {
        padding: 0rem;
    }
`

const HomePage = (props) => {
    // =============
    // TODO revamp the carousel =======

    // const [ trails, setTrails ] = useState([
    //     { title: "Bridges & Rusty Car Loop", url: "https://www.hepburnadvocate.com.au/images/transform/v1/crop/frm/storypad-GMYchV3QgFfB8wrDyRmucJ/9ee96814-7109-46fc-93d1-c9036b16e06f.jpg/r0_0_1200_675_w1200_h675_fmax.jpg", content: "2.4 mi", review: 5},
    //     { title: "Pine Needle Trail", url: "https://miro.medium.com/v2/resize:fit:1280/format:webp/1*lMXRMqkC9Yn4JDKmyjFmBQ.jpeg", content: "3.0 mi", review: 4},
    //     { title: "Mt Washington via Ammonoosuc Ravine Trail", url: "https://myhikes.org/images_uploads/Ammonoosuc%20Ravine%20Jewell%20Trail%20Loop%20Mt%20Washington%20Mt%20Monroe%20June%204%202022%2FIMG_8427_20220605224241UTC_small.JPG", content: "DEATH 9.2mi", review: 1},
    // ])

    return (
        <HomePageContainer>
            <Hero />
            {/* <CarouselEl trails={trails} setTrails={setTrails} />               */}
            <Footer/>
        </HomePageContainer>
    )
}

export default HomePage