import { useEffect, useRef, useState } from 'react';
import './CSS/WorkTimeline.css';

// Latest role details supplied by Aiden; dates take precedence over the earlier resume.
const EXPERIENCE = [
    {
        company: 'State Farm', role: 'Agent Team Member', dates: 'Jul 2024 – May 2026',
        location: 'Provo, Utah · On-site', employment: 'Part-time', start: 2024.5, end: 2026.42, mark: 'SF',
        logo: '/images/logos/1953-SF-logo.png',
        details: ['Managed client data and multi-state insurance portfolios in Salesforce CRM at Kim Jasperson State Farm.'],
    },
    {
        company: 'BYU · Marriott School of Business', role: 'BYU Marriott Research Fellow', dates: 'Oct 2024 – Jul 2025',
        location: 'Provo, Utah · Hybrid', employment: 'Part-time', start: 2024.75, end: 2025.58, mark: 'Y',
        logo: '/images/logos/BYU_Stretch_Y_Logo.png',
        details: [
            'Selected for a BYU faculty research assistant role after submitting an unpublished literature review on quantum machine learning, examining practical limitations including noise, errors, scalability, and hardware requirements.',
            'Built Python pipelines with Pandas and NumPy to clean, transform, and model behavioral datasets for faculty research.',
            'Automated data processing and created statistical visualizations to support research analysis.',
        ],
    },
    {
        company: 'Leland', role: 'AI Builder Program Intern', dates: 'May – Aug 2026',
        location: 'Lehi, Utah · On-site', employment: 'Internship', start: 2026.33, end: 2026.67, mark: 'L',
        logo: '/images/logos/joinleland_logo.jpg',
        details: [
            'Authored Modules 2–4 of the four-module Level 3 AI Builder curriculum and contributed substantially to Module 1.',
            'Developed instructor materials for teaching custom AI agents, system prompts, subagents, shared knowledge, and evaluations.',
            'Contributed to curriculum across the program and supported instructors and learners across Levels 1–4, from AI fundamentals to agent workflows and orchestration.',
            'Created lessons covering Claude, ChatGPT, Hermes, n8n, VPS and cloud agent deployment, and shared knowledge bases as part of a seven-person team.',
        ],
    },
    {
        company: 'OpenAI', role: 'Campus Lead, OpenAI Student Collective', dates: 'Sep 2026 – present',
        location: 'Provo, Utah', employment: 'OpenAI Student Collective · BYU', start: 2026.67, end: 2027, mark: 'O',
        logo: '/images/logos/open-ai-logo-png_seeklogo-428036.png',
        details: [
            'Serve as the OpenAI Student Collective Campus Lead at Brigham Young University.',
            'Co-hosted two workshops on using AI tools effectively, including one with more than 230 attendees.',
            'Help students apply AI to their work and learning, and coordinate access to OpenAI-provided AI plans through campus workshops.',
        ],
    },
];

function CompanyLogo({ job }) {
    const [failed, setFailed] = useState(false);
    return <span className="work-mark" aria-hidden="true">
        {failed ? job.mark : <img src={job.logo} alt="" onError={() => setFailed(true)} />}
    </span>;
}
const LAYERS = [3, 5, 5, 4, 3];
const points = LAYERS.map((count, layer) => Array.from({ length: count }, (_, node) => ({
    x: 80 + layer * 260, y: 210 + (node - (count - 1) / 2) * 65,
})));

export default function WorkTimeline() {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [replay, setReplay] = useState(0);
    const [selected, setSelected] = useState(null);
    const detailsRef = useRef(null);
    const cardRefs = useRef([]);
    const activeJob = selected === null ? null : EXPERIENCE[selected];

    useEffect(() => {
        if (selected === null || !detailsRef.current) return;
        detailsRef.current.focus({ preventScroll: true });
        detailsRef.current.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
            block: 'nearest',
        });
    }, [selected]);

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
                                <button type="button" className="work-card" ref={el => { cardRefs.current[i] = el; }}
                                    aria-expanded={selected === i} aria-controls="work-details"
                                    onClick={() => setSelected(selected === i ? null : i)}>
                                    <CompanyLogo job={job} />
                                    <span className="work-card-copy"><strong className="work-company">{job.company}</strong><span className="work-role">{job.role}</span><span className="work-dates">{job.dates}</span><span className="work-location">{job.location}</span></span>
                                </button>
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
            <p className="work-caption"><span /> Select a role to explore my work.</p>
            {activeJob && <div id="work-details" className="work-details" role="region" aria-labelledby="work-details-title" tabIndex={-1} ref={detailsRef}>
                <button type="button" className="work-details-close" aria-label="Close role details" onClick={() => {
                    const previous = selected;
                    setSelected(null);
                    cardRefs.current[previous]?.focus();
                }}>Close ×</button>
                <p className="section-label">// Experience</p>
                <div className="work-details-heading"><CompanyLogo key={activeJob.company} job={activeJob} /><h3 id="work-details-title">{activeJob.role}</h3></div>
                <p className="work-details-meta">{activeJob.company} · {activeJob.employment}</p>
                <p className="work-details-meta">{activeJob.dates} · {activeJob.location}</p>
                <ul>{activeJob.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            </div>}
        </section>
    );
}
