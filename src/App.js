import React, {useState} from "react";
import Header from './components/Header'
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";


export default function Home() {
    const [scrollElement, setScollElement] = useState(null)
    const [aboutSection, setAboutSection] = useState(null)


    return(
        <>
            <Header scrollElement={scrollElement} aboutSection={aboutSection} />
            <Works setScollElement={setScollElement} />
            <About setAboutSection={setAboutSection} />
            <Footer />
        </>
    )
}