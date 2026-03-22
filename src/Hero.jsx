import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './CSS/Hero.css';

const TERMINAL_LINES = [
    '$ python train.py --model transformer --epochs 50',
    '',
    'Loading dataset...        [████████████] 100%',
    'Initializing model...     params: 124M',
    '',
    'Epoch  1/50  loss: 2.4831  acc: 0.412',
    'Epoch 10/50  loss: 1.2047  acc: 0.731',
    'Epoch 25/50  loss: 0.6823  acc: 0.854',
    'Epoch 50/50  loss: 0.3102  acc: 0.921',
    '',
    'Evaluating on test set...',
    '  precision:  0.934',
    '  recall:     0.918',
    '  F1-score:   0.926',
    '',
    '✓ Model saved to ./checkpoints/best.pt',
];

function Hero() {
    const terminalBodyRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const el = terminalBodyRef.current;
        if (!el) return;

        const displayedLines = [];
        const tl = gsap.timeline({ delay: 0.6 });

        TERMINAL_LINES.forEach((line, i) => {
            tl.call(() => {
                displayedLines.push(line);
                el.textContent = displayedLines.join('\n');
                el.scrollTop = el.scrollHeight;
            }, null, i * 0.18);
        });

        tl.call(() => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power2.inOut',
                });
            }
        });

        return () => tl.kill();
    }, []);

    return (
        <section id="hero">
            <div className="hero-left">
                <p className="hero-greeting">Hi, I'm</p>
                <h1 className="hero-name">Aiden Swanson</h1>
                <h2 className="hero-title">
                    Data Scientist &amp; <span className="hero-title-accent">ML Engineer</span>
                </h2>
                <p className="hero-bio">
                    I build end-to-end machine learning systems — from raw data pipelines
                    to production model deployment. Focused on NLP, computer vision,
                    and making models that actually work in the real world.
                </p>
                <div className="hero-ctas">
                    <a href="#projects" className="btn btn--primary">View Projects</a>
                    <a href="#footer" className="btn btn--ghost">Get in Touch</a>
                </div>
            </div>

            <div className="hero-right">
                <div className="terminal-card">
                    <div className="terminal-header">
                        <span className="terminal-dot terminal-dot--red" />
                        <span className="terminal-dot terminal-dot--yellow" />
                        <span className="terminal-dot terminal-dot--green" />
                        <span className="terminal-title">train.py</span>
                    </div>
                    <pre className="terminal-body" ref={terminalBodyRef} />
                    <span className="terminal-cursor" ref={cursorRef}>▋</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
