import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import WorkTimeline from './WorkTimeline.jsx';
import Interests from './Interests.jsx';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <WorkTimeline />
                <Projects />
                <Skills />
                <About />
                <Interests />
            </main>
            <Footer />
        </>
    );
}

export default App;
