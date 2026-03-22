import './CSS/Skills.css';

const SKILL_GROUPS = [
    {
        category: 'Languages',
        icon: '{ }',
        skills: ['Python', 'SQL', 'JavaScript', 'Bash'],
    },
    {
        category: 'ML / DL Frameworks',
        icon: '⚡',
        skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM'],
    },
    {
        category: 'Data Tools',
        icon: '◈',
        skills: ['Pandas', 'NumPy', 'PostgreSQL'],
    },
    {
        category: 'Cloud / Platforms',
        icon: '☁',
        skills: ['AWS', 'Cloudflare', 'Docker', 'Kubernetes', 'Git'],
    },
];

function Skills() {
    return (
        <section id="skills">
            <div className="skills-inner">
                <p className="section-label">// toolkit</p>
                <h2 className="section-title">Skills</h2>

                <div className="skills-grid">
                    {SKILL_GROUPS.map(group => (
                        <div key={group.category} className="skill-group">
                            <div className="skill-group-header">
                                <span className="skill-group-icon">{group.icon}</span>
                                <h3 className="skill-group-title">{group.category}</h3>
                            </div>
                            <div className="skill-pills">
                                {group.skills.map(skill => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
