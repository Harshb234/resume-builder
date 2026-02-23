import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export const ModernTemplate = ({ data }) => {
    const { personalInfo, summary, experience, education, skills, projects, certifications, socialLinks } = data;

    return (
        <div className="flex flex-col h-full bg-white text-slate-800 font-sans p-8 shadow-2xl mx-auto w-full max-w-[210mm] min-h-[297mm]">
            {/* Header */}
            <header className="border-b-4 border-blue-600 pb-6 mb-8">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">
                    {personalInfo.fullName || 'Your Name'}
                </h1>
                <p className="text-xl font-bold text-blue-600 mb-4">{personalInfo.title || 'Software Engineer'}</p>

                <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600">
                    {personalInfo.email && (
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-blue-600" /> {personalInfo.email}
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-blue-600" /> {personalInfo.phone}
                        </div>
                    )}
                    {personalInfo.location && (
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-600" /> {personalInfo.location}
                        </div>
                    )}
                    <div className="flex items-center gap-4">
                        {socialLinks.github && <Github className="w-4 h-4" />}
                        {socialLinks.linkedin && <Linkedin className="w-4 h-4" />}
                        {socialLinks.portfolio && <Globe className="w-4 h-4" />}
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 space-y-8">
                    {/* Summary */}
                    {summary && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">
                                Professional Summary
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">{summary}</p>
                        </section>
                    )}

                    {/* Experience */}
                    {experience.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
                                Work Experience
                            </h2>
                            <div className="space-y-6">
                                {experience.map((exp, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-slate-900">{exp.role}</h3>
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                                {exp.startDate} - {exp.endDate}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-slate-600 mb-2">{exp.company}</p>
                                        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {projects.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
                                Key Projects
                            </h2>
                            <div className="space-y-4">
                                {projects.map((proj, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-slate-900">{proj.name}</h3>
                                            {proj.link && <span className="text-xs text-blue-600">{proj.link}</span>}
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed mb-2">{proj.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {proj.techStack?.split(',').map((tech, i) => (
                                                <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="space-y-8">
                    {/* Skills */}
                    {skills.some(cat => cat.items.length > 0) && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
                                Core Skills
                            </h2>
                            <div className="space-y-4">
                                {skills.map((cat, idx) => cat.items.length > 0 && (
                                    <div key={idx}>
                                        <h4 className="text-xs font-black text-slate-500 uppercase mb-2">{cat.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((skill, i) => (
                                                <span key={i} className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded-md">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
                                Education
                            </h2>
                            <div className="space-y-4">
                                {education.map((edu, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
                                        <p className="text-xs text-slate-600">{edu.school}</p>
                                        <p className="text-[10px] font-bold text-blue-600">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Certifications */}
                    {certifications.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
                                Certifications
                            </h2>
                            <ul className="text-sm text-slate-700 space-y-1">
                                {certifications.map((cert, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
