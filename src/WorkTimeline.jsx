import { useEffect, useRef, useState } from 'react';
import './CSS/WorkTimeline.css';

// Work history transcribed from Aiden_Swanson_AI_Resume.docx.
const EXPERIENCE = [
    { company: 'BYU · Marriott School of Business', role: 'Data Research Assistant', dates: 'Oct 2024 – Jul 2025', location: 'Provo, Utah', start: 2024.75, end: 2025.58, mark: 'Y' },
    { company: 'Kim Jasperson · State Farm', role: 'Agent Team Member', dates: 'Aug 2025 – May 2026', location: 'Provo, Utah', start: 2025.58, end: 2026.42, mark: 'SF' },
    { company: 'Leland', role: 'AI Curriculum Intern', dates: 'May – Aug 2026', location: 'Lehi, Utah', start: 2026.33, end: 2026.67, mark: 'L' },
    { company: 'OpenAI Student Collective · BYU', role: 'OpenAI Campus Lead', dates: 'Sep 2026 – present', location: 'Brigham Young University', start: 2026.67, end: 2027, mark: 'O' },
];
const LAYERS = [3, 5, 5, 4, 3];
const points = LAYERS.map((count, layer) => Array.from({ length: count }, (_, node) => ({
    x: 80 + layer * 260, y: 210 + (node - (count - 1) / 2) * 65,
})));

export default function WorkTimeline() {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [replay, setReplay] = useState(0);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) { setStarted(true); return; }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
        }, { threshold: 0.3 });
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="work-section" ref={sectionRef} aria-labelledby="work-title">
            <div className="work-heading">
                <div><p className="section-label">// Experience</p><h2 id="work-title">A timeline of my work.</h2></div>
                <button type="button" className="work-replay" onClick={() => { setStarted(true); setReplay(value => value + 1); }}>↻ Replay reveal</button>
            </div>
            <div key={replay} className={`work-stage ${started ? 'is-running' : ''}`} style={{ '--entry-count': EXPERIENCE.length }}>
                <div className="work-scroll" role="region" aria-label="Work timeline, scroll horizontally on smaller screens" tabIndex={0}>
                    <div className="work-chart">
                        <div className="work-axis" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <span key={i} style={{ left: `${i / 3 * 100}%` }}>{2024 + i}</span>)}</div>
                        <ol className="work-entries">
                            {EXPERIENCE.map((job, i) => <li key={job.company} className={`work-entry work-entry--${i % 2 ? 'bottom' : 'top'}`} style={{ '--slot': i }}>
                                <article className="work-card">
                                    <span className="work-mark" aria-hidden="true">{job.mark}</span>
                                    <div><h3>{job.company}</h3><p className="work-role">{job.role}</p><p className="work-dates">{job.dates}</p><p className="work-location">{job.location}</p></div>
                                </article>
                                <svg className="work-connector" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
                                    <polyline
                                        points={`${i * 250 + 115},${i % 2 ? 265 : 142} ${i * 250 + 115},${i % 2 ? 254 : 162} ${((job.start + job.end) / 2 - 2024) / 3 * 1000},${i % 2 ? 254 : 162} ${((job.start + job.end) / 2 - 2024) / 3 * 1000},${(i % 2 ? 235 + i * 2 : 185 - i * 2) + 2.5}`}
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                                <span className="work-duration" aria-hidden="true" style={{ '--start': `${(job.start - 2024) / 3 * 100}%`, '--length': `${(job.end - job.start) / 3 * 100}%` }} />
                            </li>)}
                        </ol>
                    </div>
                </div>
                <svg className="work-network" viewBox="0 0 1200 420" aria-hidden="true">
                    {points.slice(0, -1).map((layer, l) => <g key={`edges-${l}`} style={{ '--delay': `${0.3 + l * 0.65}s` }} className="network-layer">
                        {layer.flatMap((a, i) => points[l + 1].map((b, j) => <g key={`${i}-${j}`}>
                            <line className="network-wire" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
                            <line className="network-signal" pathLength="1" style={{ '--pulse': `${0.3 + l * 0.65 + (i + j) * 0.035}s` }} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
                        </g>))}
                    </g>)}
                    {points.map((layer, l) => <g key={`nodes-${l}`} className="network-layer" style={{ '--delay': `${0.3 + l * 0.65}s` }}>
                        {layer.map((node, i) => <circle key={i} className="network-node" cx={node.x} cy={node.y} r="9" style={{ '--pulse': `${l * 0.65 + i * 0.05}s` }} />)}
                        <text x={layer[0].x} y="390" textAnchor="middle">{l === 0 ? 'INPUT' : l === 4 ? 'OUTPUT' : `HIDDEN ${l}`}</text>
                    </g>)}
                </svg>
            </div>
            <p className="work-caption"><span /> Experience, connected over time.</p>
        </section>
    );
}
