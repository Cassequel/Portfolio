import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './CSS/Projects.css';

const PROJECTS = [
    {
        title: 'Adversarial-Robust Network Traffic Classifier',
        description: 'Built an end-to-end ML pipeline to classify encrypted VPN traffic using MIT Lincoln Laboratory\'s VNAT dataset — no payload inspection, metadata only. Trained LightGBM/Random Forest/LR across two tasks (5-class traffic category F1: 0.865, VPN detection F1: 1.000), and implemented physically-constrained adversarial evasion attacks to stress-test and harden the classifier.',
        images: ['./images/vnat-front.png', './images/vnat-data.png'],
        tags: ['Python', 'LightGBM', 'scikit-learn', 'SHAP', 'PyWavelets', 'Adversarial ML', 'Streamlit'],
        github: 'https://github.com/Cassequel/Lincoln-Lab-VNAT-Classification',
        demo: null,
    },
    {
        title: 'Pag-asa Portal — Nonprofit ML Pipelines',
        description: 'Built and deployed four end-to-end machine learning pipelines for a nonprofit platform serving trafficking and abuse survivors in the Philippines. ',
        images: ['./images/pagasa-landing.png', './images/pagasa-overview.png', './images/pagasa-ml.png'],
        tags: ['Python', 'scikit-learn', 'Pandas', 'OLS Regression', 'Random Forest', 'FastAPI', 'Render'],
        github: 'https://github.com/lincolnadams5/intex-w26',
        demo: null,
    },  
    {
        title: 'Shop Orders Risk-Score Predictor',
        description: 'Predictive Linear Regression model for creating risk-scores to determine chance of fraud for online shopping orders.',
        images: ['./images/Shop_Pipeline.png'],
        tags: ['Python', 'scikit-learn', 'Linear Regression', 'Pandas', 'Vercel'],
        github: 'https://github.com/lincolnadams5/ShopPracticePipeline',
        demo: null,
    },
    {
        title: 'March Madness Bracket Predictor',
        description: 'Predictive model for forecasting NCAA tournament outcomes using historical data and team statistics. Accuracy of 70%',
        images: ['/images/march.jpeg'],
        tags: ['Python', 'scikit-learn', 'Random Forest', 'Pandas'],
        github: 'https://github.com/Cassequel/brackets',
        demo: null,
    },
    {
        title: 'Ella-Rises Public Website & Admin Dashboard',
        description: "Full-Stack web application for non-profit women's empowerment organization. Built with Node.js with database and deployment on AWS",
        images: ['/images/ella-rises.png'],
        tags: ['Node.js', 'Express', 'EC2', 'AWS'],
        github: 'https://github.com/Cassequel/Ella-Rises-Non-Profit-Full-Stack-App-',
        demo: null,
    },
    {
        title: 'AI SOC-2 Compliance Tool | Hackathon Winner',
        description: 'Co-built an AI-powered SOC-2 compliance assistant that assists in evidence collection, identifies control gaps, and generates audit reports. Built with Python, TypeScript, and a React dashboard. 24-HR Hackathon',
        images: ['/images/soc2.png'],
        tags: ['Python-Django', 'React', 'TypeScript'],
        github: 'https://github.com/mspulsi/SOC2Tracker',
        demo: null,
    },
    {
        title: 'Silent Disco Streaming Application',
        description: 'Real-time audio streaming app for silent disco events. Built with Icecast for low-latency peer-to-peer audio transmission.',
        images: ['/images/Silent-Disco.png'],
        tags: ['Linux', 'Icecast', 'Liquidsoap'],
        github: 'https://github.com/Cassequel/Silent-Disco',
        demo: null,
    },

    {
        title: 'Raspberry Pi Smart-Mirror',
        description: 'Customizable smart mirror built on Raspberry Pi, displaying weather, current Spotify, personal calendar events, and a voice assistant. Built with Python and an HTML frontend.',
        images: [],
        tags: ['Python', 'Industry APIs', 'Raspberry Pi', 'SpeechRecognition'],
        github: '',
        demo: null,
    },
    {
        title: 'FUTURE: Outdoor Climbing Send Scoring Algorithm',
        description: 'For ClimbArete, a startup competitive outdoor climbing app, I am developing a machine learning algorithm to score climbers\' sends (successful climbs) based on various factors like route difficulty, climber performance, and environmental conditions.',
        images: ['/images/arete.png'],
        tags: ['Python', 'scikit-learn', 'Pandas'],
        github: null,
        demo: null,
    },
];

function ImageCarousel({ images }) {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return <img src={images[0]} alt="project screenshot" className="project-image" />;
    }

    const prev = (e) => {
        e.stopPropagation();
        setIndex(i => (i - 1 + images.length) % images.length);
    };

    const next = (e) => {
        e.stopPropagation();
        setIndex(i => (i + 1) % images.length);
    };

    return (
        <div className="carousel">
            <img src={images[index]} alt={`project screenshot ${index + 1}`} className="project-image" />
            <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous image">&#8249;</button>
            <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next image">&#8250;</button>
            <div className="carousel-dots">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`carousel-dot${i === index ? ' carousel-dot--active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    />
                ))}
            </div>
        </div>
    );
}

function Projects() {
    const cardRefs = useRef([]);

    useEffect(() => {
        const cleanups = cardRefs.current.map(card => {
            if (!card) return null;

            const onEnter = () => {
                gsap.to(card, {
                    y: -6,
                    scale: 1.02,
                    boxShadow: '0 16px 48px rgba(59,130,246,0.18)',
                    duration: 0.22,
                    ease: 'power2.out',
                });
            };

            const onLeave = () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                    duration: 0.28,
                    ease: 'power2.inOut',
                });
            };

            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);

            return () => {
                card.removeEventListener('mouseenter', onEnter);
                card.removeEventListener('mouseleave', onLeave);
            };
        });

        return () => cleanups.forEach(fn => fn && fn());
    }, []);

    return (
        <section id="projects">
            <div className="projects-inner">
                <p className="section-label">// work</p>
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {PROJECTS.map((project, i) => (
                        <article
                            key={project.title}
                            className="project-card"
                            ref={el => (cardRefs.current[i] = el)}
                        >
                            <h3 className="project-title">{project.title}</h3>

                            <ImageCarousel images={project.images} />

                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FontAwesomeIcon icon={faGithub} /> GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link project-link--demo"
                                    >
                                        Live Demo ↗
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
