import { ProjectSection } from './Projects.jsx';

const HACKATHONS = [
    {
        title: 'Quantum Circuit Runtime Predictor',
        context: '2nd Place · Quantum Rings Challenge · Intermountain Quantum Competition 2026',
        description: 'Co-built a machine learning system at a quantum computing hackathon to predict how long circuits would take to run on the Quantum Rings simulator, without executing them. The pipeline extracts features from OpenQASM circuit structure and uses an ensemble of gradient-boosted regressors to estimate runtime.',
        images: [],
        techStack: [
            'Python · C++20 · CMake',
            'OpenQASM 2.0 / 3.0',
            'scikit-learn · Gradient boosting',
            'NumPy · pandas',
            'Structural feature engineering · Grouped cross-validation',
        ],
        github: 'https://github.com/eastpark02/qasm-runtime-predictor',
        website: 'https://www.quantumrings.com/news/intermountain-quantum-competition-2026',
    },
    {
        title: 'Lanyard — Find Your People at Conferences',
        context: 'Cloud Native Hackathon 2026 · Salt Lake City',
        description: 'Co-built a chat-based app to help conference attendees find the right people to connect with based on their background, goals, and specific questions. Profiles draw on bios, GitHub, and other professional sources to support relevant matches and meeting requests.',
        contribution: 'Focused on setting up Radar for Kubernetes management and Dash0 for error logging and tracing, along with OAuth and attendee onboarding.',
        images: [],
        techStack: [
            'Next.js · React · TypeScript',
            'PostgreSQL / Neon · Drizzle ORM',
            'OpenAI API · Elasticsearch',
            'OAuth · Auth.js',
            'Docker · Kubernetes · Radar',
            'OpenTelemetry · Dash0 · Gitar (GitHub coding agent)',
        ],
        github: 'https://github.com/akv-iu/Lanyard',
        website: 'https://triple-a.cnh.radarhq.io',
    },
];

export default function Hackathons() {
    return <ProjectSection id="hackathons" title="Hackathons" label="built in competition" projects={HACKATHONS} />;
}
