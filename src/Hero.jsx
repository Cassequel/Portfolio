import './CSS/Hero.css';

function Hero() {
    return (
        <div id="hero">
            <div className="hero-card hero-text">
                <h1>CREATIVE DEVELOPER</h1>
                <p>In every work of genius we recognize our own rejected thoughts</p>
            </div>
            <div className="hero-card hero-image">
                <img src="/images/dennys.JPG" alt="pic of myself at dennys" />
            </div>
        </div>
    );
}

export default Hero;