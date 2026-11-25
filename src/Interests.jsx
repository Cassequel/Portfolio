import './CSS/Interests.css';

const LANGUAGES = [
    ['Portuguese', 'Fluent'],
    ['Spanish', 'Conversational'],
    ['Chinese', 'Practicing'],
    ['French', 'Practicing'],
    ['Italian', 'Practicing'],
];

const INTERESTS = ['Electronics', 'Quantum computing', 'Tennis', 'Film photography', 'House music'];

export default function Interests() {
    return (
        <section id="interests" className="interests-section" aria-labelledby="interests-title">
            <div className="interests-inner">
                <p className="section-label">// Beyond the keyboard</p>
                <h2 id="interests-title" className="section-title-black">Interests</h2>
                <div className="interests-grid">
                    <div className="interests-languages">
                        <h3>Language learning</h3>
                        <dl className="interests-language-list">
                            {LANGUAGES.map(([language, level]) => (
                                <div key={language}><dt>{language}</dt><dd>{level}</dd></div>
                            ))}
                        </dl>
                    </div>
                    <div className="interests-other">
                        <h3>What else I'm into</h3>
                        <ul className="interests-list">
                            {INTERESTS.map(interest => (
                                <li key={interest}>{interest}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
