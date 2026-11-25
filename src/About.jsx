import './CSS/About.css';

function About() {
    return (
        <section id="about">
            <div className="about-inner">
                <div className="about-text">
                    <p className="section-label">// A little about me</p>
                    <h2 className="section-title-black">About Me</h2>
                    <p className="about-description">
                        I'm Aiden Swanson, studying Information Systems at BYU's Marriott School
                        of Business with a machine learning emphasis and an expected graduation
                        in April 2028. I enjoy turning data into useful tools and understanding
                        how the systems behind them work.
                    </p>
                    <p>
                        My work spans Python research pipelines, machine learning for nonprofits,
                        and teaching practical AI skills at Leland. As an OpenAI Campus Lead at
                        BYU, I'm helping build a community where students can explore AI and
                        learn together. Outside of class, I'm studying neural networks in PyTorch
                        and running a Proxmox homelab for self-hosted apps and home automation.
                    </p>
                    <p>
                        I'm from Draper, Utah, and love skiing, lacrosse, and the outdoors.
                        Before college, I spent two years serving as a church missionary in
                        New England and Luanda, Angola, where I became fluent in Portuguese
                        and learned to adapt and lead in unfamiliar environments.
                    </p>
                </div>
                <img src="/images/headshot.JPG" alt="Aiden Swanson" />
            </div>
        </section>
    );
}

export default About;
