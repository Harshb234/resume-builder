import React from 'react';

export const MinimalTemplate = ({ data }) => {
    const { personalInfo, summary, experience, education, skills, projects, certifications, socialLinks } = data;

    const SectionTitle = ({ children }) => (
        <div className="border-b border-black mb-2 mt-4">
            <h2 className="text-sm font-bold uppercase">{children}</h2>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-white text-[#111] font-serif p-[20mm] mx-auto w-full max-w-[210mm] min-h-[297mm]">
            {/* Header */}
            <div className="text-center mb-4">
                <h1 className="text-3xl font-medium mb-2" style={{ fontFamily: 'serif' }}>
                    {personalInfo.fullName || 'Full Name'}
                </h1>
                <div className="text-[10pt] flex items-center justify-center gap-2 flex-wrap text-gray-700">
                    {personalInfo.location && <span>{personalInfo.location}</span>}
                    {personalInfo.email && (
                        <>
                            <span className="text-gray-400">|</span>
                            <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                        </>
                    )}
                    {personalInfo.phone && (
                        <>
                            <span className="text-gray-400">|</span>
                            <span>{personalInfo.phone}</span>
                        </>
                    )}
                </div>
                <div className="text-[10pt] flex items-center justify-center gap-2 mt-1 text-blue-800">
                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} className="hover:underline" target="_blank" rel="noreferrer">
                            {socialLinks.linkedin.replace('https://', '')}
                        </a>
                    )}
                    {socialLinks.github && (
                        <>
                            <span className="text-gray-400 font-serif">|</span>
                            <a href={socialLinks.github} className="hover:underline" target="_blank" rel="noreferrer">
                                {socialLinks.github.replace('https://', '')}
                            </a>
                        </>
                    )}
                </div>
            </div>

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-2">
                    <SectionTitle>Education</SectionTitle>
                    {education.map((edu, idx) => (
                        <div key={idx} className="mb-2 text-[10pt]">
                            <div className="flex justify-between items-baseline">
                                <div className="font-bold">
                                    {edu.school}, <span className="font-normal italic">{edu.degree}</span>
                                </div>
                                <div className="text-[9pt] font-sans">{edu.year}</div>
                            </div>
                            {edu.cgpa && (
                                <ul className="list-disc ml-5 mt-1">
                                    <li>CGPA: {edu.cgpa}</li>
                                </ul>
                            )}
                            {edu.coursework && (
                                <ul className="list-disc ml-5">
                                    <li><span className="font-bold">Coursework:</span> {edu.coursework}</li>
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-2">
                    <SectionTitle>Experience</SectionTitle>
                    {experience.map((exp, idx) => (
                        <div key={idx} className="mb-3 text-[10pt]">
                            <div className="flex justify-between items-baseline mb-1">
                                <div className="font-bold">
                                    {exp.role}, <span className="font-normal">{exp.company} {exp.location && `— ${exp.location}`}</span>
                                </div>
                                <div className="text-[9pt] font-sans">{exp.startDate} – {exp.endDate}</div>
                            </div>
                            <ul className="list-disc ml-5 space-y-0.5">
                                {exp.description?.split('\n').map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <section className="mb-2">
                    <SectionTitle>Projects</SectionTitle>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="mb-3 text-[10pt]">
                            <div className="font-bold mb-0.5">{proj.name}</div>
                            <ul className="list-disc ml-5 space-y-0.5">
                                {proj.description?.split('\n').map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}

            {/* Technologies */}
            {skills.some(c => c.items.length > 0) && (
                <section className="mb-2">
                    <SectionTitle>Technologies</SectionTitle>
                    <div className="space-y-1 text-[10pt]">
                        {skills.map((cat, idx) => cat.items.length > 0 && (
                            <div key={idx}>
                                <span className="font-bold">{cat.category} :</span> {cat.items.join(', ')}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
                <section className="mb-2">
                    <SectionTitle>Certifications</SectionTitle>
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="mb-2 text-[10pt]">
                            <div className="font-bold">{cert.name}</div>
                            {cert.issuer && <div className="text-[9pt] text-gray-600">Certificate</div>}
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
