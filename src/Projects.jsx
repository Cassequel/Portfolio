import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './CSS/Projects.css';

const PROJECTS = [
    {
        title: 'Shop Orders Risk-Score Predictor',
        description: 'Predictive Linear Regression model for creating risk-scores to determine chance of fraud for online shopping orders.',
        image: './images/Shop_Pipeline.png',
        tags: ['Python', 'scikit-learn', 'Linear Regression', 'Pandas'],
        github: 'https://github.com/lincolnadams5/ShopPracticePipeline',
        demo: null,
    },
    {
        title: 'March Madness Bracket Predictor',
        description: 'Predictive model for forecasting NCAA tournament outcomes using historical data and team statistics. Accuracy of 70%',
        image: '/images/march.jpeg',
        tags: ['Python', 'scikit-learn', 'Random Forest', 'Pandas'],
        github: 'https://github.com/Cassequel/brackets',
        demo: null,
    },
    {
        title: 'Ella-Rises Web App',
        description: "Full-Stack web application for non-profit women's empowerment organization. Built with Node.js with database and deployment on AWS",
        image: '/images/ella-rises.png',
        tags: ['Node.js', 'Express', 'EC2', 'AWS'],
        github: 'https://github.com/Cassequel/Ella-Rises-Non-Profit-Full-Stack-App-',
        demo: null,
    },
    {
        title: 'Silent Disco Streaming Application',
        description: 'Real-time audio streaming app for silent disco events. Built with Icecast for low-latency peer-to-peer audio transmission.',
        image: '/images/Silent-Disco.png',
        tags: ['Linux', 'Icecast', 'Liquidsoap'],
        github: 'https://github.com/Cassequel/Silent-Disco',
        demo: null,
    },
    {
        title: 'AI SOC-2 Compliance Tool | Hackathon Winner',
        description: 'Co-built an AI-powered SOC-2 compliance assistant that assists in evidence collection, identifies control gaps, and generates audit reports. Built with Python, TypeScript, and a React dashboard. 24-HR Hackathon',
        image: '/images/soc2.png',
        tags: ['Python-Django', 'React', 'TypeScript'],
        github: 'https://github.com/mspulsi/SOC2Tracker',
        demo: null,
    },
    {
        title: 'Raspberry Pi Smart-Mirror',
        description: 'Customizable smart mirror built on Raspberry Pi, displaying weather, current Spotify, personal calendar events, and a voice assistant. Built with Python and an HTML frontend.',
        image: null,
        tags: ['Python', 'Industry APIs', 'Raspberry Pi', 'SpeechRecognition'],
        github: '',
        demo: null,
    },
    {
        title: 'FUTURE: RAG-based AI Research Assistant for SOC-2',
        description: 'In development: Building a Retrieval-Augmented Generation (RAG) AI assistant to streamline SOC-2 compliance. The tool will leverage vector databases and LLMs to provide real-time guidance.',
        image: null,
        tags: ['Python', 'RAG', 'LLMs', 'Vector Databases'],
        github: null,
        demo: null,
    },
];

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

                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            )}

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
