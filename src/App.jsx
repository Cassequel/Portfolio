import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </>
    );
}

export default App;
