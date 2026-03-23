import './CSS/About.css';

function About() {
    return (
        <section id="about">
            <div className="about-inner">
                <div className="about-text">
                    <p className="section-label">//</p>
                    <h2 className="section-title-black">About Me</h2>
                    <p className="about-description"> I am Aiden Swanson, a junior Information Systems student at BYU's Marriott School of Business with a focus on machine learning, data engineering, and applied AI. 
                    </p>
                    <p>I am from Draper, Utah where I grew to love skiing, lacrosse, and the outdoors. Before my time in college I volunteered 2 years of my life to be a church missionary in the New England area and Luanda, Angola where I became fluent in Portuguese and learned to lead through challenges everyday in new environments.
                    </p>
                    <p>For this 2026 Summer I'm actively looking for a new opportunity to gain experience in the field of machine learning and data engineering.    
                    </p>
                </div>
                <img src="/images/headshot.JPG" alt="Profile Image" />
            </div>
        </section>
    );
}

export default About;
