import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Hackathons from './Hackathons.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Hackathons />
                <Skills />
                <About />
            </main>
            <Footer />
        </>
    );
}

export default App;
