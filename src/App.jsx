import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <Contact/>
        </>
    )
}
export default App
