import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
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
                <Skills />
                <About />
            </main>
            <Footer />
        </>
    );
}

export default App;
